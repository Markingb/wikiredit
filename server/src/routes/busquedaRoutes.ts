import {  Router } from 'express'
import busquedaController from '../controllers/busquedaController'

class BusquedaRouter{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.post('/', busquedaController.barradebusqueda);
    }
}
const busquedaRouter = new BusquedaRouter();
export default busquedaRouter.router;