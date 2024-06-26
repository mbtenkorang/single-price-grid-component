/* eslint-disable react/prop-types */
import { css } from "@emotion/react";

const styles = css`
  h1 {
    color: var(--cyan);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1em;
  }

  p {
    font-size: 0.9rem;
  }

  h1 + p {
    color: var(--bright-yellow);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p + p {
    color: var(--grayishblue);
    line-height: 1.5;
  }

  @media screen and (min-width: 798px) {
    .text {
      max-width: 88%;
    }
  }
`;

export default function Join({ title = "", guarantee = "", fullText = "" }) {
  return (
    <header css={styles}>
      <h1>{title}</h1>
      <p>{guarantee}</p>
      <p className="text">{fullText}</p>
    </header>
  );
}
