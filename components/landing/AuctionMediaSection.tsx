import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FullComponents } from "@zoralabs/nft-components"
import { media } from "../../styles/mixins"

export function AuctionMediaSection() {
  return (
    <AMWrapper>
      <FullComponents.AuctionInfo />
        <h1 css={css`
          font-size: var(--text-05);
          line-height: 1;
          text-transform: uppercase;
          padding: var(--space-sm);
          width: 100%;
          color: var(--color-b);
          background-color: var(--color-a);
        `}>
          <span css={css`
            max-width: 1240px;
            margin: 0 auto;
          `}>
          100% proceeds go to support Ukrainians suffering for the war.
        </span>
      </h1>
    </AMWrapper>
  )
}

const AMWrapper = styled.div`
  position: relative;
  background-color: var(--color-b);
  color: var(--color-a);
  .zora-infoContainer {
    border-top: 4px solid var(--color-a);
    background-color: var(--color-b);
    * {
      font-size: var(--text-03)!important;
      opacity: 1!important;
      ${media.laptop`
        font-size: var(--text-04)!important;
      `}
    }
  }
  
  
`