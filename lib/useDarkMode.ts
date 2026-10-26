
"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function useDarkMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = mounted && resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const setDarkMode = (enabled: boolean) => {
    setTheme(enabled ? "dark" : "light");
  };

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
    mounted,
  };
}
