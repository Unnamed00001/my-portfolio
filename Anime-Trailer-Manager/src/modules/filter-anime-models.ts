import { AnimeTrailerModel } from "./anime-trailer-models";

export interface FilterAnimeTrailerModel{
    statusCode: number;
    body: AnimeTrailerModel[];
}