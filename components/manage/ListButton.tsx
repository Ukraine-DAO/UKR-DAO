import { useContext, Fragment } from 'react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { useManageAuction } from '@zoralabs/manage-auction-hooks'
import { css } from '@emotion/react'
import { media } from '../../styles/mixins'

export const ListButton = () => {
  const {
    nft: { data },
  } = useContext(NFTDataContext)

  const { openManageAuction, openListAuction } = useManageAuction()

  if (!data || !data.nft) {
    return <Fragment />
  }

  if (
    data.pricing.reserve?.status === 'Active' ||
    data.pricing.reserve?.status === 'Pending'
  ) {
    return (
      <button
        className='button'
        onClick={() => {
          const reserveId = data.pricing.reserve?.id
          if (reserveId) {
            openManageAuction(parseInt(reserveId, 10))
          }
        }}
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
      >
        Manage
      </button>
    )
  }

  return (
    <button
      className='button'
      onClick={() => {
        openListAuction(data.nft.contract.address, data.nft.tokenId)
      }}
      css={css`
        background-color: var(--color-b);
        font-size: var(--text-04);
        width: 100%;
        border: 0;
        border-top: 4px solid var(--color-a);
        border-bottom: 4px solid var(--color-b);
        ${media.hover`
          background-color: var(--color-a);
          border-top: 4px solid var(--color-b);
        `}
      `}
    >
      List
    </button>
  )
}
