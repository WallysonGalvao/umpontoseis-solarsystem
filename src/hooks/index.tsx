import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PlanetProvider } from "./planet";

const AppProvider: React.FC = ({ children }) => {
  return <PlanetProvider>{children}</PlanetProvider>;
};

export default AppProvider;
