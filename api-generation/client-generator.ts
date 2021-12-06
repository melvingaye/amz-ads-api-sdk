import { template, TemplateExecutor } from 'lodash';
import { Project } from 'ts-morph';
import { SCHEMAS, PATHS } from '../src/constants';
import { apiClientTemplate } from './client-template';
import { kebabSchemaName, generateAPIClientFileName, generateAPIClientClassname } from './util';

function generateAPIClient(
	project: Project,
	executor: TemplateExecutor,
	schemaName: string,
	apiClientFileName: string,
	apiClientClassName: string
) {
	// Find main api class
	const sourceFile = project.getSourceFileOrThrow(`${PATHS.MODELS}/${kebabSchemaName(schemaName, 'ts')}`);

	// Get all other api classes
	const apiClasses = sourceFile.getClasses().filter((c) => c.getNameOrThrow().includes('Api'));

	let extendable = '';
	const helpers = [];
	const extendedClassNames = apiClasses.map((c) => c.getNameOrThrow()).join(',');

	// apply Mixins for api models that have multiple API classes
	if (apiClasses.length > 1) {
		extendable = `
    export interface ${apiClientClassName} extends ${extendedClassNames} {}
    applyMixins(${apiClientClassName}, [${extendedClassNames}])
    `;

		helpers.push('applyMixins');
	}

	const compiledFile = executor({
		importApiModelClassName: extendedClassNames,
		importHelpers: helpers.join(','),
		dirname: kebabSchemaName(schemaName),
		apiModelClassName: apiClasses[0].getNameOrThrow(),
		apiClientClassName,
		extendable,
	});

	project.createSourceFile(`${PATHS.CLIENTS}/${apiClientFileName}.ts`, compiledFile, {
		overwrite: true,
	});
}

function generateExportStatements(project: Project) {
	const compileExportStatement = template(`export * from './<%= apiClientFileName %>'`);

	const exportStatements = SCHEMAS.map((schema) =>
		compileExportStatement({
			apiClientFileName: generateAPIClientFileName(schema.name),
		})
	);

	project.createSourceFile(`${PATHS.CLIENTS}/index.ts`, exportStatements.join('\n'), {
		overwrite: true,
	});
}

export function generateAPIClients(): void {
	const compileAPIClient = template(apiClientTemplate);
	const project = new Project({
		tsConfigFilePath: './tsconfig.json',
	});

	for (const { name } of SCHEMAS) {
		const apiClientFileName = generateAPIClientFileName(name);
		generateAPIClient(
			project,
			compileAPIClient,
			name,
			apiClientFileName,
			generateAPIClientClassname(apiClientFileName)
		);
	}

	generateExportStatements(project);
	project.saveSync();
}

export default { generateAPIClients };
