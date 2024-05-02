import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/AppStore";

import Navigation from "./Navigation";

export default function App(): JSX.Element {

  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}; 
