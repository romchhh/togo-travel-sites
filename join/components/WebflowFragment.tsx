"use client";

import { useEffect, useRef } from "react";

function bindTelLinks(root: HTMLElement) {
  root.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.<HTMLAnchorElement>("a[href^='tel:']");
      if (!link?.href?.startsWith("tel:")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = link.href;
    },
    true
  );
}

export default function WebflowFragment({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = html;
    bindTelLinks(ref.current);
  }, [html]);

  return <div ref={ref} suppressHydrationWarning />;
}
