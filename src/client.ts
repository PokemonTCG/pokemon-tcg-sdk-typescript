import * as axios from 'axios';
import { Parameter } from './interfaces/parameter';

export class Client {
    private readonly POKEMONTCG_API_BASE_URL: string =
        'https://api.pokemontcg.io';
    private readonly POKEMONTCG_API_VERSION: string = '2';
    private readonly POKEMONTCG_API_URL: string = `${this.POKEMONTCG_API_BASE_URL}/v${this.POKEMONTCG_API_VERSION}`;
    private readonly POKEMONTCG_API_KEY?: string =
        process.env.POKEMONTCG_API_KEY;

    private static instance: Client;

    private constructor() {}

    public static getInstance(): Client {
        if (!Client.instance) {
            Client.instance = new Client();
        }

        return Client.instance;
    }

    async get<T>(resource: string, params?: Parameter | string): Promise<T> {
        let url = `${this.POKEMONTCG_API_URL}/${resource}`;
        const headers = {
            'Content-Type': 'application/json',
        };

        if (this.POKEMONTCG_API_KEY) {
            headers['X-Api-Key'] = this.POKEMONTCG_API_KEY;
        }

        const config: axios.AxiosRequestConfig = {
            headers,
        };

        if (typeof params === 'string') {
            url += `/${params}`;
        } else if (params) {
            url += `?${this.stringify(params)}`;
        }

        return axios.default
            .get<T>(url, config)
            .then((response) => {
                return response.data[Object.keys(response.data)[0]];
            })
            .catch((error) => Promise.reject(error));
    }

    private stringify(params: Parameter): string {
        const queryString = Object.keys(params)
            .map(
                (key: string) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        params[key]
                    )}`
            )
            .join('&');

        return queryString;
    }
}
