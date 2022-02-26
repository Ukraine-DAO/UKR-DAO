import { useWalletButton } from '@zoralabs/simple-wallet-provider'
import { css } from '@emotion/react'
import { media } from '../styles/mixins'

// Add ENS, username etc...
export const ConnectWallet = () => {
  const { buttonAction, actionText, account, active } = useWalletButton()
  return (
    <button
      className='button'
      onClick={() => buttonAction()}
      css={css`
        height: 100%;
        border: 0;
        font-size: var(--text-03);
        background-color: var(--color-a);
        color: var(--color-b);
        border-left: 4px solid var(--color-b);
        border-bottom: 4px solid var(--color-b);
        ${media.hover`
          background-color: var(--color-b);
          border-color: var(--color-a);
          color: var(--color-a);
        `}
      `}
    >
      {active ? account?.addressShortened : actionText}
    </button>
  )
}
