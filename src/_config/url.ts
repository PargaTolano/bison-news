import { schema, host, port, basePath} from '_config/host.json';

export const url = `${schema}://${host}:${port}/${basePath}`;