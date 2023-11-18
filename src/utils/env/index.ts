// import pkg from '../../../package.json';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

/**
 * @description: Development mode
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
    return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
    return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
    return import.meta.env.PROD;
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
    return path.resolve(process.cwd(), ...dir);
}

/**
 *  @description: Read all environment variable configuration files to process.env
 * */
export function wrapperEnv(envConf: Recordable): ViteEnv {
    const ret: any = {};

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, '\n');
        realName = realName === 'true' ? true : realName === 'false' ? false : realName;

        if (envName === 'VITE_PORT') {
            realName = Number(realName);
        }
        if (envName === 'VITE_PROXY') {
            try {
                realName = JSON.parse(realName);
            } catch (error) {
                console.log(error);
            }
        }
        ret[envName] = realName;
        process.env[envName] = realName;
    }
    return ret;
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
export function getEnvConfig(match = 'VITE_GLOB_', confFiles = ['.env', '.env.production']) {
    let envConfig = {};
    confFiles.forEach((item) => {
        try {
            const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
            envConfig = { ...envConfig, ...env };
        } catch (error) {
            console.error(`Error in parsing ${item}`, error);
        }
    });

    Object.keys(envConfig).forEach((key) => {
        const reg = new RegExp(`^(${match})`);
        if (!reg.test(key)) {
            Reflect.deleteProperty(envConfig, key);
        }
    });
    return envConfig;
}
