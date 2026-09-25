"use client";

import { useEffect, useRef } from "react";

export default function WebflowFragment({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
    }
  }, [html]);

  return <div ref={ref} suppressHydrationWarning />;
}
