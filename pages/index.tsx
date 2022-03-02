import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getEnvToken } from '../services/getEnvToken'
import { TokenProps } from '../services/getEnvToken'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { media } from '../styles/mixins'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { MarkDown } from '../components/utils'
import postBidMessaging from '../components/docs/postBidMessaging.md'
import * as Landing from './../components/landing'
import Link from 'next/link'



export default function Home({
  id,
  contract,
  initialData,
}: TokenProps) {
  return (
    <PageWrapper css={css`padding: 0;`}>
      <Head />
        <NFTFullPage
          useBetaIndexer={true}
          contract={contract as string}
          id={id as string}
          initialData={initialData}
        >
          <ContentWrapper>
            <HeroWrapper>
              <div className="sizer">
                <FullComponents.MediaFull />
              </div>
            </HeroWrapper>
            <div className="party-link">
              <Landing.DirectDonateCta />
            </div>
            <Link href="/ukraine-dao" passHref>
              <a className='big-link border-bottom'>
                <span>About</span>
              </a>
            </Link>
            <a
              className='button party-bid-mobile'
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
              `}
            >
              <span>DONATE Directly to UkraineDao.eth</span>
            </a>
            <Landing.AuctionMediaSection />
            <Landing.BigHref
              link="https://twitter.com/Ukraine_DAO"
              cta="@Ukraine_DAO"
            />
            <Landing.BigHref
              link="https://join.ukrainedao.love/"
              cta="Join Discord"
            />
            <Landing.BigHref
              link="https://join.ukrainedao.love/"
              cta="Party Bid"
            />
            <Landing.NftAuctionInfo />
            <MarkDown markdown={postBidMessaging} />
          </ContentWrapper>
        </NFTFullPage>
    </PageWrapper>
  )
}

const ContentWrapper = styled.div`
  position: relative;
  .party-link {
    display: none;
  }
  ${media.desktop`
    .party-link {
      display: block;
    }
    .party-bid-mobile {
      display: none;
    }
  `}
`

const HeroWrapper = styled.div`
  height: 40vh;
  position: relative;
  z-index: 10;
  &:after {
    content: '';
    background-color: var(--color-b);
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }
  .sizer {
    position: relative;
    z-index: 100;
    padding: var(--space-md);
    height: 100%;
    width: 100%;
  }
  .party-link {
    display: none;
  }
  ${media.desktop`
    height: 60vh;
    .party-link {
      display: block;
    }
  `}
`

export const getServerSideProps = getEnvToken
