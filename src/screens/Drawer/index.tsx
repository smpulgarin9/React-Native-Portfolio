import React, { useEffect, useState } from "react";
import { BackHandler, ImageBackground, View } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { DrawerScreenProps } from "../../navigation/Types";

// Components
import ColorPalette from "../../components/ColorPalette";
import DrawingBoard from "../../components/DrawingBoard";
import StrokerOptions from "../../components/StrokerOptions";

// Utils
import ColorPaletteList, { IColorPalette } from "../../utils/ColorPalette";
import InterstitialAdManager from "../../utils/InterstitialAdManager";
import stroker from "../../utils/StrokersSvg/Strokers";
import styles from "./style";

export default function DrawerScreen({
  navigation,
  route,
}: DrawerScreenProps): JSX.Element {
  const [currentColor, setCurrentColor] = useState<IColorPalette>(
    ColorPaletteList[0]
  );
  const [currentStroker, setCurrentStroker] = useState(
    stroker("").lapiz.stroker
  );

  const onBackPress = () => {
    InterstitialAdManager.show();
    return false;
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", onBackPress);

    return () => {
      navigation.removeListener("beforeRemove", onBackPress);
    };
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  // RNSVG: ClipPath can't be drawn, it should be defined as a child component for `Defs`
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../../assets/background2.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <DrawingBoard
            imageUrl={route.params.image}
            color={currentColor.rgba as string}
            stroker={currentStroker}
          />
          <StrokerOptions
            setCurrentStroker={setCurrentStroker}
            currentStroker={currentStroker}
            color={currentColor.rgb as string}
          />
          <ColorPalette
            selectedColor={currentColor}
            setSelectedColor={setCurrentColor}
          />
          <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
