import {request, Request, response, Response} from 'express';
import pool from '../database'
//import nameimage from '../routes/photoRoutes'
import multer from '../lib/multer';

class PhotoController{
    public async nimage(req: Request, res: Response): Promise<void>{
        try {
            const nameimage = multer.single('image');
            console.log(nameimage);
            res.json("nameimage");
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
    }

    

}
const photoController = new PhotoController();
export default photoController;