/* eslint-disable react/prop-types */
import { css } from "@emotion/react";

const styles = css`
  background-color: var(--light-gray);

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
    line-height: 2;
  }
`;

export default function Join({ title = "", guarantee = "", fullText = "" }) {
  return (
    <section css={styles}>
      <h1>{title}</h1>
      <p>{guarantee}</p>
      <p className="text">{fullText}</p>
    </section>
  );
}
