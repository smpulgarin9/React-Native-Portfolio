import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Image, TouchableOpacity, Animated, Easing } from "react-native";
import ColorPaint from "../../utils/ColorPaint";
import ColorPaletteList, { IColorPalette } from "../../utils/ColorPalette";

import styles from "./style";
import { SvgXml } from "react-native-svg";
import Colors from "../../theme/Colors";

interface IProps {
  selectedColor: IColorPalette;
  setSelectedColor: (color: IColorPalette) => void;
}

export default function ColorPalette({
  selectedColor,
  setSelectedColor,
}: IProps): JSX.Element {
  const animation = useRef(new Animated.Value(1)).current;
  const [currentColor, setCurrentColor] = useState(selectedColor);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 800,
        useNativeDriver: true,
      })
    ).start();
  }, [animation, currentColor]);

  const setColor = (color: IColorPalette) => {
    animation.resetAnimation();
    setCurrentColor(color);
    setSelectedColor(color);
  };

  const movingObject = (
    color: IColorPalette,
    index: number,
    setSelectedColor: (color: IColorPalette) => void
  ) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.buttonColorItem}
        onPress={() => setSelectedColor(color)}
      >
        <SvgXml
          xml={ColorPaint(color.rgb as string, Colors.black)}
          width={`31`}
          height={`31`}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          style={styles.imageColors}
          source={require("../../assets/tigreBoard.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.colorGroup}>
        {ColorPaletteList.map((color, index) => {
          if (currentColor == color) {
            return (
              <Animated.View
                key={index}
                style={{
                  transform: [{ scale: animation }],
                }}
              >
                {movingObject(color, index, setColor)}
              </Animated.View>
            );
          } else {
            return movingObject(color, index, setColor);
          }
        })}
      </View>
    </View>
  );
}
