import React, { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/services/AppStore";
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

import Navigation from "./src/navigation/Navigation";

export default function App(): JSX.Element {
// Initialize Google Mobile Ads SDK
useEffect(() => {
  (async () => {

  await mobileAds()
    .setRequestConfiguration({      
      maxAdContentRating: MaxAdContentRating.PG, // Update all future requests suitable for parental guidance      
      tagForChildDirectedTreatment: true, // Indicates that you want your content treated as child-directed for purposes of COPPA.
      /** Indicates that you want the ad request to be handled in a
       * manner suitable for users under the age of consent. **/
      tagForUnderAgeOfConsent: true,
      testDeviceIdentifiers: ['EMULATOR'],
    });
    // Initialize the ads
    await mobileAds().initialize();
  })();
}, [])
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}; 
