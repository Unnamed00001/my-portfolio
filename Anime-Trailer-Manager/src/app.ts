import * as http from "http"
import {getFilterTrailer, getListTrailer} from './controllers/anime-trailer-controller'
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];

    //listar podcasts
    if(request.method === httpMethod.GET && baseUrl === Routes.LIST){
        await getListTrailer(request, response);
    }

    if(request.method === httpMethod.GET && baseUrl === Routes.TRAILER){
        await getFilterTrailer(request, response);
    }
}
