import { css } from '@emotion/react'
import { useContext, Fragment } from 'react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { Button } from '@zoralabs/nft-components/dist/components/Button'
import { useManageAuction } from '@zoralabs/manage-auction-hooks'
import { HOSTED_BID_FLOW } from '../../utils/env-vars'
import { media } from '../../styles/mixins'

export const BidButton = () => {
  const { openBidAuction } = useManageAuction()
  const {
    nft: { data },
  } = useContext(NFTDataContext)

  if (
    !data ||
    !data.pricing.reserve
    || data.pricing.reserve.current.likelyHasEnded
    || data.pricing.status === 'NO_PRICING'
  ) {
    return <Fragment />
  }
  return (
    <Fragment>
      {HOSTED_BID_FLOW ? (
        <Button
          primary={true}
          href={[
            'https://zora.co/auction',
            data.nft.contract.address,
            data.nft.tokenId,
            'bid',
          ].join('/')}
        >
          Place Bid
        </Button>
      ) : (
        <div>
          <button
            className='button'
            css={css`
              background-color: var(--color-b);
              font-size: var(--text-04);
              width: 100%;
              border: 0;
              border-top: 4px solid var(--color-a);
              border-bottom: 4px solid var(--color-a);
              ${media.hover`
                background-color: var(--color-a);
                border-top: 4px solid var(--color-b);
              `}
            `}
            onClick={() => {
            /* @ts-ignore */
            openBidAuction(parseInt(`${data.pricing.reserve.id}`) as number)
          }}
        >
          Place Bid
        </button>
        <a
          className='button'
          href={process.env.NEXT_PUBLIC_PARTYBID_LINK}
          target="_blank"
          rel="noreferrer"
          css={css`
            background-color: var(--color-b);
            font-size: var(--text-04);
            width: 100%;
            border: 0;
            border-bottom: 4px solid var(--color-a);
            ${media.hover`
              background-color: var(--color-a);
            `}
          `}
        >
          Join Party
        </a>
      </div>
    )}
    </Fragment>
  )
}
