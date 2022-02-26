import { Global, css } from '@emotion/react'
import { media, buttonStyle, smallPillButton } from './mixins'
import { returnBreakpoint } from './breakpoints'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          @font-face {
            font-family: FFF;
            src: url('./fonts/AkzidenzGrotesk-Medium.woff');
          }

          /* COLORS */
          --black: #000;
          --white: #fff;
          --bg-color: #f6f8fa;
          --overlay: rgba(0, 0, 0, 0.85);
          --overlay-light: rgba(0, 0, 0, 0.35);
          --border-black: 1px solid var(--black);
          --border-light: 1px solid #dbdbdb;

          --ukraine-blue: #0c5eb8;
          --ukraine-yellow: #ffd700;

          --color-a: var(--ukraine-blue);
          --color-b: var(--ukraine-yellow);

          --border-color-a: 1px solid var(--ukraine-yellow);
          --border-color-b: 1px solid var(--ukraine-blue);

          /* FONTS */
          --font-a: 'FFF', Helvetica, Arial, sans-serif;
          --font-b: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;

          /* SPACING */
          --base-unit: 8px;
          --space-sm: calc(var(--base-unit) * 2);
          --space-md: calc(var(--base-unit) * 3);
          --space-lg: calc(var(--base-unit) * 5);

          /* TYPOGRAPHY */
          --text-01: calc(var(--base-unit) * 1.5);
          --text-02: calc(var(--base-unit) * 2);
          --text-03: calc(var(--base-unit) * 3);
          --text-04: calc(var(--base-unit) * 4);
          --text-05: calc(var(--base-unit) * 5);

          /* LAYOUT */
          --header-z: 100;
          --header-height: calc(var(--base-unit) * 12);
          --footer-height: calc(var(--base-unit) * 10);
          --content-width-md: 960px;
          --content-width-lg: ${returnBreakpoint('desktop')};
          --content-width-xl: ${returnBreakpoint('xl')};
        }

        /* MEDIA QUERY MIXIN */
        ${media.laptop`
          :root {
            --base-unit: 10px;
            --text-05: calc(var(--base-unit) * 6);
          }
        `}

        ${media.xl`
          :root {
            --base-unit: 11px;
            --text-05: calc(var(--base-unit) * 7);
          }
        `}

        /* DEFAULTS */
        /* LAYOUT */
        body * {
          font-family: var(--font-a) !important;
        }

        html {
          background-color: var(--ukraine-blue);
        }

        main {
          width: 100%;
          overflow-x: hidden;
          position: relative;
          min-height: calc(100vh - var(--header-height));
        }

        header,
        footer {
          font-size: var(--text-03);
          padding: 0;
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: space-between;
          background-color: var(--ukraine-yellow);
          text-transform: uppercase;
          a {
            text-decoration: none;
            color: var(--ukraine-blue);
            &.active {
              // text-decoration: underline;
            }
            ${media.hover`
              // text-decoration: underline;
            `}
          }
        }

        header {
          height: var(--header-height);
          top: 0;
          z-index: var(--header-z);
          a {
            margin-right: 30px;
          }
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        footer {
          height: var(--footer-height);
          border-top: var(--border-black);
        }

        /* TYPOGRPAHY */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 500;
        }
        h1 {
          font-size: var(--text-05);
          line-height: 1;
          text-align: center;
          padding: var(--space-md) 0 var(--space-lg);
        }
        h2 {
          font-size: var(--text-03);
          padding: var(--space-sm) 0;
        }
        h3 {
          font-size: var(--text-03);
          padding: var(--space-sm) 0;
        }
        a {
          font-weight: 400;
        }
        p,
        ol,
        ul {
          font-size: var(--text-02);
          padding-bottom: var(--space-sm);
          line-height: 1.35;
          font-weight: 400;
        }

        /* CUSTOM */
        .button {
          ${buttonStyle};
        }

        /* UTIL */
        .code-wrapper {
          text-align: start;
          border-radius: 5px;
          padding: 12px;
          background-color: #f3f3f3;
          overflow-x: scroll;
          margin-top: 20px;
          code {
            font-size: 12px !important;
            line-height: 1.25;
            background-color: var(--bg-color);
          }
          * {
            font-family: var(--font-b) !important;
          }
        }

        /* ZORA SPECIFIC -- CLEAN UP
           - WALLET MODAL
        */
        .zora-wallet-modalText {
          padding: var(--space-sm);
          display: flex;
          flex-direction: column;
          background-color: var(--color-b)!important;
          width: 100%;
          max-width: 500px;
          filter: drop-shadow(0px 0px 35px rgba(0,0,0,.25));
          border-radius: 0!important;
          border: 4px solid var(--color-a);
        }

        .zora-wallet-walletOptionsList {
          padding: 0 0 0px!important;
          background: transparent!important;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .zora-wallet-walletOptionsWrapper {
          padding: 0!important;
        }

        .zora-wallet-walletOption {
          ${smallPillButton};
          color: var(--color-b)!important;
          ${media.hover`
            color: var(--color-a)!important;
          `}
        }

        .zora-wallet-modalTitleText {
          color: var(--color-a)!important;
          text-transform: uppercase;
        }

        .zora-wallet-modalContent {
          padding: var(--space-sm)!important;
          h3 {
            font-size: var(--text-02) !important;
            padding: 0 0 15px;
          }
          .zora--auction-house-modalSuccessMessage {
            font-size: var(--text-02) !important;
          }
          img {
            object-fit: contain;
          }
          p {
            font-size: var(--text-02);
            padding: 0 0 10px;
          }
          .zora--auction-house-ethAmountLabel {
            padding-bottom: 15px;
            font-size: var(--text-01);
          }
          button.zora--auction-house-actionButton {
            ${smallPillButton};
            margin-bottom: 15px;
          }
        }

        .zora-wallet-modalError {
          font-size: var(--text-micro)!important;
          max-width: 300px;
          margin: auto;
        }

        .zora-wallet-modalHeader {
          padding: 0 0 var(--space-sm)!important;
          display: flex;
          align-items: center;
          border-bottom: 0!important;
        }

        .zora-wallet-modalClose {
          width: 35px;
          height: 35px;
          background-color: var(--color-a)!important;
          border-radius: 0px!important;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          path {
            fill: var(--color-b);
          }
        }

        .zora--auction-house-modalInner {
          padding: 0!important;
          background: transparent!important;
          .zora--auction-house-modalHeader {
            display: none;
          }
          .zora--auction-house-modalDescription {
            padding-top: var(--space-sm);
          }
          .zora--auction-house-bidDisclaimerLine {
            font-size: var(--text-micro)!important;
          }
          .zora-cardOuter {
            height: 0;
            overflow-y: 100%;
            padding-bottom: 100%;
            margin-bottom: 20px;
          }
          .zora-cardItemInfo {
            z-index: 10;
            border-top: 0;
            height: 35px;
            display: flex;
            align-items: center;
            overflow-x: scroll;
            h5 {
              padding-right: 15px;
            }
          }
          .zora--auction-house-modalBidActionContainer {
            padding-bottom: 0;
          }
          .zora--auction-house-inputEthLabel {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px dashed black;
            padding: 10px 0;
            .zora--auction-house-ethAmountLabel {
              padding-bottom: 7px;
            }
          }
          .zora-cardMediaWrapper {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
            border: 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      `}
    />
  )
}
