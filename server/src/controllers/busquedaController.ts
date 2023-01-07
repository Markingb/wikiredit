import {request, Request, response, Response} from 'express';
import pool from '../database'

class BusquedaController{
    public async barradebusqueda (req: Request, res: Response): Promise<void>{
        try {
            const { cuerpo } = req.body;
            //console.log(cuerpo);
            //console.log(req.body);
            const resultadobusq = await pool.query('select * from posts Where match(titulo, descripcion, etiquetas) against (?)', [cuerpo]); 
            //= (?),[busq]);
            res.json(resultadobusq);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }
}
const busquedaController = new BusquedaController();
export default busquedaController;