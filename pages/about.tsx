import { css } from '@emotion/react'
import { Head } from '../components/HeadMeta'
import readMe from '../README.md'

import { MarkDown } from '../components/utils'
import { PageWrapper } from '../styles/components'

export default function About() {
  return (
    <>
      <Head title={'About'} />
      <PageWrapper
        css={css`
          max-width: var(--content-width-lg);
          margin: 0;
          * {
            color: var(--ukraine-yellow);
            text-align: left;
          }
        `}
      >
        <MarkDown markdown={readMe} />
      </PageWrapper>
    </>
  )
}
