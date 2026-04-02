import React, { createContext, useCallback, useContext, useState } from "react";

interface HeaderContentContextValue {
  headerContent: React.ReactNode;
  setHeaderContent: (content: React.ReactNode) => void;
}

const HeaderContentContext = createContext<HeaderContentContextValue>({
  headerContent: null,
  setHeaderContent: () => {},
});

export function HeaderContentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerContent, setHeaderContent] = useState<React.ReactNode>(null);

  return (
    <HeaderContentContext.Provider value={{ headerContent, setHeaderContent }}>
      {children}
    </HeaderContentContext.Provider>
  );
}

export function useHeaderContent() {
  return useContext(HeaderContentContext);
}
