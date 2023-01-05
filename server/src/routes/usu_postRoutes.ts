import {  Router } from 'express'
import usu_postController from '../controllers/usu_postController'


class Usu_postRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/:id', usu_postController.todossuspost);
    }
}
const usu_postRoutes = new Usu_postRoutes();
export default usu_postRoutes.router;
