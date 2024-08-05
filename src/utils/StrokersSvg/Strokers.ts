import { ImageSourcePropType } from "react-native";
import lapiz from "./Lapiz";
import crayon from "./Crayon";
import pincel from "./Pincel";
import brocha from "./Brocha";

export type TStrokerNames = "lapiz" | "crayon" | "pincel" | "brocha";

export type IStrokerSvg = {
  [key in TStrokerNames]: {
    image: ImageSourcePropType;
    stroker: number;
    xml: string;
  };
};

export default function stroker(color: String): IStrokerSvg {
  return {
    lapiz: {
      image: require("../../assets/stroker/lapiz.png"),
      stroker: 3,
      xml: lapiz(color),
    },
    crayon: {
      image: require("../../assets/stroker/crayon.png"),
      stroker: 10,
      xml: crayon(color),
    },
    pincel: {
      image: require("../../assets/stroker/pincel.png"),
      stroker: 13,
      xml: pincel(color),
    },
    brocha: {
      image: require("../../assets/stroker/brocha.png"),
      stroker: 18,
      xml: brocha(color),
    },
  };
}
