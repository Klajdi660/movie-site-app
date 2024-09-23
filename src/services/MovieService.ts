import { HttpClient } from "../client/http-client";
import { api_key } from "../configs/general.config";
import { MovieListResp } from "../types/general.type";

export const useMovieService = () => {
    const getMovieList = async (search: string) => {
        try {
            const url = `/?apikey=${api_key}&s=${search}`;
            const movieListResp = await HttpClient.get<MovieListResp>(url);
            return movieListResp;
        } catch (error) {
            console.error(`Login failed: ${error}`);
            throw error;
        }
    }

    return {
        getMovieList
    };
};