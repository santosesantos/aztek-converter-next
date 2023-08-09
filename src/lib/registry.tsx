"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

interface IProps {
  children: React.ReactNode;
}

export default function StyledComponentsRegistry({ children }: IProps) {
  const [styledComponenStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponenStyleSheet.getStyleElement();
    styledComponenStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponenStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}