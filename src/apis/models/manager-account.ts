/* tslint:disable */
/* eslint-disable */
/**
 * Manager Account
 * A [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8) lets you manage a group of Amazon Advertising accounts.
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
 * Object representation of an Amazon Advertising account.
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The identifier of the marketplace to which the account is associated. See [this table](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_Endpoints.html) for `marketplaceId` mappings.
     * @type {string}
     * @memberof Account
     */
    'marketplaceId'?: string;
    /**
     * Id of the Amazon Advertising account.
     * @type {string}
     * @memberof Account
     */
    'accountId'?: string;
    /**
     * The name given to the Amazon Advertising account.
     * @type {string}
     * @memberof Account
     */
    'accountName'?: string;
    /**
     * The identifier of a profile associated with the advertiser account. Note that this value is only populated for a subset of account types: `[ SELLER, VENDOR, MARKETING_CLOUD ]`. It will be `null` for accounts of other types.
     * @type {string}
     * @memberof Account
     */
    'profileId'?: string;
    /**
     * 
     * @type {AccountType}
     * @memberof Account
     */
    'accountType'?: AccountType;
    /**
     * The identifier of a DSP advertiser. Note that this value is only populated for accounts with type `DSP_ADVERTISING_ACCOUNT`. It will be `null` for accounts of other types.
     * @type {string}
     * @memberof Account
     */
    'dspAdvertiserId'?: string;
}
/**
 * The type of a role used in account relationships.
 * @export
 * @enum {string}
 */

export enum AccountRelationshipRole {
    EntityOwner = 'ENTITY_OWNER',
    EntityUser = 'ENTITY_USER',
    EntityViewer = 'ENTITY_VIEWER',
    SellerUser = 'SELLER_USER'
}

/**
 * String identifier for an Amazon Advertising account or advertiser. `ACCOUNT_ID` is an identifier that is returned by the [Profiles resource](https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles/listProfiles), within the `AccountInfo.id` data member. `ACCOUNT_ID` may begin with the string `\"ENTITY\"`. `DSP_ADVERTISER_ID` is an identifier for a DSP advertiser, which is returned by the [DSP resource](https://advertising.amazon.com/API/docs/en-us/dsp-advertiser/#/Advertiser/get_dsp_advertisers).
 * @export
 * @interface AccountToUpdate
 */
export interface AccountToUpdate {
    /**
     * The types of role that will exist with the Amazon Advertising account. Depending on account type, the default role will be ENTITY_USER or SELLER_USER. Only one role at a time is currently supported
     * @type {Array<AccountRelationshipRole>}
     * @memberof AccountToUpdate
     */
    'roles'?: Array<AccountRelationshipRole>;
    /**
     * Id of the Amazon Advertising account.
     * @type {string}
     * @memberof AccountToUpdate
     */
    'id'?: string;
    /**
     * The type of the Id
     * @type {string}
     * @memberof AccountToUpdate
     */
    'type'?: AccountToUpdateTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum AccountToUpdateTypeEnum {
    AccountId = 'ACCOUNT_ID',
    DspAdvertiserId = 'DSP_ADVERTISER_ID'
}

/**
 * Object representation of an Amazon Advertising account or [DSP advertiser](https://advertising.amazon.com/API/docs/en-us/dsp-advertiser/#/) that failed to update.
 * @export
 * @interface AccountToUpdateFailure
 */
export interface AccountToUpdateFailure {
    /**
     * 
     * @type {ErrorDetail}
     * @memberof AccountToUpdateFailure
     */
    'error'?: ErrorDetail;
    /**
     * 
     * @type {AccountToUpdate}
     * @memberof AccountToUpdateFailure
     */
    'account'?: AccountToUpdate;
}
/**
 * Type of the Amazon Advertising account.
 * @export
 * @enum {string}
 */

export enum AccountType {
    Vendor = 'VENDOR',
    Seller = 'SELLER',
    DspAdvertisingAccount = 'DSP_ADVERTISING_ACCOUNT',
    MarketingCloud = 'MARKETING_CLOUD'
}

/**
 * Request object that defines the fields required to create a Manager account.
 * @export
 * @interface CreateManagerAccountRequest
 */
export interface CreateManagerAccountRequest {
    /**
     * Name of the Manager account.
     * @type {string}
     * @memberof CreateManagerAccountRequest
     */
    'managerAccountName'?: string;
    /**
     * Type of the Manager account, which indicates how the Manager account will be used. Use `Advertiser` if the Manager account will be used for **your own** products and services, or `Agency` if you are managing accounts **on behalf of your clients**.
     * @type {string}
     * @memberof CreateManagerAccountRequest
     */
    'managerAccountType'?: CreateManagerAccountRequestManagerAccountTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateManagerAccountRequestManagerAccountTypeEnum {
    Advertiser = 'Advertiser',
    Agency = 'Agency'
}

/**
 * The error response object.
 * @export
 * @interface ErrorDetail
 */
export interface ErrorDetail {
    /**
     * 
     * @type {string}
     * @memberof ErrorDetail
     */
    'code'?: ErrorDetailCodeEnum;
    /**
     * A human-readable description of the error.
     * @type {string}
     * @memberof ErrorDetail
     */
    'message'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ErrorDetailCodeEnum {
    BadRequest = 'BAD_REQUEST',
    Unauthorized = 'UNAUTHORIZED',
    Forbidden = 'FORBIDDEN',
    TooManyRequests = 'TOO_MANY_REQUESTS',
    InternalServiceError = 'INTERNAL_SERVICE_ERROR'
}

/**
 * Response containing a list of Manager Accounts that a given user has access to.
 * @export
 * @interface GetManagerAccountsResponse
 */
export interface GetManagerAccountsResponse {
    /**
     * List of Manager Accounts that the user has access to
     * @type {Array<ManagerAccount>}
     * @memberof GetManagerAccountsResponse
     */
    'managerAccounts'?: Array<ManagerAccount>;
}
/**
 * Object representation of an Amazon Advertising Manager Account.
 * @export
 * @interface ManagerAccount
 */
export interface ManagerAccount {
    /**
     * The name given to a Manager Account.
     * @type {string}
     * @memberof ManagerAccount
     */
    'managerAccountName'?: string;
    /**
     * 
     * @type {Array<Account>}
     * @memberof ManagerAccount
     */
    'linkedAccounts'?: Array<Account>;
    /**
     * Id of the Manager Account.
     * @type {string}
     * @memberof ManagerAccount
     */
    'managerAccountId'?: string;
}
/**
 * A list of Advertising accounts or advertisers to link/unlink with [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8). User can pass a list with a maximum of 20 accounts/advertisers using any mix of identifiers.
 * @export
 * @interface UpdateAdvertisingAccountsInManagerAccountRequest
 */
export interface UpdateAdvertisingAccountsInManagerAccountRequest {
    /**
     * List of Advertising accounts or advertisers to link/unlink with [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8). User can pass a list with a maximum of 20 accounts/advertisers using any mix of identifiers.
     * @type {Array<AccountToUpdate>}
     * @memberof UpdateAdvertisingAccountsInManagerAccountRequest
     */
    'accounts'?: Array<AccountToUpdate>;
}
/**
 * Link/Unlink Advertising account or advertiser Response
 * @export
 * @interface UpdateAdvertisingAccountsInManagerAccountResponse
 */
export interface UpdateAdvertisingAccountsInManagerAccountResponse {
    /**
     * List of Advertising accounts or advertisers failed to Link/Unlink with [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
     * @type {Array<AccountToUpdateFailure>}
     * @memberof UpdateAdvertisingAccountsInManagerAccountResponse
     */
    'failedAccounts'?: Array<AccountToUpdateFailure>;
    /**
     * List of Advertising accounts or advertisers successfully Link/Unlink with [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
     * @type {Array<AccountToUpdate>}
     * @memberof UpdateAdvertisingAccountsInManagerAccountResponse
     */
    'succeedAccounts'?: Array<AccountToUpdate>;
}

/**
 * ManagerAccountsApi - axios parameter creator
 * @export
 */
export const ManagerAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Amazon Advertising [Manager account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Creates a new Amazon Advertising Manager account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {CreateManagerAccountRequest} createManagerAccountRequest Request object required to create a new Manager account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createManagerAccount: async (amazonAdvertisingAPIClientId: string, createManagerAccountRequest: CreateManagerAccountRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
            assertParamExists('createManagerAccount', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId)
            // verify required parameter 'createManagerAccountRequest' is not null or undefined
            assertParamExists('createManagerAccount', 'createManagerAccountRequest', createManagerAccountRequest)
            const localVarPath = `/managerAccounts`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.createmanageraccountrequest.v1+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createManagerAccountRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all [Manager accounts](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8) that a user has access to, along with metadata for all of the Amazon Advertising accounts that are linked to the Manager account.
         * @summary Returns all Manager accounts that a given Amazon Advertising user has access to.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManagerAccountsForUser: async (amazonAdvertisingAPIClientId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
            assertParamExists('getManagerAccountsForUser', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId)
            const localVarPath = `/managerAccounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (amazonAdvertisingAPIClientId !== undefined && amazonAdvertisingAPIClientId !== null) {
                localVarHeaderParameter['Amazon-Advertising-API-ClientId'] = String(amazonAdvertisingAPIClientId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Link Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Link Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        linkAdvertisingAccountsToManagerAccountPublicAPI: async (amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
            assertParamExists('linkAdvertisingAccountsToManagerAccountPublicAPI', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId)
            // verify required parameter 'managerAccountId' is not null or undefined
            assertParamExists('linkAdvertisingAccountsToManagerAccountPublicAPI', 'managerAccountId', managerAccountId)
            // verify required parameter 'updateAdvertisingAccountsInManagerAccountRequest' is not null or undefined
            assertParamExists('linkAdvertisingAccountsToManagerAccountPublicAPI', 'updateAdvertisingAccountsInManagerAccountRequest', updateAdvertisingAccountsInManagerAccountRequest)
            const localVarPath = `/managerAccounts/{managerAccountId}/associate`
                .replace(`{${"managerAccountId"}}`, encodeURIComponent(String(managerAccountId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.updateadvertisingaccountsinmanageraccountrequest.v1+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateAdvertisingAccountsInManagerAccountRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unlink Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Unlink Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlinkAdvertisingAccountsToManagerAccountPublicAPI: async (amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'amazonAdvertisingAPIClientId' is not null or undefined
            assertParamExists('unlinkAdvertisingAccountsToManagerAccountPublicAPI', 'amazonAdvertisingAPIClientId', amazonAdvertisingAPIClientId)
            // verify required parameter 'managerAccountId' is not null or undefined
            assertParamExists('unlinkAdvertisingAccountsToManagerAccountPublicAPI', 'managerAccountId', managerAccountId)
            // verify required parameter 'updateAdvertisingAccountsInManagerAccountRequest' is not null or undefined
            assertParamExists('unlinkAdvertisingAccountsToManagerAccountPublicAPI', 'updateAdvertisingAccountsInManagerAccountRequest', updateAdvertisingAccountsInManagerAccountRequest)
            const localVarPath = `/managerAccounts/{managerAccountId}/disassociate`
                .replace(`{${"managerAccountId"}}`, encodeURIComponent(String(managerAccountId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.updateadvertisingaccountsinmanageraccountrequest.v1+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateAdvertisingAccountsInManagerAccountRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ManagerAccountsApi - functional programming interface
 * @export
 */
export const ManagerAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ManagerAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Amazon Advertising [Manager account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Creates a new Amazon Advertising Manager account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {CreateManagerAccountRequest} createManagerAccountRequest Request object required to create a new Manager account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createManagerAccount(amazonAdvertisingAPIClientId: string, createManagerAccountRequest: CreateManagerAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ManagerAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createManagerAccount(amazonAdvertisingAPIClientId, createManagerAccountRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all [Manager accounts](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8) that a user has access to, along with metadata for all of the Amazon Advertising accounts that are linked to the Manager account.
         * @summary Returns all Manager accounts that a given Amazon Advertising user has access to.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getManagerAccountsForUser(amazonAdvertisingAPIClientId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetManagerAccountsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getManagerAccountsForUser(amazonAdvertisingAPIClientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Link Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Link Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async linkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAdvertisingAccountsInManagerAccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId, managerAccountId, updateAdvertisingAccountsInManagerAccountRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unlink Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Unlink Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlinkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAdvertisingAccountsInManagerAccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId, managerAccountId, updateAdvertisingAccountsInManagerAccountRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ManagerAccountsApi - factory interface
 * @export
 */
export const ManagerAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ManagerAccountsApiFp(configuration)
    return {
        /**
         * Creates a new Amazon Advertising [Manager account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Creates a new Amazon Advertising Manager account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {CreateManagerAccountRequest} createManagerAccountRequest Request object required to create a new Manager account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createManagerAccount(amazonAdvertisingAPIClientId: string, createManagerAccountRequest: CreateManagerAccountRequest, options?: any): AxiosPromise<ManagerAccount> {
            return localVarFp.createManagerAccount(amazonAdvertisingAPIClientId, createManagerAccountRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all [Manager accounts](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8) that a user has access to, along with metadata for all of the Amazon Advertising accounts that are linked to the Manager account.
         * @summary Returns all Manager accounts that a given Amazon Advertising user has access to.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManagerAccountsForUser(amazonAdvertisingAPIClientId: string, options?: any): AxiosPromise<GetManagerAccountsResponse> {
            return localVarFp.getManagerAccountsForUser(amazonAdvertisingAPIClientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Link Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Link Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        linkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options?: any): AxiosPromise<UpdateAdvertisingAccountsInManagerAccountResponse> {
            return localVarFp.linkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId, managerAccountId, updateAdvertisingAccountsInManagerAccountRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Unlink Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
         * @summary Unlink Amazon Advertising accounts or advertisers with a Manager Account.
         * @param {string} amazonAdvertisingAPIClientId The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
         * @param {string} managerAccountId Id of the Manager Account.
         * @param {UpdateAdvertisingAccountsInManagerAccountRequest} updateAdvertisingAccountsInManagerAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlinkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId: string, managerAccountId: string, updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest, options?: any): AxiosPromise<UpdateAdvertisingAccountsInManagerAccountResponse> {
            return localVarFp.unlinkAdvertisingAccountsToManagerAccountPublicAPI(amazonAdvertisingAPIClientId, managerAccountId, updateAdvertisingAccountsInManagerAccountRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createManagerAccount operation in ManagerAccountsApi.
 * @export
 * @interface ManagerAccountsApiCreateManagerAccountRequest
 */
export interface ManagerAccountsApiCreateManagerAccountRequest {
    /**
     * The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
     * @type {string}
     * @memberof ManagerAccountsApiCreateManagerAccount
     */
    readonly amazonAdvertisingAPIClientId: string

    /**
     * Request object required to create a new Manager account.
     * @type {CreateManagerAccountRequest}
     * @memberof ManagerAccountsApiCreateManagerAccount
     */
    readonly createManagerAccountRequest: CreateManagerAccountRequest
}

/**
 * Request parameters for getManagerAccountsForUser operation in ManagerAccountsApi.
 * @export
 * @interface ManagerAccountsApiGetManagerAccountsForUserRequest
 */
export interface ManagerAccountsApiGetManagerAccountsForUserRequest {
    /**
     * The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
     * @type {string}
     * @memberof ManagerAccountsApiGetManagerAccountsForUser
     */
    readonly amazonAdvertisingAPIClientId: string
}

/**
 * Request parameters for linkAdvertisingAccountsToManagerAccountPublicAPI operation in ManagerAccountsApi.
 * @export
 * @interface ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPIRequest
 */
export interface ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPIRequest {
    /**
     * The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
     * @type {string}
     * @memberof ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly amazonAdvertisingAPIClientId: string

    /**
     * Id of the Manager Account.
     * @type {string}
     * @memberof ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly managerAccountId: string

    /**
     * 
     * @type {UpdateAdvertisingAccountsInManagerAccountRequest}
     * @memberof ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest
}

/**
 * Request parameters for unlinkAdvertisingAccountsToManagerAccountPublicAPI operation in ManagerAccountsApi.
 * @export
 * @interface ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPIRequest
 */
export interface ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPIRequest {
    /**
     * The identifier of a client associated with a \&quot;Login with Amazon\&quot; account. This is a required header for advertisers and integrators using the Advertising API.
     * @type {string}
     * @memberof ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly amazonAdvertisingAPIClientId: string

    /**
     * Id of the Manager Account.
     * @type {string}
     * @memberof ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly managerAccountId: string

    /**
     * 
     * @type {UpdateAdvertisingAccountsInManagerAccountRequest}
     * @memberof ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPI
     */
    readonly updateAdvertisingAccountsInManagerAccountRequest: UpdateAdvertisingAccountsInManagerAccountRequest
}

/**
 * ManagerAccountsApi - object-oriented interface
 * @export
 * @class ManagerAccountsApi
 * @extends {BaseAPI}
 */
export class ManagerAccountsApi extends BaseAPI {
    /**
     * Creates a new Amazon Advertising [Manager account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
     * @summary Creates a new Amazon Advertising Manager account.
     * @param {ManagerAccountsApiCreateManagerAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagerAccountsApi
     */
    public createManagerAccount(requestParameters: ManagerAccountsApiCreateManagerAccountRequest, options?: AxiosRequestConfig) {
        return ManagerAccountsApiFp(this.configuration).createManagerAccount(requestParameters.amazonAdvertisingAPIClientId, requestParameters.createManagerAccountRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all [Manager accounts](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8) that a user has access to, along with metadata for all of the Amazon Advertising accounts that are linked to the Manager account.
     * @summary Returns all Manager accounts that a given Amazon Advertising user has access to.
     * @param {ManagerAccountsApiGetManagerAccountsForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagerAccountsApi
     */
    public getManagerAccountsForUser(requestParameters: ManagerAccountsApiGetManagerAccountsForUserRequest, options?: AxiosRequestConfig) {
        return ManagerAccountsApiFp(this.configuration).getManagerAccountsForUser(requestParameters.amazonAdvertisingAPIClientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Link Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
     * @summary Link Amazon Advertising accounts or advertisers with a Manager Account.
     * @param {ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPIRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagerAccountsApi
     */
    public linkAdvertisingAccountsToManagerAccountPublicAPI(requestParameters: ManagerAccountsApiLinkAdvertisingAccountsToManagerAccountPublicAPIRequest, options?: AxiosRequestConfig) {
        return ManagerAccountsApiFp(this.configuration).linkAdvertisingAccountsToManagerAccountPublicAPI(requestParameters.amazonAdvertisingAPIClientId, requestParameters.managerAccountId, requestParameters.updateAdvertisingAccountsInManagerAccountRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlink Amazon Advertising accounts or advertisers with a [Manager Account](https://advertising.amazon.com/help?ref_=a20m_us_blog_whtsnewfb2020_040120#GU3YDB26FR7XT3C8).
     * @summary Unlink Amazon Advertising accounts or advertisers with a Manager Account.
     * @param {ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPIRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagerAccountsApi
     */
    public unlinkAdvertisingAccountsToManagerAccountPublicAPI(requestParameters: ManagerAccountsApiUnlinkAdvertisingAccountsToManagerAccountPublicAPIRequest, options?: AxiosRequestConfig) {
        return ManagerAccountsApiFp(this.configuration).unlinkAdvertisingAccountsToManagerAccountPublicAPI(requestParameters.amazonAdvertisingAPIClientId, requestParameters.managerAccountId, requestParameters.updateAdvertisingAccountsInManagerAccountRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


