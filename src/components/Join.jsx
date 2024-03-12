import { css } from "@emotion/react";

const styles = css`
  background-color: var(--light-gray);

  h2 {
    color: var(--cyan);
  }

  p {
    font-size: 0.9rem;
  }

  h2 + p {
    color: var(--bright-yellow);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p + p {
    color: var(--grayishblue);
    line-height: 2;
  }

  @media only screen and (min-width: 850) {
    p + p {
      max-width: 80%;
    }
  }
`;

export default function Join({ title = "", guarantee = "", fullText = "" }) {
  return (
    <section css={styles}>
      <h2>{title}</h2>
      <p>{guarantee}</p>
      <p>{fullText}</p>
    </section>
  );
}
