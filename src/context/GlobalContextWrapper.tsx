import React from "react";

import { RepresentativeDataContextWrapper } from "./contextWrappers/RepresentativeDataContextWrapper.tsx";
import { AvailableElectionsContextWrapper } from "./contextWrappers/AvailableElectionsContext.tsx";
import { ThemeContextWrapper } from "./contextWrappers/ThemeContextWrapper.tsx";

export interface GlobalContextProps {
  children: React.ReactNode;
}

// Normal react component
export const GlobalContextWrapper = ({ children }: GlobalContextProps) => {
  return (
    <ThemeContextWrapper>
      <RepresentativeDataContextWrapper>
        <AvailableElectionsContextWrapper>
          {children}
        </AvailableElectionsContextWrapper>
      </RepresentativeDataContextWrapper>
    </ThemeContextWrapper>
  );
};
