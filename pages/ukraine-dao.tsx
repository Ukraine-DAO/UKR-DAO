import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { MarkDown } from '../components/utils'
import about from '../components/docs/about.md'
import * as Landing from '../components/landing'
import { media } from '../styles/mixins'

export default function UkraineDao() {
  return (
    <>
      <PageWrapper css={css`
        padding: 5px;
        ${media.laptop`
          border-top: 4px solid var(--color-b);
          padding: var(--space-sm);
        `}
      `}>
        <Head />  
        <MarkDown
          markdown={about}
          styleOverrides={css`
            * {
              font-size: var(--text-03)!important;
              line-height: 1.3!important;
              ${media.laptop`
                font-size: var(--text-04)!important;
                line-height: 1.125!important;
              `}
            }
          `}
        />
      </PageWrapper>
      <div css={css`
        display: none;
        ${media.desktop`
          display: block;
        `}
      `}>
        <Landing.DirectDonateCta />
      </div>
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
          text-decoration: underline;
          ${media.hover`
            background-color: var(--color-a);
            border-top: 4px solid var(--color-b);
          `}
          ${media.desktop`
            display: none;
          `}
        `}
      >
        <span>DONATE Directly to UkraineDao.eth</span>
      </a>
    </>
  )
}
