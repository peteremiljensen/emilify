import React, { createContext, useContext, useState, useCallback } from "react";
import type { LayoutChangeEvent } from "react-native";

interface HeaderHeightContextValue {
  headerHeight: number;
  onHeaderLayout: (e: LayoutChangeEvent) => void;
}

const HeaderHeightContext = createContext<HeaderHeightContextValue>({
  headerHeight: 0,
  onHeaderLayout: () => {},
});

export function HeaderHeightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useState(0);

  const onHeaderLayout = useCallback((e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height);
  }, []);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight, onHeaderLayout }}>
      {children}
    </HeaderHeightContext.Provider>
  );
}

export function useHeaderHeight() {
  return useContext(HeaderHeightContext);
}
