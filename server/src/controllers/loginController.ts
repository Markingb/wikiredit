import {request, Request, response, Response} from 'express';
import pool from '../database'

class LoginController{
    public async loginn(req: Request, res: Response): Promise<void>{
        try {
            const {id} = req.params;
            const dlogin = await pool.query('SELECT id_usuarios, contrasena FROM usuarios WHERE nick_name = ?', [id] );
            res.json(dlogin);
            console.log(dlogin);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
    }
}
const loginController = new LoginController();
export default loginController;