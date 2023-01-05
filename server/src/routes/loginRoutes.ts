import {  Router } from 'express'
import loginController from '../controllers/loginController'

class LoginRoutes{
    public router: Router = Router();   

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/:id', loginController.loginn);
    }
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;