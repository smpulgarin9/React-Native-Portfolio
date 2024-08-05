import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Image, Animated } from "react-native";
import { SvgXml } from "react-native-svg";

import styles from "./style";
import stroker from "../../utils/StrokersSvg/Strokers";
import Colors from "../../theme/Colors";
import { forIn } from "lodash";

interface IProps {
  setCurrentStroker: (stroker: number) => void;
  currentStroker: number;
  color: string;
}

export default function StrokerOptions({
  setCurrentStroker,
  currentStroker,
  color,
}: IProps): JSX.Element {
  const strokerItems = stroker(color);
  const renderItems: JSX.Element[] = [];
  const animation = useRef(new Animated.Value(1)).current;
  const [selectedStroker, setSelectedStroker] = useState(currentStroker);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1.1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [animation, selectedStroker]);

  const colors = [
    Colors.red_stroker,
    Colors.green_stroker,
    Colors.yellow_stroker,
    Colors.purple_stroker,
  ];
  var index = 0;

  forIn(strokerItems, (strokerItem) => {
    const onPress = () => {
      animation.resetAnimation();
      setCurrentStroker(strokerItem.stroker);
      setSelectedStroker(strokerItem.stroker);
    };

    const item = (
      <View key={strokerItem.stroker + index} style={styles.containerButton}>
        <TouchableOpacity onPress={onPress} style={styles.shadow}>
          <View style={[styles.containt, { backgroundColor: colors[index] }]}>
            <View style={styles.svgContainer}>
              <SvgXml xml={strokerItem.xml} width={`${60}`} height={`${60}`} />
              <Image source={strokerItem.image} style={styles.imageContainer} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );

    if (strokerItem.stroker === currentStroker) {
      renderItems.push(
        <Animated.View
          key={strokerItem.stroker + index}
          style={{
            transform: [{ scale: animation }],
          }}
        >
          {item}
        </Animated.View>
      );
    } else {
      renderItems.push(item);
    }
    index++;
  });

  return <View style={styles.strokers}>{renderItems}</View>;
}
