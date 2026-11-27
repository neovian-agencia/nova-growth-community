import { lazy, Suspense, useEffect, useState, type ComponentProps } from "react";

const TechTextLazy = lazy(() => import("./TechText"));
const FluxLinesLazy = lazy(() => import("./FluxLines"));

function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

export function TechTextClient(props: ComponentProps<typeof TechTextLazy>) {
  const m = useMounted();
  if (!m) return null;
  return <Suspense fallback={null}><TechTextLazy {...props} /></Suspense>;
}

export function FluxLinesClient(props: ComponentProps<typeof FluxLinesLazy>) {
  const m = useMounted();
  if (!m) return null;
  return <Suspense fallback={null}><FluxLinesLazy {...props} /></Suspense>;
}
