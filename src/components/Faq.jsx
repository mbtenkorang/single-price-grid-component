/* eslint-disable react/prop-types */
import { css } from "@emotion/react";

const faqCss = {
  faq: css({
    p: {
      margin: "0.25em 0",
    },
    section: {
      marginBottom: "1em",
    },

    " @media screen and (min-width: 798px)": {
      paddingBottom: "2em",

      p: {
        fontSize: "0.9rem",
      },
    },
  }),
};

export default function Faq({ cardTitle = "", reasons = [""] }) {
  return (
    <section css={faqCss.faq}>
      <h2>{cardTitle}</h2>
      {reasons.map((reason, index) => (
        <p key={index}>{reason}</p>
      ))}
    </section>
  );
}
