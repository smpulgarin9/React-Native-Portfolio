import { ColorValue } from "react-native";
import Colors from "../theme/Colors";

export interface IColorPalette {
    rgb: ColorValue;
    rgba: ColorValue;
}

const colors: IColorPalette[] = [
  { rgb: Colors.aqua_marine, rgba: Colors.aqua_marine_rgba },
  { rgb: Colors.sky_blue, rgba: Colors.sky_blue_rgba },
  { rgb: Colors.fuchsia_pink, rgba: Colors.fuchsia_pink_rgba },
  { rgb: Colors.coral_red, rgba: Colors.coral_red_rgba },
  { rgb: Colors.tangerine, rgba: Colors.tangerine_rgba },
  { rgb: Colors.peach, rgba: Colors.peach_rgba },
  { rgb: Colors.cinnamon, rgba: Colors.cinnamon_rgba },
  { rgb: Colors.sage_green, rgba: Colors.sage_green_rgba },
  { rgb: Colors.lime, rgba: Colors.lime_rgba },
  { rgb: Colors.lemon_yellow, rgba: Colors.lemon_yellow_rgba },
  { rgb: Colors.goldenrod, rgba: Colors.goldenrod_rgba },
  { rgb: Colors.mint_cream, rgba: Colors.mint_cream_rgba },
  { rgb: Colors.blush, rgba: Colors.blush_rgba },
  { rgb: Colors.brick_red, rgba: Colors.brick_red_rgba },
  { rgb: Colors.mulberry, rgba: Colors.mulberry_rgba },
  { rgb: Colors.slate_purple, rgba: Colors.slate_purple_rgba },
  { rgb: Colors.indigo, rgba: Colors.indigo_rgba },
  { rgb: Colors.olive_drab, rgba: Colors.olive_drab_rgba },
  { rgb: Colors.charcoal, rgba: Colors.charcoal_rgba },
  { rgb: Colors.crimson, rgba: Colors.crimson_rgba },
  { rgb: Colors.orchid, rgba: Colors.orchid_rgba },
  { rgb: Colors.royal_purple, rgba: Colors.royal_purple_rgba },
  { rgb: Colors.deep_blue, rgba: Colors.deep_blue_rgba },
  { rgb: Colors.cornflower_blue, rgba: Colors.cornflower_blue_rgba },
];

export default colors;