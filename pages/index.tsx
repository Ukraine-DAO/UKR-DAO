import { css } from '@emotion/react'
import { getEnvToken } from '../services/getEnvToken'
import { TokenProps } from '../services/getEnvToken'
import { PageWrapper } from '../styles/components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { Head } from '../components/HeadMeta'
import { TokenPreview, BidButton } from '../components/manage'

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
                background: var(--black);
              `}>
                <div css={css`height: 70vh;`}>
                  <FullComponents.MediaFull />
                </div>
                <BidButton />
              </div>
              <div
                css={css`
                  background-color: var(--color-b);
                  * {
                    font-size: var(--text-03)!important;
                    color: var(--black);
                    opacity: 1!important;
                  }
                `}
              >
                {/*<FullComponents.MediaInfo />*/}
                <FullComponents.AuctionInfo />
                <FullComponents.ProofAuthenticity />
                <FullComponents.NFTProperties />
              <div css={css`
                .zora-fullLabel {
                  padding-bottom: var(--space-sm);
                  border-bottom: 1px dashed var(--color-a);
                  margin-bottom: var(--space-sm);
                }
              `}>
                <FullComponents.BidHistory />
              </div>
              </div>
            </div>
          </AuctionManager>
        </NFTFullPage>
    </PageWrapper>
  )
}

export const getServerSideProps = getEnvToken
