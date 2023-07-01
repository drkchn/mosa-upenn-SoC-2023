import React, { useState } from "react";

import { RepresentativeDataResponse } from "../../Interfaces.ts";

export interface GlobalContextProps {
  children: React.ReactNode;
}

// ==================== React Contexts ====================
// Create a React context, this will make the value held here availble to all of its children
export const RepresentativeDataContext = React.createContext<
  RepresentativeDataResponse | undefined
>(undefined);
export const SetRepresentativeDataContext = React.createContext({});
// ==================== React Contexts ====================

// Normal react component
export const RepresentativeDataContextWrapper = ({
  children,
}: GlobalContextProps) => {
  // ===================== React States =====================
  const [representativeDataResponse, setRepresentativeDataResponse] =
    useState<RepresentativeDataResponse>();

  // ===================== React States =====================
  return (
    <RepresentativeDataContext.Provider value={representativeDataResponse}>
      <SetRepresentativeDataContext.Provider
        value={setRepresentativeDataResponse}
      >
        {children}
      </SetRepresentativeDataContext.Provider>
    </RepresentativeDataContext.Provider>
  );
};
