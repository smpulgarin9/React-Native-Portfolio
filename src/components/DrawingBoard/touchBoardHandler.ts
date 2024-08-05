import { useRef } from "react";
import {
  Color,
  PaintStyle,
  SkPaint,
  SkPath,
  Skia,
  TouchHandler,
  useTouchHandler,
} from "@shopify/react-native-skia";
import ColorPaletteList from "../../utils/ColorPalette";
import { IPath } from ".";

export default (
  setPaths: (paths: IPath) => void,
  setPathsT: (paths: IPath) => void,
  color: string,
  stroker: number
): TouchHandler => {
  const currentPath = useRef<SkPath | null>(null);
  const currentColor = useRef<Color>(ColorPaletteList[0].rgba as Color);
  const currentStroker = useRef<number>(stroker);

  const paint = () => {
    const paint = Skia.Paint();
    paint.setStyle(PaintStyle.Stroke);
    paint.setStrokeWidth(stroker);
    paint.setColor(Skia.Color(ColorPaletteList[0].rgba as Color));
    return paint;
  };

  currentColor.current = color;
  currentStroker.current = stroker;

  const setPathsFuc = (func: (paths: IPath) => void) => {
    const cPaint = paint();
    cPaint.setStrokeWidth(currentStroker.current!);
    cPaint.setColor(Skia.Color(currentColor.current!));

    func({
      path: currentPath.current!,
      paint: cPaint,
    });
  };

  return useTouchHandler({
    onStart: ({ x, y }) => {
      currentPath.current = Skia.Path.Make();
      currentPath.current.moveTo(x, y);
    },
    onActive: ({ x, y }) => {
      currentPath.current?.lineTo(x, y);
      setPathsFuc(setPaths);
    },
    onEnd: () => {
      setPathsFuc(setPathsT);
      currentPath.current = null;
    },
  });
};
