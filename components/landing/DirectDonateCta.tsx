import { css } from "@emotion/react"
import { media } from "../../styles/mixins"

export function DirectDonateCta() {
  return (
    <a
      className='button'
      href="https://etherscan.io/address/0x633b7218644b83d57d90e7299039ebab19698e9c"
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
      <span>DONATE Directly to UkraineDao.eth</span>
    </a>
  )
}
