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

export default function WebflowHome({ html }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const booted = useRef(false);

  useEffect(() => {
    if (!rootRef.current || booted.current) return;
    booted.current = true;

    const root = rootRef.current;
    root.innerHTML = html;
    reinjectScripts(root);

    const urlParams = new URLSearchParams(window.location.search);
    const successEl = root.querySelector<HTMLElement>(".success-message");
    const errorEl = root.querySelector<HTMLElement>(".error-message");
    if (urlParams.has("success") && successEl) {
      successEl.style.display = "block";
    }
    if (urlParams.has("error") && errorEl) {
      errorEl.style.display = "block";
    }

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
