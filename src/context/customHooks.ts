import React from "react";
import {
  RepresentativeDataContext,
  SetRepresentativeDataContext,
} from "./contextWrappers/RepresentativeDataContextWrapper.tsx";
import {
  AvailableElectionsContext,
  SetAvailableElectionsContext,
} from "./contextWrappers/AvailableElectionsContext.tsx";
import {
  ColorModeContext,
  SetColorModeContext,
} from "./contextWrappers/ThemeContextWrapper.tsx";
import {
  SetUserInputAddressContext,
  UserInputAddressContext,
} from "./contextWrappers/AddressContextWrapper.tsx";
import {
  ElectionResponseContext,
  SetElectionResponseContext,
} from "./contextWrappers/ElectionResponseContextWrapper.tsx";

// This is a utility file for custom hooks

// 1 custom hook per context in order to expose it to consumer component

// ==================== Theme ====================
export const useColorMode = () => {
  return React.useContext(ColorModeContext);
};

export const useSetColorMode = () => {
  return React.useContext(SetColorModeContext);
};
// ==================== Theme ====================

// ============= Representative Data =============

export const useRepresentativeDataContext = () => {
  return React.useContext(RepresentativeDataContext);
};
export const useSetRepresentativeDataContext = () => {
  return React.useContext(SetRepresentativeDataContext);
};

// ============= Representative Data =============

// ============= Available Elections =============

export const useAvailableElectionsContext = () => {
  return React.useContext(AvailableElectionsContext);
};
export const useSetAvailableElectionsContext = () => {
  return React.useContext(SetAvailableElectionsContext);
};
// ============= Available Elections =============

// ============= User Address =============

export const getUserInputAddressContext = () => {
  return React.useContext(UserInputAddressContext);
};
export const getSetUserInputAddressContext = () => {
  return React.useContext(SetUserInputAddressContext);
};
// ============== User Address ===============

// ============= Election Response =============

export const getElectionResponseContext = () => {
  return React.useContext(ElectionResponseContext);
};
export const getSetElectionResponseContext = () => {
  return React.useContext(SetElectionResponseContext);
};
// ============= Election Response =============
