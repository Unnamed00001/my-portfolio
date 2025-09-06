import { ok } from "../utils/http-helper";
import { findAllClubs } from "../repositories/clubs-repositorys";

export const getClubsService = async () =>{
    const data = await findAllClubs()
    const response = ok(data);

    return response
}