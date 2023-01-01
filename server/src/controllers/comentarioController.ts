import {request, Request, response, Response} from 'express';
import pool from '../database'

class ComentarioController{
    


    public async de_un_post (req: Request, res: Response): Promise<void>{
        /*try {
            
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }*/
        try {
            const { id } = req.params;
            const coment_ = await pool.query('SELECT * FROM comentarios WHERE id_post = ?',[id]);
            res.json(coment_);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }


    public async create (req: Request, res: Response): Promise<void>{
        try {
            await pool.query('INSERT INTO comentarios set ?',[req.body]);
            res.json({text: 'Se ha creado el comentario con exito'});
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE comentarios set ? WHERE idcomentario = ?',[req.body,id]);
        res.json({text: "Se ha actualizado el comentario"});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM comentarios WHERE idcomentario = ?', [id]);
        res.json({text: 'Comentario eliminado'});
    }
}
const comentarioController = new ComentarioController();
export default comentarioController;