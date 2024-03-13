/* eslint-disable react/prop-types */
import { css } from "@emotion/react";

const styles = css`
  .price-wrapper {
    display: flex;
    align-items: center;
  }

  .price {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  .period {
    color: var(--lightgray);
    opacity: 0.7;
  }
`;

export default function Monthly({ period, fee = 0, children }) {
  return (
    <section css={styles}>
      <h2>{period}</h2>

      <p className="price-wrapper">
        <span className="price">${fee}</span>{" "}
        <span className="period">per month</span>
      </p>

      <p className="value">
        Full access for less than ${Math.round(fee / 30)} a day
      </p>
      {children}
    </section>
  );
}
