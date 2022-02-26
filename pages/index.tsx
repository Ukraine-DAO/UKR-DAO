import { css } from '@emotion/react'
import { getEnvToken } from '../services/getEnvToken'
import { TokenProps } from '../services/getEnvToken'
import { PageWrapper } from '../styles/components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { Head } from '../components/HeadMeta'
import { TokenPreview, BidButton } from '../components/manage'
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
                    border-bottom: 4px solid var(--color-a);
                    ${media.hover`
                      background-color: var(--color-a);
                    `}
                  `}
                >
                  DONATE NOW WITH PARTY BID
                </a>
              </div>
              <div
                css={css`
                  background-color: var(--color-b);
                  * {
                    font-size: var(--text-03)!important;
                    color: var(--color-a);
                    opacity: 1!important;
                    ${media.laptop`
                      font-size: var(--text-04)!important;
                    `}
                  }
                  .zora-fullItemInfo {
                    padding: var(--space-sm);
                    border-bottom: 4px solid var(--color-a);
                    * {
                      line-height: 1.15;
                      ${media.laptop`
                        font-size: var(--text-05)!important;
                      `}
                    }
                  }
                `}
              >
                <FullComponents.MediaInfo />
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
