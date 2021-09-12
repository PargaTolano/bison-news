import { schema, host, port, basePath} from '_config/host.json';

export const apiURL = `${schema}://${host}:${port}/${basePath}`;