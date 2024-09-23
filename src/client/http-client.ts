import axios from "axios";
import { omdb_url } from "../configs/general.config";
  
const instance = axios.create({
    baseURL: omdb_url,
    headers: {
        "Content-Type": "application/json",
    },
});

export class HttpClient {
static instance = instance;

static async get<T>(url: string, params?: unknown, options?: any) {
    console.log(url)
    const response = await this.instance.get<T>(url, { params });
    return response.data;
}
}
  