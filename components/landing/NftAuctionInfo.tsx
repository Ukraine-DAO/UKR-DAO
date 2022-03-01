import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FullComponents } from "@zoralabs/nft-components"
import { media, buttonStyle } from "../../styles/mixins"

export function NftAuctionInfo() {
  return (
    <NFTAIWrapper>
      <FullComponents.MediaInfo />
      <FullComponents.ProofAuthenticity />
      <div className="zora-proof" >
        <a
          href="https://zora.co/collections/0x715132af755D9D3d81eE0AcF11e60692719bc415/1"
          target="_blank"
          rel="noreferrer"
        >
          View On Zora
        </a>
      </div>
      <FullComponents.NFTProperties />
      <FullComponents.BidHistory />
    </NFTAIWrapper>
  )
}

const NFTAIWrapper = styled.div`
  background-color: var(--color-b);
  * {
    opacity: 1!important;
    font-size: var(--text-03)!important;
    color: var(--color-a);
  }
  .zora-fullItemInfo {
    padding: var(--space-sm);
    border-top: 4px solid var(--color-a);
    border-bottom: 4px solid var(--color-a);
    * {
      line-height: 1.15;
      ${media.laptop`
        font-size: var(--text-05)!important;
      `}
    }
    h2 {
      font-size: var(--text-05)!important;
      margin: 0;
    }
  }
  .zora-infoContainer {
    border-bottom: 0!important;
    padding-bottom: 0;
    
  }
  .zora-proof {
    padding: 0 var(--space-sm) var(--space-sm);
    border-bottom: 4px solid var(--color-a);
    a {
      ${buttonStyle};
      display: block;
      padding: var(--base-unit);
      font-size: var(--text-02);
      border-width: 4px;
      border-radius: 500px;
    }
  }
  .zora-fullLabel {
    padding-bottom: var(--space-sm);
    border-bottom: 1px dashed var(--color-a);
    margin-bottom: var(--space-sm);
  }
`