import { css } from "../../styled-system/css";

const styles = {
  background: css({
    pos: "fixed",
    zIndex: "-100",
    top: "0",
    width: "100%",
    height: "100lvh",
    "&> img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  }),
};

export default styles;
