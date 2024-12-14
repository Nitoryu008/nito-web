import type { PatternConfig } from "@pandacss/dev";

export const bg_extend: PatternConfig = {
  description: "Bg Extend Animation",
  transform(props) {
    return {
      position: "relative",
      overflow: "hidden",
      opacity: 0,
      animation: "appear",
      _before: {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "currentcolor",
        animation: "bg_extend",
      },
      "& span": {
        opacity: 0,
        animation: "appear",
        animationDelay: "0.5s",
      },
      ...props,
    };
  },
};
