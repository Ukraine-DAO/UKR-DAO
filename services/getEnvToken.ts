import { GetServerSideProps } from 'next'
import {
  MediaFetchAgent,
  NetworkIDs,
  FetchStaticData,
} from '@zoralabs/nft-hooks'
import { addIPFSGateway } from '../utils/addIPFSGateway'
import { CONTRACT_ADDRESSES } from '../utils/env-vars'

export type TokenProps = {
  id: string
  contract: string
  name: string
  description: string
  image: string
  initialData: any
  props?: any
}

export const getEnvToken: GetServerSideProps = async () => {
  const id = process.env.NEXT_PUBLIC_AUCTION_TOKEN_A as string
  const contract = CONTRACT_ADDRESSES as string

  const fetchAgent = new MediaFetchAgent(
    process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  )
  const data = await FetchStaticData.fetchZoraIndexerItem(fetchAgent, {
    tokenId: id,
    collectionAddress: contract,
  })

  const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(data)

  let tokenImage = null
  try {
    tokenImage = addIPFSGateway(tokenInfo.metadata?.image)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      id,
      contract,
      name: tokenInfo.metadata?.name || null,
      description: tokenInfo.metadata?.description || null,
      image: tokenImage,
      initialData: data,
    },
  }
}
