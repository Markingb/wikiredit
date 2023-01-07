import {request, Request, response, Response} from 'express';
import pool from '../database'

class LikesController{
    public async likke (req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            console.log(id);
            await pool.query('INSERT INTO likes (id_post) VALUES (?)', [id]); 
            res.json("Has dado like a la publicacion");
            
            
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }
}

const likesController = new LikesController();
export default likesController;