export type ProviderConfiguration = {
	basePath: string,
	chainId: number,
	exchange: {
		[key: `v${number}`]: string
	},
	transferProxies: {
		nft?: string,
		erc20?: string,
		erc721Lazy?: string,
		erc1155Lazy?: string
	},
	fees: {
		[key: `v${number}`]: number
	}
}
