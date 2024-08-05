import React from "react";
import styles from "./style";
import { ImageBackground, SafeAreaView, StatusBar, View } from "react-native";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

interface IProps {
  image: any;
  children: JSX.Element;
}

export default function Background({ image, children }: IProps): JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          {children}
          <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
