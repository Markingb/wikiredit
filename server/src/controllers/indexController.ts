import {Request, Response} from 'express';

class IndexController {
    public index (req: Request,res: Response) {
        res.send('Hola, Bienvenue to Index')
    }
}
export const indexController = new IndexController();