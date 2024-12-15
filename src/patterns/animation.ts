import type { PatternConfig } from "@pandacss/dev";

export const bg_extend: PatternConfig = {
  description: "Bg Extend Animation",
  transform(props) {
    const { ...rest } = props;

    return {
      position: "relative",
      overflow: "hidden",
      opacity: 0,
      _loaded: {
        animation: "appear",
      },
      _before: {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "currentcolor",
        _loaded: {
          animation: "bg_extend",
        },
      },
      "& > span": {
        opacity: 0,
        _loaded: {
          animation: "appear",
          animationDelay: "0.48s",
        },
      },
      ...rest,
    };
  },
};
