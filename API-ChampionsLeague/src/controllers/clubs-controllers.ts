import { Request, response, Response } from "express"
import { getClubsService } from "../services/clubs-services";


export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubsService()
    res.status(response.statusCode).json(response.body)
};