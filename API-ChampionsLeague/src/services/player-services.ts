import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRespostory from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRespostory.findAllPlayers();
    let response = null; 

    if (data) {
        response = await ok(data);
    } else{
        response = await noContent();
    }
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    //pedir pro repositorio de dados
    const data = await PlayerRespostory.findPlayerById(id);
    let response = null;

    if (data){
        response = await ok(data);
    } else{
        response = await noContent();
    }

    return response;

};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    //verifica se ta vaziu
    if (Object.keys(player).length !== 0 ) {
        await PlayerRespostory.insertPlayer(player);
        response = created()

    } else {
        response = badRequest()
      
    }

     return response;

};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRespostory.deleteOnePlayer(id);
    
    if (isDeleted){
        response = await ok({message: "deleted"})
    }else{
        response = await badRequest()
    }

    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRespostory.findAndModifyPlayer(id,statistics);
    let response = null

    if(Object.keys(data).length === 0){

        response = await badRequest();
    }else{
        response = await ok(data);
    }
    
    return response
};