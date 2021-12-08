import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { PATHS, SCHEMAS } from '../src/constants';
import { Project } from 'ts-morph';
import { kebabSchemaName } from './util';
const commonApiFiles: string[] = ['base.ts', 'common.ts', 'configuration.ts'];

const execOpenApiGenerator = (fileName: string) => {
	// const apiInputFile = `${PATHS.SCHEMAS}/${fileName}`;
	const apiInputFile = path.join(PATHS.SCHEMAS, fileName);
	console.log(apiInputFile);
	const apiOutputFile = `${PATHS.APIS}/${fileName.slice(0, fileName.length - 4)}`;

	const command = `openapi-generator-cli generate -g typescript-axios --enable-post-process-file --additional-properties=supportES6=true,useSingleRequestParameter=true
	--type-mappings=set=Array --skip-validate-spec -o ${apiOutputFile} -i ${apiInputFile}`;
	execSync(command);
};

const moveApiModelFile = (schemaName: string) => {
	const oldPath = `${PATHS.APIS}/${schemaName}/api.ts`;
	const newPath = `${PATHS.APIS}/models/${schemaName}.ts`;
	fs.renameSync(oldPath, newPath);
};

const deleteGeneratedDirectory = (schemaName: string) => {
	const oldPath = `${PATHS.APIS}/${schemaName}`;
	fs.rmSync(oldPath, { recursive: true, force: true, maxRetries: 3 });
};

const copyCommonFiles = (schemaName: string) => {
	commonApiFiles.forEach((file) => {
		const oldPath = `${PATHS.APIS}/${schemaName}/${file}`;
		const newPath = `${PATHS.APIS}/models/${file}`;
		fs.renameSync(oldPath, newPath);
	});
};

const processSingleSchema = (schemaFileName: string, index: number) => {
	const schemaName = path.parse(schemaFileName).name;
	execOpenApiGenerator(schemaFileName);

	// copy common files
	if (index === 0) {
		copyCommonFiles(schemaName);
	}

	// move
	moveApiModelFile(schemaName);

	//delete generated directories
	deleteGeneratedDirectory(schemaName);
};

const processSchemas = () => {
	const schemaFileNames = fs.readdirSync(PATHS.SCHEMAS);

	schemaFileNames.map(processSingleSchema);
	const result: string[] = [];
	const schemaNames = SCHEMAS.reduce((acc, current) => {
		acc.push(current.name);
		return acc;
	}, result);
};

export { processSchemas };
