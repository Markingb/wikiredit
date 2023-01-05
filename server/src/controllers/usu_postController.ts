import {request, Request, response, Response} from 'express';
import pool from '../database'

class Usu_postController{
    public async todossuspost (req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const coment_ = await pool.query('SELECT * FROM posts WHERE id_usuario = ?',[id]);
            res.json(coment_);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }
}
const usu_postController = new Usu_postController();
export default usu_postController;