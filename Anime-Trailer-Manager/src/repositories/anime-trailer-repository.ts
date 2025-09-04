import fs from "fs";
import path from "path";
import { AnimeTrailerModel } from "../modules/anime-trailer-models"; 


const pathData = path.join(__dirname, "../repositories/anime-trailer.json");

export const repositoryAnimeTrailer = async (
    animeName?: string, 
    category?: string[]
): Promise<AnimeTrailerModel[]> => {

    const language = "utf-8";

    const data = fs.readFileSync( pathData, language);
    let jsonFile = JSON.parse(data);

    if(animeName){
        jsonFile = jsonFile.filter(
            (animetrailer: AnimeTrailerModel) => 
                animetrailer.animeName === animeName);
    }

    if (category && category.length > 0){
        jsonFile = jsonFile.filter(
            (animetrailer: AnimeTrailerModel) => 
            animetrailer.category.some(cat => category.includes(cat))
        );
    }

    return jsonFile
} 