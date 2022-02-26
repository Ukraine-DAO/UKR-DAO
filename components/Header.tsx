import { css } from '@emotion/react';
import { NavLink } from './utils/NavLink'
import { ConnectWallet } from './ConnectWallet'
import { APP_TITLE } from "../utils/env-vars";
import { media } from '../styles/mixins';

export const Header = () => {
  return (
    <>
      <header>
        <div className='flex-row' css={css`
          padding-left: var(--space-sm);
          font-size: var(--text-03);
          ${media.laptop`
            padding-left: var(--space-md);
            font-size: var(--text-05);
          `}
        `}>
          <NavLink passHref href='/'>
            <a>{APP_TITLE}</a>
          </NavLink>
          {/*<NavLink passHref href='/about'>
            <a>About</a>
  </NavLink>*/}
        </div>
        <div css={css`
          height: 100%;
        `}>
          {/*<NavLink passHref href='/manage'>
            <a>Manage</a>
  </NavLink>*/}
          <ConnectWallet />
        </div>
      </header>
    </>
  )
}
