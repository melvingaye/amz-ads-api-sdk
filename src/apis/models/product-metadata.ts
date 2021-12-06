/* tslint:disable */
/* eslint-disable */
/**
 * Product Selector
 * The Amazon Product Selector API allows integrators to receive product metadata such as inventory status, price, eligibility status and product details for SKUS or ASINs in their Product Catalog in order to launch, manage or optimize Sponsored Product, Sponsored Brands or Sponsored Display advertising campaigns. The Product Selector API is available to Sellers, Vendors, and Authors.
 *
 * The version of the OpenAPI document: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
	DUMMY_BASE_URL,
	assertParamExists,
	setApiKeyToObject,
	setBasicAuthToObject,
	setBearerAuthToObject,
	setOAuthToObject,
	setSearchParams,
	serializeDataIfNeeded,
	toPathString,
	createRequestFunction,
} from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * The basis price before the savings are calculated
 * @export
 * @interface BasisPrice
 */
export interface BasisPrice {
	/**
	 * Price amount
	 * @type {number}
	 * @memberof BasisPrice
	 */
	amount?: number;
	/**
	 * Currency of the price
	 * @type {string}
	 * @memberof BasisPrice
	 */
	currency?: string;
}
/**
 * Error response object.
 * @export
 * @interface ModelError
 */
export interface ModelError {
	/**
	 * Enumerated error type.
	 * @type {string}
	 * @memberof ModelError
	 */
	code?: string;
	/**
	 * A human-readable description of the response.
	 * @type {string}
	 * @memberof ModelError
	 */
	details?: string;
}
/**
 * The price customer would pay for the buying option
 * @export
 * @interface PriceToPay
 */
export interface PriceToPay {
	/**
	 * Price amount
	 * @type {number}
	 * @memberof PriceToPay
	 */
	amount?: number;
	/**
	 * Currency of the price
	 * @type {string}
	 * @memberof PriceToPay
	 */
	currency?: string;
}
/**
 *
 * @export
 * @interface ProductMetadataModel
 */
export interface ProductMetadataModel {
	/**
	 *
	 * @type {PriceToPay}
	 * @memberof ProductMetadataModel
	 */
	priceToPay?: PriceToPay;
	/**
	 * List of ineligibile status identifier
	 * @type {Array<string>}
	 * @memberof ProductMetadataModel
	 */
	ineligibilityCodes?: Array<string>;
	/**
	 * Stock availability:   * IN_STOCK - The item is in stock.   * IN_STOCK_SCARCE - The item is in stock, but stock levels are limited.   * OUT_OF_STOCK - The item is currently out of stock.   * PREORDER - The item is not yet available, but can be pre-ordered.   * LEADTIME - The item is only available after some amount of lead time.   * AVAILABLE_DATE - The item is not available, but will be available on a future date.
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	availability?: string;
	/**
	 * Product title of the item
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	title?: string;
	/**
	 * Eligibility status for advertising:   * ELIGIBLE - Eligible for advertising   * INELIGIBLE - Ineligible for advertising
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	eligibilityStatus?: string;
	/**
	 *
	 * @type {BasisPrice}
	 * @memberof ProductMetadataModel
	 */
	basisPrice?: BasisPrice;
	/**
	 * Best seller rank position in the category
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	bestSellerRank?: string;
	/**
	 * Date the item was first available on Amazon
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	createdDate?: string;
	/**
	 * Url to the product image
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	imageUrl?: string;
	/**
	 * ASIN of the item
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	asin?: string;
	/**
	 * sku of the item
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	sku?: string;
	/**
	 * Category (browse node) name of the ASIN
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	category?: string;
	/**
	 * Brand name of the item
	 * @type {string}
	 * @memberof ProductMetadataModel
	 */
	brand?: string;
	/**
	 * List of ASIN variations of the current item
	 * @type {Array<string>}
	 * @memberof ProductMetadataModel
	 */
	variationList?: Array<string>;
	/**
	 * List of reasons that made this item ineligible to be advertised
	 * @type {Array<string>}
	 * @memberof ProductMetadataModel
	 */
	ineligibilityReasons?: Array<string>;
}
/**
 *
 * @export
 * @interface ProductMetadataRequest
 */
export interface ProductMetadataRequest {
	/**
	 * Specific asins to search for in the advertiser\'s inventory. Cannot use together with skus or searchStr input types.
	 * @type {Array<string>}
	 * @memberof ProductMetadataRequest
	 */
	asins?: Array<string>;
	/**
	 * Whether item details such as name, image, and price is required
	 * @type {boolean}
	 * @memberof ProductMetadataRequest
	 */
	checkItemDetails?: boolean;
	/**
	 * Pagination token used for the suggested sort type
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	cursorToken?: string;
	/**
	 * Program type. Required if checks advertising eligibility:   * SP - Sponsored Product   * SB - Sponsored Brand   * SD - Sponsored Display
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	adType?: ProductMetadataRequestAdTypeEnum;
	/**
	 * Specific skus to search for in the advertiser\'s inventory. Currently only support SP program type for sellers. Cannot use together with asins or searchStr input types
	 * @type {Array<string>}
	 * @memberof ProductMetadataRequest
	 */
	skus?: Array<string>;
	/**
	 * Whether advertising eligibility info is required
	 * @type {boolean}
	 * @memberof ProductMetadataRequest
	 */
	checkEligibility?: boolean;
	/**
	 * Specific string in the item title to search for in the advertiser\'s inventory. Case insensitive. Cannot use together with asins or skus input types
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	searchStr?: string;
	/**
	 * Index of the page to be returned
	 * @type {number}
	 * @memberof ProductMetadataRequest
	 */
	pageIndex: number;
	/**
	 * Sort order (has to be DESC for the suggested sort type):   * ASC - Ascending, from A to Z   * DESC - Descending, from Z to A
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	sortOrder?: ProductMetadataRequestSortOrderEnum;
	/**
	 * Number of items to be returned on this page index (max 100 for author)
	 * @type {number}
	 * @memberof ProductMetadataRequest
	 */
	pageSize: number;
	/**
	 * Sort option for the result. Currently only support SP program type for sellers:   * SUGGESTED - Suggested products are those most likely to engage customers, and have a higher chance of generating clicks if advertised.   * CREATED_DATE - Date the item listing was created
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	sortBy?: ProductMetadataRequestSortByEnum;
	/**
	 * Optional locale for detail and eligibility response strings. Default to the marketplace locale.
	 * @type {string}
	 * @memberof ProductMetadataRequest
	 */
	locale?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ProductMetadataRequestAdTypeEnum {
	Sp = 'SP',
	Sb = 'SB',
	Sd = 'SD',
}
/**
 * @export
 * @enum {string}
 */
export enum ProductMetadataRequestSortOrderEnum {
	Asc = 'ASC',
	Desc = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum ProductMetadataRequestSortByEnum {
	Suggested = 'SUGGESTED',
	CreatedDate = 'CREATED_DATE',
}

/**
 *
 * @export
 * @interface ProductMetadataResponse
 */
export interface ProductMetadataResponse {
	/**
	 * Pagination token for later requests with specific sort type to use as the page index instead. Empty cursorToken means no further data is present at Server side.
	 * @type {string}
	 * @memberof ProductMetadataResponse
	 */
	cursorToken?: string;
	/**
	 *
	 * @type {Array<ProductMetadataModel>}
	 * @memberof ProductMetadataResponse
	 */
	ProductMetadataList?: Array<ProductMetadataModel>;
}

/**
 * ProductSelectorApi - axios parameter creator
 * @export
 */
export const ProductSelectorApiAxiosParamCreator = function (configuration?: Configuration) {
	return {
		/**
		 *   **Requires one of these permissions**: [\"advertiser_campaign_edit\",\"advertiser_campaign_view\"]
		 * @summary Returns product metadata for the advertiser
		 * @param {string} amazonAdvertisingAPIClientId The client identifier of the customer making the request.
		 * @param {string} amazonAdvertisingAPIScope The profile or entity identifier associated with the advertiser account.
		 * @param {ProductMetadataRequest} productMetadataRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		productMetadata: async (
			amazonAdvertisingAPIClientId: string,
			amazonAdvertisingAPIScope: string,
			productMetadataRequest: ProductMetadataRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
			assertParamExists('productMetadata', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId);
			// verify required parameter 'amazonAdvertisingAPIScope' is not null or undefined
			assertParamExists('productMetadata', 'amazonAdvertisingAPIScope', amazonAdvertisingAPIScope);
			// verify required parameter 'productMetadataRequest' is not null or undefined
			assertParamExists('productMetadata', 'productMetadataRequest', productMetadataRequest);
			const localVarPath = `/product/metadata`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			if (amazonAdvertisingAPIClientId !== undefined && amazonAdvertisingAPIClientId !== null) {
				localVarHeaderParameter['Amazon-Advertising-API-ClientId'] = String(amazonAdvertisingAPIClientId);
			}

			if (amazonAdvertisingAPIScope !== undefined && amazonAdvertisingAPIScope !== null) {
				localVarHeaderParameter['Amazon-Advertising-API-Scope'] = String(amazonAdvertisingAPIScope);
			}

			localVarHeaderParameter['Content-Type'] = 'application/vnd.productmetadatarequest.v1+json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				productMetadataRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * ProductSelectorApi - functional programming interface
 * @export
 */
export const ProductSelectorApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator = ProductSelectorApiAxiosParamCreator(configuration);
	return {
		/**
		 *   **Requires one of these permissions**: [\"advertiser_campaign_edit\",\"advertiser_campaign_view\"]
		 * @summary Returns product metadata for the advertiser
		 * @param {string} amazonAdvertisingAPIClientId The client identifier of the customer making the request.
		 * @param {string} amazonAdvertisingAPIScope The profile or entity identifier associated with the advertiser account.
		 * @param {ProductMetadataRequest} productMetadataRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async productMetadata(
			amazonAdvertisingAPIClientId: string,
			amazonAdvertisingAPIScope: string,
			productMetadataRequest: ProductMetadataRequest,
			options?: AxiosRequestConfig
		): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductMetadataResponse>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.productMetadata(
				amazonAdvertisingAPIClientId,
				amazonAdvertisingAPIScope,
				productMetadataRequest,
				options
			);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
	};
};

/**
 * ProductSelectorApi - factory interface
 * @export
 */
export const ProductSelectorApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = ProductSelectorApiFp(configuration);
	return {
		/**
		 *   **Requires one of these permissions**: [\"advertiser_campaign_edit\",\"advertiser_campaign_view\"]
		 * @summary Returns product metadata for the advertiser
		 * @param {string} amazonAdvertisingAPIClientId The client identifier of the customer making the request.
		 * @param {string} amazonAdvertisingAPIScope The profile or entity identifier associated with the advertiser account.
		 * @param {ProductMetadataRequest} productMetadataRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		productMetadata(
			amazonAdvertisingAPIClientId: string,
			amazonAdvertisingAPIScope: string,
			productMetadataRequest: ProductMetadataRequest,
			options?: any
		): AxiosPromise<ProductMetadataResponse> {
			return localVarFp
				.productMetadata(
					amazonAdvertisingAPIClientId,
					amazonAdvertisingAPIScope,
					productMetadataRequest,
					options
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * Request parameters for productMetadata operation in ProductSelectorApi.
 * @export
 * @interface ProductSelectorApiProductMetadataRequest
 */
export interface ProductSelectorApiProductMetadataRequest {
	/**
	 * The client identifier of the customer making the request.
	 * @type {string}
	 * @memberof ProductSelectorApiProductMetadata
	 */
	readonly amazonAdvertisingAPIClientId: string;

	/**
	 * The profile or entity identifier associated with the advertiser account.
	 * @type {string}
	 * @memberof ProductSelectorApiProductMetadata
	 */
	readonly amazonAdvertisingAPIScope: string;

	/**
	 *
	 * @type {ProductMetadataRequest}
	 * @memberof ProductSelectorApiProductMetadata
	 */
	readonly productMetadataRequest: ProductMetadataRequest;
}

/**
 * ProductSelectorApi - object-oriented interface
 * @export
 * @class ProductSelectorApi
 * @extends {BaseAPI}
 */
export class ProductSelectorApi extends BaseAPI {
	/**
	 *   **Requires one of these permissions**: [\"advertiser_campaign_edit\",\"advertiser_campaign_view\"]
	 * @summary Returns product metadata for the advertiser
	 * @param {ProductSelectorApiProductMetadataRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ProductSelectorApi
	 */
	public productMetadata(requestParameters: ProductSelectorApiProductMetadataRequest, options?: AxiosRequestConfig) {
		return ProductSelectorApiFp(this.configuration)
			.productMetadata(
				requestParameters.amazonAdvertisingAPIClientId,
				requestParameters.amazonAdvertisingAPIScope,
				requestParameters.productMetadataRequest,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}
}