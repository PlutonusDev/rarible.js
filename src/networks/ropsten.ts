import { ProviderConfiguration } from "../types/";

export const RopstenProvider: ProviderConfiguration = {
	basePath: "https://ethereum-api-dev.rarible.org",
	chainId: 3,
	exchange: {
		v1: "test",
		v2: "test2"
	},
	transferProxies: {
		nft: "nfttest"
	},
	fees: {
		v2: 0
	}
}
