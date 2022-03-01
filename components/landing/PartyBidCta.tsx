import { css } from "@emotion/react"
import { media } from "../../styles/mixins"

export function PartyBidCta() {
  return (
    <a
      className='button'
      href={process.env.NEXT_PUBLIC_PARTYBID_LINK}
      target="_blank"
      rel="noreferrer"
      css={css`
        background-color: var(--color-b);
        font-size: var(--text-05);
        width: 100%;
        border: 0;
        border-top: 4px solid var(--color-a);
        padding: var(--space-md);
        span {
          border: 4px solid var(--color-a);
          border-radius: 500px;
          padding: 5px 40px;
        }
        ${media.hover`
          background-color: var(--color-a);
          border-top: 4px solid var(--color-b);
        `}
      `}
    >
      <span>DONATE NOW WITH PARTY BID</span>
    </a>
  )
}
