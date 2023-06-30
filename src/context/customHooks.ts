import { ColorModeContext, SetColorModeContext } from "./GlobalContext.tsx";
import React from "react";
import {
  RepresentativeDataResponseContext,
  SetRepresentativeDataResponseContext,
} from "./RepresentativeDataContext.tsx";

// This is a utility file for custom hooks

// ==================== Custom React Hooks ====================
// 1 custom hook per context in order to expose it to consumer component
export const useColorMode = () => {
  return React.useContext(ColorModeContext);
};

export const useSetColorMode = () => {
  return React.useContext(SetColorModeContext);
};

export const useRepresentativeDataResponse = () => {
  return React.useContext(RepresentativeDataResponseContext);
};
export const useSetRepresentativeDataResponse = () => {
  return React.useContext(SetRepresentativeDataResponseContext);
};
// ==================== Custom React Hooks ====================
