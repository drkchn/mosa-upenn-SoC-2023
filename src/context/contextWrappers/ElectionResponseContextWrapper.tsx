import React, { useState } from "react";
import { ElectionItem } from "../../Interfaces.ts";
export interface GlobalContextProps {
  children: React.ReactNode;
}

// ==================== React Contexts ====================
// Create a React context, this will make the value held here availble to all of its children
export const ElectionResponseContext = React.createContext<any>({});
export const SetElectionResponseContext = React.createContext<any>({});
// ==================== React Contexts ====================

// Normal react component
export const ElectionResponseContextWrapper = ({
  children,
}: GlobalContextProps) => {
  // ===================== React States =====================
  const [electionMap, setElectionMap] = useState<Map<string, ElectionItem>>(
    new Map()
  );

  // ===================== React States =====================
  return (
    <ElectionResponseContext.Provider value={electionMap}>
      <SetElectionResponseContext.Provider value={setElectionMap}>
        {children}
      </SetElectionResponseContext.Provider>
    </ElectionResponseContext.Provider>
  );
};
