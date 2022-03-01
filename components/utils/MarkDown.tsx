import { css } from '@emotion/react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

export const MarkDown = ({
  markdown,
  styleOverrides,
}: {
  markdown?: string
  styleOverrides?: any
}) => {
  return (
    <article
      css={[
        css`
          width: 100%;
          color: var(--color-b);
          background-color: var(--color-a);
          text-align: left;
          h3,
          h2,
          h4 {
            padding-bottom: var(--base-unit);
            font-size: var(--text-05);
            text-transform: uppercase;
          }
          p {
            font-size: var(--text-04);
            line-height: 1.125;
          }
          img {
            width: 100%;
            height: auto;
            margin: 0 auto;
            text-align: center;
            display: inline;
            position: relative;
          }
          a {
            text-decoration: underline;
            display: inline-block;
          }
          ol,
          ul {
            list-style: none;
            font-size: var(--text-04);
          }
          li {
            padding-bottom: var(--space-sm);
            &:last-of-type {
              padding-bottom: 0;
            }
          }
          pre {
            font-size: var(--text-01) !important;
            text-align: start;
            padding: var(--base-unit);
            margin-bottom: var(--space-sm);
            line-height: 1.45;
            border-radius: 5px;
            background-color: var(--bg-color);
            color: var(--black) !important;
            overflow-x: scroll;
            position: relative;
          }
          code {
            font-size: var(--text-01) !important;
            line-height: 1.45;
            border-radius: 5px;
            background-color: var(--bg-color);
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
              monospace !important;
          }
        `,
        styleOverrides,
      ]}
    >
      <div css={css`width: 100%; margin: auto; padding: var(--space-sm);`}>{unified().use(parse).use(remark2react).processSync(markdown).result}</div>
    </article>
  )
}
