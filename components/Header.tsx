import { css } from '@emotion/react';
import { NavLink } from './utils/NavLink'
import { ConnectWallet } from './ConnectWallet'
import { APP_TITLE } from "../utils/env-vars";
import { media } from '../styles/mixins';

export function Header() {
  return (
    <header>
      <div css={css`
        padding-left: var(--space-sm);
        font-size: var(--text-05);
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: center;
        ${media.laptop`
          padding-left: var(--space-md);
          font-size: var(--text-05);
        `}
      `}>
        <NavLink passHref href='/'>
          <a>{APP_TITLE}</a>
        </NavLink>
      </div>
      <div css={css`
        width: 100%;
        height: var(--header-height);
        border-bottom: 4px solid var(--color-b);
        ${media.laptop`
          border-bottom: none;
        `}
      `}>
        <ConnectWallet />
      </div>
    </header>
  )
}
