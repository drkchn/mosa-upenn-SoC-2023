import React, { useState } from "react";

import { RepresentativeDataResponse } from "../Interfaces.ts";

export interface GlobalContextProps {
  children: React.ReactNode;
}

// ==================== React Contexts ====================
// Create a React context, this will make the value held here availble to all of its children
export const RepresentativeDataResponseContext = React.createContext<
  RepresentativeDataResponse | undefined
>(undefined);
export const SetRepresentativeDataResponseContext = React.createContext({});
// ==================== React Contexts ====================

// Normal react component
export const RepresentativeDataContext = ({ children }: GlobalContextProps) => {
  // ===================== React States =====================
  const [representativeDataResponse, setRepresentativeDataResponse] =
    useState<RepresentativeDataResponse>();

  // ===================== React States =====================
  return (
    <RepresentativeDataResponseContext.Provider
      value={representativeDataResponse}
    >
      <SetRepresentativeDataResponseContext.Provider
        value={setRepresentativeDataResponse}
      >
        {children}
      </SetRepresentativeDataResponseContext.Provider>
    </RepresentativeDataResponseContext.Provider>
  );
};
