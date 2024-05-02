import React from "react";
import { Appearance } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/services/AppStore";

import Navigation from "./src/navigation/Navigation";

import { ThemeContext } from "./src/theme/ThemeContext";

export default function App(): JSX.Element {

  return (
    <ReduxProvider store={store}>
      <ThemeContext.Provider value={Appearance.getColorScheme() || 'light'}>
        <Navigation />
      </ThemeContext.Provider>
    </ReduxProvider>
  );
}; 
