/* tslint:disable */
/* eslint-disable */
/**
 * Eligibility
 * Check advertising eligibility of products.
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
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * The advertising eligibility status of a product.
 * @export
 * @interface EligibilityStatus
 */
export interface EligibilityStatus {
    /**
     * An enumerated advertising eligibility severity status. If set to `INELIGIBLE`, the product cannot be included in an advertisement. If set to `ELIGIBLE_WITH_WARNING`, the product may not receive impressions when included in an advertisement.
     * @type {string}
     * @memberof EligibilityStatus
     */
    'severity'?: EligibilityStatusSeverityEnum;
    /**
     * The status identifier.
     * @type {string}
     * @memberof EligibilityStatus
     */
    'name'?: EligibilityStatusNameEnum;
    /**
     * A URL with additional information about the status identifier. May not be present for all status identifiers.
     * @type {string}
     * @memberof EligibilityStatus
     */
    'helpUrl'?: string;
    /**
     * A human-readable description of the status identifier specified in the `name` field.
     * @type {string}
     * @memberof EligibilityStatus
     */
    'message'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum EligibilityStatusSeverityEnum {
    Ineligible = 'INELIGIBLE',
    EligibleWithWarning = 'ELIGIBLE_WITH_WARNING'
}
/**
    * @export
    * @enum {string}
    */
export enum EligibilityStatusNameEnum {
    AdultProduct = 'ADULT_PRODUCT',
    ClosedCategory = 'CLOSED_CATEGORY',
    IneligibleCondition = 'INELIGIBLE_CONDITION',
    IneligibleOffer = 'INELIGIBLE_OFFER',
    IneligibleProductCost = 'INELIGIBLE_PRODUCT_COST',
    ListingSupressed = 'LISTING_SUPRESSED',
    MissingImage = 'MISSING_IMAGE',
    MissingTitle = 'MISSING_TITLE',
    NotInBuybox = 'NOT_IN_BUYBOX',
    OutOfStock = 'OUT_OF_STOCK',
    RestrictedCategory = 'RESTRICTED_CATEGORY',
    VariationParent = 'VARIATION_PARENT'
}

/**
 * An Amazon product identifier, seller product identifer, or both.
 * @export
 * @interface ProductDetails
 */
export interface ProductDetails {
    /**
     * An Amazon product identifier.
     * @type {string}
     * @memberof ProductDetails
     */
    'asin': string;
    /**
     * A seller product identifier.
     * @type {string}
     * @memberof ProductDetails
     */
    'sku'?: string;
}
/**
 * The error response object.
 * @export
 * @interface ProductEligibilityError
 */
export interface ProductEligibilityError {
    /**
     * The HTTP status code of the response.
     * @type {string}
     * @memberof ProductEligibilityError
     */
    'code'?: string;
    /**
     * A human-readable description of the response.
     * @type {string}
     * @memberof ProductEligibilityError
     */
    'details'?: string;
}
/**
 * A product advertising eligibility request object.
 * @export
 * @interface ProductEligibilityRequest
 */
export interface ProductEligibilityRequest {
    /**
     * Set to \'sp\' to check product eligibility for Sponsored Products advertisements. Set to \'sb\' to check product eligibility for Sponsored Brands advertisements.
     * @type {string}
     * @memberof ProductEligibilityRequest
     */
    'adType'?: ProductEligibilityRequestAdTypeEnum;
    /**
     * A list of product identifier objects.
     * @type {Array<ProductDetails>}
     * @memberof ProductEligibilityRequest
     */
    'productDetailsList': Array<ProductDetails>;
    /**
     * Set to the locale string in the table below to specify the language in which the response is returned. |Locale|Language (ISO 639)|Country (ISO 3166)| |------|------------------|------------------| |ar-AE|Arabic (ar)|United Arab Emirates (AE)| |zh-CN|Chinese (zh)|China (CN)| |nl-NL|Dutch (nl)|Netherlands (NL)| |en-AU|English (en)|Australia (AU)| |en-CA|English (en)|Canada (CA)| |en-IN|English (en)|India (IN)| |en-GB|English (en)|United Kingdom (GB)| |en-US|English (en)|United States (US)| |fr-CA|French (fr)|Canada (CA)| |fr-FR|French (fr)|France (FR)| |de-DE|German (de)|Germany (DE)| |it-IT|Italian (it)|Italy (IT)| |ja-JP|Japanese (ja)|Japan (JP)| |ko-KR|Korean (ko)|South Korea (KR)| |pt-BR|Portuguese (pt)|Brazil (BR)| |es-ES|Spanish (es)|Spain (ES)| |es-US|Spanish (es)|United States (US)| |es-MX|Spanish (es)|Mexico (MX)| |tr-TR|Turkish (tr)|Turkey (TR)| 
     * @type {string}
     * @memberof ProductEligibilityRequest
     */
    'locale'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ProductEligibilityRequestAdTypeEnum {
    Sp = 'sp',
    Sb = 'sb'
}

/**
 * A product advertising eligibility response object.
 * @export
 * @interface ProductEligibilityResponse
 */
export interface ProductEligibilityResponse {
    /**
     * A list of product advertising eligibility responses.
     * @type {Array<ProductResponse>}
     * @memberof ProductEligibilityResponse
     */
    'productResponseList'?: Array<ProductResponse>;
}
/**
 * An product advertising eligibility response.
 * @export
 * @interface ProductResponse
 */
export interface ProductResponse {
    /**
     * 
     * @type {ProductDetails}
     * @memberof ProductResponse
     */
    'productDetails': ProductDetails;
    /**
     * 
     * @type {Array<EligibilityStatus>}
     * @memberof ProductResponse
     */
    'eligibilityStatusList': Array<EligibilityStatus>;
    /**
     * A human-readable description of the product\'s advertising eligibility status. Inherits highest severity from eligibilityStatusList.
     * @type {string}
     * @memberof ProductResponse
     */
    'overallStatus': ProductResponseOverallStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ProductResponseOverallStatusEnum {
    Eligible = 'ELIGIBLE',
    Ineligible = 'INELIGIBLE',
    EligibleWithWarning = 'ELIGIBLE_WITH_WARNING'
}


/**
 * ProductEligibilityApi - axios parameter creator
 * @export
 */
export const ProductEligibilityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a list of advertising eligibility objects for a set of products. Requests are permitted only for products sold by the merchant associated with the profile. Note that the request object is a list of ASINs, but multiple SKUs are returned if there is more than one SKU associated with an ASIN. If a product is not eligible for advertising, the response includes an object describing the reasons for ineligibility.
         * @summary Gets advertising eligibility status for a list of products.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account.
         * @param {string} amazonAdvertisingAPIScope The identifier of a profile associated with the advertiser account. Use &#x60;GET&#x60; method on Profiles resource to list profiles associated with the access token passed in the HTTP Authorization header.
         * @param {ProductEligibilityRequest} productEligibilityRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productEligibility: async (amazonAdvertisingAPIClientId: string, amazonAdvertisingAPIScope: string, productEligibilityRequest: ProductEligibilityRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
            assertParamExists('productEligibility', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId)
            // verify required parameter 'amazonAdvertisingAPIScope' is not null or undefined
            assertParamExists('productEligibility', 'amazonAdvertisingAPIScope', amazonAdvertisingAPIScope)
            // verify required parameter 'productEligibilityRequest' is not null or undefined
            assertParamExists('productEligibility', 'productEligibilityRequest', productEligibilityRequest)
            const localVarPath = `/eligibility/product/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (amazonAdvertisingAPIClientId !== undefined && amazonAdvertisingAPIClientId !== null) {
                localVarHeaderParameter['Amazon-Advertising-API-ClientId'] = String(amazonAdvertisingAPIClientId);
            }

            if (amazonAdvertisingAPIScope !== undefined && amazonAdvertisingAPIScope !== null) {
                localVarHeaderParameter['Amazon-Advertising-API-Scope'] = String(amazonAdvertisingAPIScope);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(productEligibilityRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductEligibilityApi - functional programming interface
 * @export
 */
export const ProductEligibilityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductEligibilityApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a list of advertising eligibility objects for a set of products. Requests are permitted only for products sold by the merchant associated with the profile. Note that the request object is a list of ASINs, but multiple SKUs are returned if there is more than one SKU associated with an ASIN. If a product is not eligible for advertising, the response includes an object describing the reasons for ineligibility.
         * @summary Gets advertising eligibility status for a list of products.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account.
         * @param {string} amazonAdvertisingAPIScope The identifier of a profile associated with the advertiser account. Use &#x60;GET&#x60; method on Profiles resource to list profiles associated with the access token passed in the HTTP Authorization header.
         * @param {ProductEligibilityRequest} productEligibilityRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productEligibility(amazonAdvertisingAPIClientId: string, amazonAdvertisingAPIScope: string, productEligibilityRequest: ProductEligibilityRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductEligibilityResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productEligibility(amazonAdvertisingAPIClientId, amazonAdvertisingAPIScope, productEligibilityRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductEligibilityApi - factory interface
 * @export
 */
export const ProductEligibilityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductEligibilityApiFp(configuration)
    return {
        /**
         * Gets a list of advertising eligibility objects for a set of products. Requests are permitted only for products sold by the merchant associated with the profile. Note that the request object is a list of ASINs, but multiple SKUs are returned if there is more than one SKU associated with an ASIN. If a product is not eligible for advertising, the response includes an object describing the reasons for ineligibility.
         * @summary Gets advertising eligibility status for a list of products.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account.
         * @param {string} amazonAdvertisingAPIScope The identifier of a profile associated with the advertiser account. Use &#x60;GET&#x60; method on Profiles resource to list profiles associated with the access token passed in the HTTP Authorization header.
         * @param {ProductEligibilityRequest} productEligibilityRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productEligibility(amazonAdvertisingAPIClientId: string, amazonAdvertisingAPIScope: string, productEligibilityRequest: ProductEligibilityRequest, options?: any): AxiosPromise<ProductEligibilityResponse> {
            return localVarFp.productEligibility(amazonAdvertisingAPIClientId, amazonAdvertisingAPIScope, productEligibilityRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for productEligibility operation in ProductEligibilityApi.
 * @export
 * @interface ProductEligibilityApiProductEligibilityRequest
 */
export interface ProductEligibilityApiProductEligibilityRequest {
    /**
     * The identifier of a client associated with a \&quot;Login with Amazon\&quot; account.
     * @type {string}
     * @memberof ProductEligibilityApiProductEligibility
     */
    readonly amazonAdvertisingAPIClientId: string

    /**
     * The identifier of a profile associated with the advertiser account. Use &#x60;GET&#x60; method on Profiles resource to list profiles associated with the access token passed in the HTTP Authorization header.
     * @type {string}
     * @memberof ProductEligibilityApiProductEligibility
     */
    readonly amazonAdvertisingAPIScope: string

    /**
     * 
     * @type {ProductEligibilityRequest}
     * @memberof ProductEligibilityApiProductEligibility
     */
    readonly productEligibilityRequest: ProductEligibilityRequest
}

/**
 * ProductEligibilityApi - object-oriented interface
 * @export
 * @class ProductEligibilityApi
 * @extends {BaseAPI}
 */
export class ProductEligibilityApi extends BaseAPI {
    /**
     * Gets a list of advertising eligibility objects for a set of products. Requests are permitted only for products sold by the merchant associated with the profile. Note that the request object is a list of ASINs, but multiple SKUs are returned if there is more than one SKU associated with an ASIN. If a product is not eligible for advertising, the response includes an object describing the reasons for ineligibility.
     * @summary Gets advertising eligibility status for a list of products.
     * @param {ProductEligibilityApiProductEligibilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductEligibilityApi
     */
    public productEligibility(requestParameters: ProductEligibilityApiProductEligibilityRequest, options?: AxiosRequestConfig) {
        return ProductEligibilityApiFp(this.configuration).productEligibility(requestParameters.amazonAdvertisingAPIClientId, requestParameters.amazonAdvertisingAPIScope, requestParameters.productEligibilityRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


