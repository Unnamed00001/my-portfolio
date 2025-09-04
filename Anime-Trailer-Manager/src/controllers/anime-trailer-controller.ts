import { IncomingMessage, ServerResponse } from "http";
import { serviceListAnimeTrailer as serviceListTrailer } from "../services/list-anime-trailer-service";
import { serviceFilterAnimeTrailer as serviceFilterTrailer } from "../services/filter-anime-trailer-service";
import { ContentType } from "../utils/content-type";
import { FilterAnimeTrailerModel } from "../modules/filter-anime-models";

export const getListTrailer = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterAnimeTrailerModel = await serviceListTrailer();
    
    response.writeHead(content.statusCode,{"content-type": ContentType.JSON });
    response.write(JSON.stringify(content.body))
    response.end();

};

export const getFilterTrailer = async (request: IncomingMessage, response: ServerResponse) =>{
   
    const content: FilterAnimeTrailerModel = await serviceFilterTrailer(request.url);

    response.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body))
    response.end();
}