import {request, Request, response, Response} from 'express';
import pool from '../database'

class Com_usuController{
    
    public async de_un_usu (req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const coment_ = await pool.query('SELECT * FROM comentarios WHERE id_usuario = ?',[id]);
            res.json(coment_);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }
}
const com_usuController = new Com_usuController();
export default com_usuController;