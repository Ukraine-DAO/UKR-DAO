import { useWalletButton } from '@zoralabs/simple-wallet-provider'
import { css } from '@emotion/react'
import { media } from '../styles/mixins'

// Add ENS, username etc...
export const ConnectWallet = () => {
  const { buttonAction, actionText, account, active } = useWalletButton()
  return (
    <>
      <a
        className='button'
        href={process.env.NEXT_PUBLIC_PARTYBID_LINK}
        target="_blank"
        rel="noreferrer"
        css={css`
          height: 100%;
          border: 0;
          font-size: var(--text-03);
          background-color: var(--color-a);
          color: var(--color-b);
          border-left: 4px solid var(--color-a);
          border-bottom: 4px solid var(--color-a);
          width: 50vw;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          span {
            border: 4px solid var(--color-b);
            border-radius: 500px;
            padding: 8px 40px;
          }
          ${media.hover`
            background-color: var(--color-b);
            border-color: var(--color-a);
            color: var(--color-a);
            span {
              border-color: var(--color-a)!important;
            }
          `}
          ${media.laptop`
            font-size: var(--text-05);
          `}
        `}
      >
        <span>DONATE</span>
      </a>
      {/*
      
        <button
        className='button'
        onClick={() => buttonAction()}
        css={css`
          height: 100%;
          border: 0;
          font-size: var(--text-02);
          background-color: var(--color-a);
          color: var(--color-b);
          border-left: 4px solid var(--color-a);
          border-bottom: 4px solid var(--color-a);
          width: 50vw;
          ${media.hover`
            background-color: var(--color-b);
            border-color: var(--color-a);
            color: var(--color-a);
          `}
          ${media.laptop`
            font-size: var(--text-03);
          `}
        `}
      >
      {active ? account?.addressShortened : actionText}
    </button>
      */}
    </>
    
    
    
  )
}
