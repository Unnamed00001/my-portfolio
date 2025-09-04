import { FilterAnimeTrailerModel } from "../modules/filter-anime-models";
import { repositoryAnimeTrailer } from "../repositories/anime-trailer-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListAnimeTrailer = async (): Promise<FilterAnimeTrailerModel> =>{
    let responseFormat: FilterAnimeTrailerModel = {
            statusCode: 0,
            body: [],
        }
    const data = await repositoryAnimeTrailer();
    
    if (data.length !== 0 ){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NoContent;
    }
    responseFormat.body = data;
    return responseFormat;
}