import React, { useState, Children } from "react";
import { TouchableOpacity, View, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Canvas, Path, SkPath, SkPaint } from "@shopify/react-native-skia";

import styles from "./style";
import useTouchHandler from "./touchBoardHandler";

export interface IPath {
  path: SkPath;
  paint: SkPaint;
}

interface IProps {
  color: string;
  stroker: number;
  imageUrl: string;
}

export default function DrawingBoard({
  color,
  stroker,
  imageUrl,
}: IProps): JSX.Element {
  const [paths, setPaths] = useState<IPath[]>([]);
  const [pathsT, setPathsT] = useState<IPath[]>([]);

  const onTouch = useTouchHandler(
    (paths) => {
      setPaths((values) => values.concat(paths));
    },
    (paths) => {
      setPathsT((values) => values.concat(paths));
      setPaths([]);
    },
    color,
    stroker
  );

  const onPressErase = () => {
    pathsT.splice(pathsT.length - 1, 1);
    setPathsT(pathsT);
    setPaths([]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.boardBackground}
        resizeMode="stretch"
        source={{ uri: imageUrl }}
      >
        <Canvas style={styles.container} onTouch={onTouch}>
          {Children.toArray([
            pathsT.map((value) => (
              <Path path={value.path} paint={value.paint} />
            )),
            paths.map((value) => (
              <Path path={value.path} paint={value.paint} />
            )),
          ])}
        </Canvas>
        <TouchableOpacity style={styles.eraseButton} onPress={onPressErase}>
          <MaterialCommunityIcons name="eraser" size={35} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
