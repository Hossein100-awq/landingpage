"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ReactNode } from "react";

const cache = createCache({
  key: "mui",
  prepend: true,
});

export default function EmotionRegistry({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
}