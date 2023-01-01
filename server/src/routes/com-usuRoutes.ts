import {  Router } from 'express'
import com_usuController from '../controllers/com-usuController';

class Com_usuRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id',com_usuController.de_un_usu);
    }
}
const com_usuRoutes = new Com_usuRoutes();
export default com_usuRoutes.router;