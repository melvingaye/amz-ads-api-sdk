/* tslint:disable */
/* eslint-disable */
/**
 * AmazonAttributionClient
 *
 * NOTE: This class is auto generated by ts-morph
 * Do not edit the class manually.
 */

import { AdvertisersApi, AttributionTagsApi, PublishersApi, ReportsApi } from '../models/amazon-attribution';
import { Configuration } from '../models/configuration';
import { DEFAULT_API_BASE_PATH, APIConfigurationParameters } from '../../constants';
import { getAxiosInstance, applyMixins } from '../../helpers';

export class AmazonAttributionClient extends AdvertisersApi {
	constructor(parameters: APIConfigurationParameters) {
		const axios = getAxiosInstance(parameters);
		const configuration = new Configuration(parameters);
		super(configuration, DEFAULT_API_BASE_PATH, axios);
	}
}

export interface AmazonAttributionClient extends AdvertisersApi, AttributionTagsApi, PublishersApi, ReportsApi {}
applyMixins(AmazonAttributionClient, [AdvertisersApi, AttributionTagsApi, PublishersApi, ReportsApi]);
