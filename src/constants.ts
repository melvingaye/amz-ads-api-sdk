import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface Schema {
	name: string;
	schemaUrl: string;
}

export interface AmazonAdvertisingAPICredentials {
	clientId: string;
	profileId: string;
	refreshToken?: string;
}

export interface APIConfigurationParameters {
	axios?: AxiosInstance;
	accessToken?: string;
	basePath?: string;
	baseOptions?: AxiosRequestConfig;
	credentials?: AmazonAdvertisingAPICredentials;
}

export const PATHS = {
	SCHEMAS: './docs/schemas',
	SCHEMAS_DOCS: './docs/schemas.js',
	APIS: './src/apis',
	MODELS: './src/apis/models',
	CLIENTS: './src/apis/clients',
};

export const DEFAULT_API_BASE_PATH = 'https://advertising-api.amazon.com';

export const SCHEMAS: Schema[] = [
	{
		name: 'Profiles',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/profiles/3-0/openapi.yaml',
	},
	{
		name: 'DSP',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/dsp/3-1/openapi.yaml',
	},
	{
		name: 'Manager Account',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/ManagerAccount_prod_3p.json',
	},
	{
		name: 'Billing',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Billing_prod_3p.json',
	},
	{
		name: 'Audiences Discovery',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Audiences_prod_3p.json',
	},
	{
		name: 'Creative Assets',
		schemaUrl:
			'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/creative-asset-library/creative-asset-library-openapi.yaml',
	},
	{
		name: 'Change History',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Changehistory_prod_3p.json',
	},
	{
		name: 'Product Eligibility',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Eligibility_prod_3p.json',
	},
	{
		name: 'Audience Insights',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Insights_prod_3p.json',
	},
	{
		name: 'Localization',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/Localization_prod_3p.json',
	},
	{
		name: 'Product MetaData',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/ProductSelector_prod_3p.json',
	},
	{
		name: 'Amazon Attribution',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/AmazonAttribution_prod_3p.json',
	},
	{
		name: 'Brand Metrics',
		schemaUrl: 'https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/BrandMetrics_prod_3p.json',
	},
	{
		name: 'Sponsored Brands',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/sponsored-brands/3-0/openapi.yaml',
	},
	{
		name: 'Sponsored Display',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/sponsored-display/3-0/openapi.yaml',
	},
	{
		name: 'Sponsored Products',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/sponsored-products/2-0/openapi.yaml',
	},
	{
		name: 'Data Provider',
		schemaUrl: 'https://d3a0d0y2hgofx6.cloudfront.net/openapi/en-us/data-provider/openapi.yaml',
	},
];
