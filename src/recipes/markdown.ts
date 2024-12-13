import { cva } from "../../styled-system/css";

export const markdown = cva({
  base: {
    "& img": {
      display: "block",
      marginInline: "auto",
    },
    "& h2": {
      fontSize: "4xl",
      fontWeight: "bold",
      paddingBottom: "3",
      marginTop: "20",
      marginBottom: "10",
      pos: "relative",
      _before: {
        content: "''",
        pos: "absolute",
        bottom: "0",
        width: "90%",
        borderBottom: "1px solid {colors.text.dark}",
      },
      _after: {
        content: "''",
        pos: "absolute",
        bottom: "-3px",
        left: "90%",
        width: "3",
        height: "3",
        bg: "text.dark",
        transform: "rotate(45deg)",
      },
    },
  },
  variants: {
    type: {
      blog: {
        "& p": {
          marginBottom: "8",
        },
      },
      work: {
        "& p": {
          marginBottom: "12",
        },
      },
    },
  },
});
