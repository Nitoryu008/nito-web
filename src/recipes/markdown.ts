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
      textWrap: "unset",
      paddingRight: "0",
      borderBottom: "1px solid {colors.text.dark}",
      _before: {
        content: "'＃'",
        paddingRight: "2",
      },
      _after: {
        content: "''",
        pos: "absolute",
        bottom: "-3px",
        left: "100%",
        width: "3",
        height: "3",
        bg: "text.dark",
        transform: "rotate(45deg)",
      },
    },
    "& h3": {
      fontSize: "4xl",
      fontWeight: "bold",
      paddingBottom: "3",
      marginBottom: "10",
      borderBottom: "normal",
      pos: "relative",
    },
    "& a": {
      textDecoration: "underline",
      color: "text.link",
    },
    "& > div": {
      textAlign: "center",
    },
    "& p": {
      lineHeight: "1.7",
    },
    "& pre": {
      padding: "8",
    },
    "& blockquote": {
      lineBreak: "anywhere",
      color: "bg",
      bg: "text.dark",
      padding: "8",
      borderRadius: "xl",
      display: "inline-block",
      lineHeight: "1.5",
      textAlign: "left",
      "& p": {
        margin: "0",
      },
    },
  },
  variants: {
    type: {
      blog: {
        "& p, pre, div, blockquote": {
          marginBottom: "8",
        },
      },
      work: {
        "& p, pre, div, blockquote": {
          marginBottom: "12",
        },
      },
    },
  },
});
