import { css } from "@emotion/react";

const styles = css`
  p {
    margin: 0.2em 0;
  }
`;

export default function Faq({ cardTitle = "", reasons = [""] }) {
  return (
    <section css={styles}>
      <h2>{cardTitle}</h2>
      {reasons.map((reason, index) => (
        <p key={index}>{reason}</p>
      ))}
    </section>
  );
}
