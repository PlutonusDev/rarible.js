import networks from "../networks";
import { ProviderConfiguration } from "../types/";

export default class RaribleClient {
	public readonly network: ProviderConfiguration;

	constructor(
		network: keyof typeof networks
	) {
		this.network = networks[network];
		return this;
	}
}
