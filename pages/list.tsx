import { css } from '@emotion/react'
import { getEnvToken } from '../services/getEnvToken'
import { TokenProps } from '../services/getEnvToken'
import { PageWrapper } from '../styles/components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { Head } from '../components/HeadMeta'
import { TokenPreview, BidButton, ListButton } from '../components/manage'
import { media } from '../styles/mixins'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'

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
      {/*<AuctionsList tokens={tokens} />*/}
        <NFTFullPage
          useBetaIndexer={true}
          contract={contract as string}
          id={id as string}
          initialData={initialData}
        >
          <AuctionManager renderMedia={TokenPreview}>
            <div css={css`
              display: grid;
              grid-template-columns: 1fr;
            `}>
              <div css={
              css`
                position: relative;
               
              `}>
                <div css={css`
                  height: 60vh;
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
                  ${media.laptop`
                    height: 70vh;
                  `}
                `}>
                  <div css={css`
                    position: relative;
                    z-index: 100;
                    padding: var(--space-md);
                    height: 100%;
                    width: 100%;
                  `}>
                    <FullComponents.MediaFull />
                  </div>
                </div>
                <ListButton />
              </div>
            </div>
          </AuctionManager>
        </NFTFullPage>
    </PageWrapper>
  )
}

export const getServerSideProps = getEnvToken
