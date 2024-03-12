import { css } from "@emotion/react";

const buttonCss = {
  button: css({
    backgroundColor: "var(--bright-yellow)",
    width: "100%",
    textAlign: "center",
    paddingTop: "1em",
    paddingBottom: "0.8em",
    fontWeight: "bold",
    borderRadius: " 0.25rem",
    marginTop: "2rem",
  }),
};
export default function Button({ linkText = "Click" }) {
  return <a css={buttonCss.button}>{linkText}</a>;
}
