import {  Router } from 'express'
import categoriaController from '../controllers/categoriaController'

class CategoriaRouter{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.post('/', categoriaController.busqueda_de_categorias);
    }
}
const categoriaRouter = new CategoriaRouter();
export default categoriaRouter.router;