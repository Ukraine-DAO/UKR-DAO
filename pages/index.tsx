import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getEnvToken } from '../services/getEnvToken'
import { TokenProps } from '../services/getEnvToken'
import { PageWrapper } from '../styles/components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { Head } from '../components/HeadMeta'
import { TokenPreview } from '../components/manage'
import { media, buttonStyle } from '../styles/mixins'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { MarkDown } from '../components/utils'
import messaging from '../components/docs/messaging.md'
import * as Landing from './../components/landing'

export default function Home({
  id,
  contract,
  name,
  description,
  image,
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
              <Landing.BigHref
                link={process.env.NEXT_PUBLIC_PARTYBID_LINK as string}
                cta="DONATE NOW WITH PARTY BID"
              />
            </div>
            <Landing.AuctionMediaSection />
            <Landing.BigHref
              link="https://twitter.com/Ukraine_DAO"
              cta="@Ukraine_DAO"
            />
            <Landing.NftAuctionInfo />
            <MarkDown markdown={messaging} />
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
  ${media.laptop`
    .party-link {
      display: block;
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
  ${media.laptop`
    height: 60vh;
    .party-link {
      display: block;
    }
  `}
`

export const getServerSideProps = getEnvToken
