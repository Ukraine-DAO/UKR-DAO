import { css } from "@emotion/react"
import { media } from "../../styles/mixins"

export function BigHref({
  link,
  cta
}: {
  link: string,
  cta: string
}) {
  return (
    <a
      className='button'
      href={link}
      target="_blank"
      rel="noreferrer"
      css={css`
        background-color: var(--color-b);
        font-size: var(--text-03);
        width: 100%;
        border: 0;
        border-top: 4px solid var(--color-a);
        padding: var(--space-md);
        span {
          border: 4px solid var(--color-a);
          border-radius: 500px;
          padding: 8px 40px;
        }
        ${media.hover`
          background-color: var(--color-a);
          border-top: 4px solid var(--color-b);
          span {
            border-color: var(--color-b);
          }
        `}
        ${media.laptop`
          font-size: var(--text-05);
        `}
      `}
    >
      <span>{cta}</span>
    </a>
  )
}
