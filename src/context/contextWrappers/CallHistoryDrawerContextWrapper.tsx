import React from "react";

export interface GlobalContextProps {
  children: React.ReactNode;
}

// TODO - remove this ?

// ==================== React Contexts ====================
export const CallHistoryDrawerIsOpenContext = React.createContext(false);
export const SetCallHistoryDrawerIsOpenContext = React.createContext({});
// ==================== React Contexts ====================

// Normal react component
export const CallHistoryDrawerContextWrapper = ({
  children,
}: GlobalContextProps) => {
  // ===================== React States =====================
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <CallHistoryDrawerIsOpenContext.Provider value={isOpen}>
      <SetCallHistoryDrawerIsOpenContext.Provider value={setIsOpen}>
        {children}
      </SetCallHistoryDrawerIsOpenContext.Provider>
    </CallHistoryDrawerIsOpenContext.Provider>
  );
};
