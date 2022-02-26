import { css } from '@emotion/react'
import * as mixins from './mixins'

export const mediaConfigurationStyles = {
  theme: {
    lineSpacing: 20,
    linkColor: 'var(--black)',
    borderStyle: '1px solid var(--ukraine-yellow)',
    defaultBorderRadius: 0,
    maximumPricingDecimals: 4,
    preferredIPFSGateway: 'https://db13.mypinata.cloud'
  },
  styles: {
    /* CARDS */
    cardOuter: () => css`
      position: relative;
      width: 100%;
      border: 1px solid black;
      background-color: white;
    `,
    cardMediaWrapper: () => css`
      width: 100%;
      position: relative;
      height: 0;
      padding-bottom: 100%;
      overflow-y: visible;
      img {
        ${mixins.absoluteFullCentered};
        object-fit: cover;
      }
    `,
    /* Full Page */
    fullPage: () => css`
      width: 100%;
      position: relative;
      display: grid;
      grid-gap: var(--space-sm);
    `,
    fullMediaWrapper: () => css`
      margin: 0;
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      height: 70vh;
      border-bottom: 4px solid var(--color-a);
      img {
        object-fit: contain;
        ${mixins.absoluteFullCentered};
      }
      ${mixins.media.laptop`
        height: 70vh;
        padding-bottom: 0;
      `}
    `,
    infoContainer: () => css`
      padding: var(--space-sm);
      border: 0;
      border-bottom: 4px solid var(--color-a);
      * {
        color: var(--color-a);
      }
      &:last-of-type {
        border-bottom: 0;
      }
      // margin: 0 auto var(--space-sm);
    `,
    fullProofLink: () => css`
      ${mixins.buttonStyle};
      display: block;
      padding: var(--base-unit);
      margin-bottom: var(--space-sm);
      font-size: var(--text-02);
      border-width: 4px;
    `,
    fullPageHistoryTxnLink: () => css`
      ${mixins.buttonStyle};
      display: block;
      padding: var(--base-unit);
      font-size: var(--text-02);
      border-width: 4px;
      margin: 0;
    `,
    fullPageHistoryItemDatestamp: () => css`
      // padding-top: 5px;
      font-size: var(--text-02)!important;
      padding-bottom: var(--space-sm);
    `,
    fullPageHistoryItem: () => css`
      margin: 0;
      padding: 0 0 5px;
      margin-bottom: var(--space-sm);
      font-size: var(--text-01);
      border-bottom: 1px dotted var(--black);
      &:last-of-type {
        border-bottom: 0;
      }
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 1px;
        font-size: var(--text-04);
        line-height: 1.2;
        * {
          margin: 0;
          text-align: center;
        }
        ${mixins.media.tablet`
          justify-content: space-between;
          flex-direction: row;
        `}
        ${mixins.media.laptop`
          font-size: var(--text-01);
        `}
      }
    `,
    fullPageHistoryItemDescription: () => css`
      display: flex;
      align-items: center;
    `,
    mediaLoader: () => css`
      font-size: 0;
      width: 150px;
      height: 150px;
      ${mixins.absoluteCentered};
      background-color: var(--color-b);
      border: 4px solid var(--color-b);
      &:before {
        content: '';
        width: 71px;
        height: 71px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--color-a);
      }
      &:after {
        content: '';
        width: 71px;
        height: 71px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: var(--color-a);
      }
    `
    /*
    mediaObject: () => css`
      z-index: 1;
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
    `,
    mediaLoader: () => css`
      ${mixins.absoluteFullCentered};
      z-index: 0;
    `,
    fullPageDataGrid: () => css`
      display: grid;
      grid-gap: var(--space-md);
    `,
    fullCreatorOwnerSection: () => css`
      padding: 0;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: auto auto;
      padding: var(--base-unit);
      border: 1px solid var(--black);
      * {
        text-align: center;
      }
    `,
    fullOwnerAddress: () => css`
      padding-top: var(--space-sm);
      font-size: var(--text-01);
    `,
    fullDescription: () => css`
      margin: var(--space-sm) 0;
      font-size: var(--text-02);
      line-height: 1.25;
    `,
    fullTitle: () => css`
      font-size: var(--text-04);
      padding: var(--base-unit) 0;
    `,
    fullLabel: () => css`
      color: var(--black);
      font-family: var(--font-b)!important;
      text-transform: uppercase;
      font-size: var(--text-03);
    `,
    
    fullInfoProofAuthenticityContainer: () => css`
      padding: var(--space-sm) 0 0;
      display: grid;
      grid-template-columns: 1fr;
    `,
    
    
    fullPageHistoryItemMeta: () => css`
      padding-top: 10px;
    `,
    
    fullPageHistoryItem: () => css`
      margin: 0;
      padding: 0 0 5px;
      margin-bottom: var(--space-sm);
      font-size: var(--text-01);
      border-bottom: 1px dotted var(--black);
      &:last-of-type {
        border-bottom: 0;
      }
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 1px;
        font-size: var(--text-04);
        line-height: 1.2;
        * {
          margin: 0;
          text-align: center;
        }
        ${mixins.media.tablet`
          justify-content: space-between;
          flex-direction: row;
        `}
        ${mixins.media.laptop`
          font-size: var(--text-01);
        `}
      }
    `,
    fullInfoCreatorEquityContainer: () => css`
      margin: 0 0 var(--space-md);
    `,
    cardItemInfo: () => css`
      padding: var(--space-sm) var(--space-sm) 0;
      display: flex;
      justify-content: center;
      font-size: 0.9em;
      * {
        text-align: center;
      }
    `,
    fullPageHistoryItemDescription: () => css`
      font-size: var(--text-01);
    `,
    
    `*/
  },
}

export const web3ProviderStyles = {
  walletOption: `
    color: var(--color-a);
    position: relative;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
  `,
}
