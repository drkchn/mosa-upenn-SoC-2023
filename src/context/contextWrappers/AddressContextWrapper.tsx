import React, { useState } from "react";
export interface GlobalContextProps {
  children: React.ReactNode;
}

// ==================== React Contexts ====================
// Create a React context, this will make the value held here availble to all of its children
export const UserInputAddressContext = React.createContext<string | undefined>(
  undefined
);
export const SetUserInputAddressContext = React.createContext<any>({});
// ==================== React Contexts ====================

// Normal react component
export const AddressContextWrapper = ({ children }: GlobalContextProps) => {
  // ===================== React States =====================
  const [userInputAddress, setUserInputAddress] = useState<string>();

  // ===================== React States =====================
  return (
    <UserInputAddressContext.Provider value={userInputAddress}>
      <SetUserInputAddressContext.Provider value={setUserInputAddress}>
        {children}
      </SetUserInputAddressContext.Provider>
    </UserInputAddressContext.Provider>
  );
};
