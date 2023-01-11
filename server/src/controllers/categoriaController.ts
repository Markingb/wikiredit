import {request, Request, response, Response} from 'express';
import pool from '../database'

class CategoriaController{
    public async busqueda_de_categorias (req: Request, res: Response): Promise<void>{
        try {
            const { cuerpo } = req.body;
            //console.log(cuerpo);
            //console.log(req.body);
            const resultadobusq = await pool.query('select * from posts Where match(categoria) against (?)', [cuerpo]); 
            //= (?),[busq]);
            res.json(resultadobusq);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }
}
const categoriaController = new CategoriaController();
export default categoriaController;