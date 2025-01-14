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
    "& .rlc-container": {
      display: "flex",
      justifyContent: "space-between",
      height: "15rem",
      color: "text",
      bg: "bg",
      border: "normal",
      borderRadius: "3xl",
      textDecoration: "none",
      overflow: "hidden",
      marginBottom: "10",
      "& .rlc-info": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "7",
        gap: "0",
        marginBottom: "0",
        "& .rlc-title": {
          fontWeight: "600",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
        "& .rlc-description": {
          fontSize: "2xl",
          color: "gray",
        },
        "& .rlc-url-container": {
          fontSize: "2xl",
          flexShrink: "0",
          "& .rlc-favicon": {
            display: "none",
            flexShrink: "0",
          },
        },
        "& div": {
          marginBottom: "0",
        },
      },
      "& .rlc-image-container": {
        height: "100%",
        aspectRatio: "1.91/1",
        "& img": {
          height: "100%",
          objectFit: "contain",
        },
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
