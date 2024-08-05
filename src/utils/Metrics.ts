import { Dimensions } from "react-native";
import Colors from "../theme/Colors";
const window = Dimensions.get("window");

export default {
  screenWidth: window.width,
  screenHeight: window.height,
  fontFamily: "Arial",
  colorsBottons: [
    [Colors.purpura, Colors.violeta_profundo],
    [Colors.naranja_claro, Colors.naranja_oscuro],
    [Colors.azul, Colors.azul_real],
    [Colors.verde_lima, Colors.verde_brillante],
    [Colors.amarillo_claro, Colors.amarillo_oscuro],
    [Colors.rosa_claro, Colors.rojo_oscuro],
  ],
};
