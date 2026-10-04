"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`
    );
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function reinjectScripts(root: HTMLElement) {
  const scripts = Array.from(root.querySelectorAll("script"));
  for (const oldScript of scripts) {
    const newScript = document.createElement("script");
    for (const attr of Array.from(oldScript.attributes)) {
      newScript.setAttribute(attr.name, attr.value);
    }
    newScript.textContent = oldScript.textContent;
    oldScript.parentNode?.replaceChild(newScript, oldScript);
  }
}

function showFormState(
  form: HTMLFormElement,
  successEl: HTMLElement | null,
  errorEl: HTMLElement | null,
  state: "success" | "error"
) {
  if (state === "success") {
    form.style.display = "none";
    if (successEl) successEl.style.display = "block";
    if (errorEl) errorEl.style.display = "none";
  } else {
    form.style.display = "";
    if (successEl) successEl.style.display = "none";
    if (errorEl) errorEl.style.display = "block";
  }

  const anchor =
    successEl?.offsetParent != null
      ? successEl
      : errorEl?.offsetParent != null
        ? errorEl
        : form;
  anchor.scrollIntoView({ behavior: "smooth", block: "center" });
}

function bindHeroForm(root: HTMLElement) {
  const form = root.querySelector<HTMLFormElement>("#form");
  if (!form) return;

  const successEl = root.querySelector<HTMLElement>(".success-message");
  const errorEl = root.querySelector<HTMLElement>(".error-message");
  const submitBtn = form.querySelector<HTMLInputElement>(
    'input[type="submit"]'
  );
  const waitText = submitBtn?.getAttribute("data-wait") || "Надсилаємо...";
  const idleText = submitBtn?.value || "Підібрати тур";

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("success")) {
    showFormState(form, successEl, errorEl, "success");
  } else if (urlParams.has("error")) {
    showFormState(form, successEl, errorEl, "error");
  }

  if (urlParams.has("success") || urlParams.has("error")) {
    const clean = new URL(window.location.href);
    clean.searchParams.delete("success");
    clean.searchParams.delete("error");
    window.history.replaceState({}, "", `${clean.pathname}${clean.hash || "#form"}`);
  }

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.value = waitText;
      }
      if (errorEl) errorEl.style.display = "none";

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        });
        const result = (await response.json().catch(() => null)) as {
          success?: boolean;
        } | null;

        if (response.ok && result?.success) {
          showFormState(form, successEl, errorEl, "success");
          form.reset();
        } else {
          showFormState(form, successEl, errorEl, "error");
        }
      } catch {
        showFormState(form, successEl, errorEl, "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = idleText;
        }
      }
    },
    true
  );
}

export default function WebflowHome({ html }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const booted = useRef(false);

  useEffect(() => {
    if (!rootRef.current || booted.current) return;
    booted.current = true;

    const root = rootRef.current;
    root.innerHTML = html;
    reinjectScripts(root);
    bindHeroForm(root);

    let cancelled = false;

    (async () => {
      try {
        await loadScript("/js/jquery.js");
        if (cancelled) return;
        await loadScript("/js/webflow.js");
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [html]);

  return <div ref={rootRef} suppressHydrationWarning />;
}
