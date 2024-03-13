import { css } from "@emotion/react";

const buttonCss = {
  button: css({
    backgroundColor: "var(--bright-yellow)",
    width: "100%",
    textAlign: "center",
    paddingTop: "1em",
    paddingBottom: "1em",
    fontWeight: "bold",
    borderRadius: " 0.25rem",
    marginTop: "2rem",
    display: "block",
  }),
};
// eslint-disable-next-line react/prop-types
export default function Button({ linkText = "Click" }) {
  return <a css={buttonCss.button}>{linkText}</a>;
}
