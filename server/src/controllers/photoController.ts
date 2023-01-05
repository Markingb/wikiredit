import {request, Request, response, Response} from 'express';
import pool from '../database'
//import nameimage from '../routes/photoRoutes'

class PhotoController{
    public async nimage(req: Request, res: Response): Promise<void>{
        try {
            res.json("nameimage");
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
    }

    

}
const photoController = new PhotoController();
export default photoController;