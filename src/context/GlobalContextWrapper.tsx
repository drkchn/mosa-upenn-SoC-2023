import React from "react";

import { RepresentativeDataContextWrapper } from "./contextWrappers/RepresentativeDataContextWrapper.tsx";
import { AvailableElectionsContextWrapper } from "./contextWrappers/AvailableElectionsContext.tsx";
import { ThemeContextWrapper } from "./contextWrappers/ThemeContextWrapper.tsx";
import { AddressContextWrapper } from "./contextWrappers/AddressContextWrapper.tsx";
import { ElectionResponseContextWrapper } from "./contextWrappers/ElectionResponseContextWrapper.tsx";

export interface GlobalContextProps {
  children: React.ReactNode;
}

// Normal react component
export const GlobalContextWrapper = ({ children }: GlobalContextProps) => {
  return (
    <ThemeContextWrapper>
      <RepresentativeDataContextWrapper>
        <AvailableElectionsContextWrapper>
          <ElectionResponseContextWrapper>
            <AddressContextWrapper>{children}</AddressContextWrapper>
          </ElectionResponseContextWrapper>
        </AvailableElectionsContextWrapper>
      </RepresentativeDataContextWrapper>
    </ThemeContextWrapper>
  );
};
