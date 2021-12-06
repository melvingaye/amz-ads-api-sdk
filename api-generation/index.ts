import { downloadSchemas } from './schema-downloader';
import { processSchemas } from './model-generator';
import { generateAPIClients } from './client-generator';
import { ProfilesClient } from '../src/apis/clients';
//downloadSchemas();
//processSchemas();
generateAPIClients();
