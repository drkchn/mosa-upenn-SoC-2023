import React, { useState } from "react";
import { AvailableElectionsDataResponse } from "../../Interfaces.ts";
export interface GlobalContextProps {
  children: React.ReactNode;
}

// ==================== React Contexts ====================
// Create a React context, this will make the value held here availble to all of its children
export const AvailableElectionsContext = React.createContext<
  AvailableElectionsDataResponse | undefined
>(undefined);
export const SetAvailableElectionsContext = React.createContext<any>({});
// ==================== React Contexts ====================

// Normal react component
export const AvailableElectionsContextWrapper = ({
  children,
}: GlobalContextProps) => {
  // ===================== React States =====================
  const [availableElections, setAvailableElections] =
    useState<AvailableElectionsDataResponse>();

  // ===================== React States =====================
  return (
    <AvailableElectionsContext.Provider value={availableElections}>
      <SetAvailableElectionsContext.Provider value={setAvailableElections}>
        {children}
      </SetAvailableElectionsContext.Provider>
    </AvailableElectionsContext.Provider>
  );
};
