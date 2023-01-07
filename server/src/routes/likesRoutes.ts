import {  Router } from 'express'
import likesController from '../controllers/likesController'

class LikesRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() {
        this.router.post('/:id', likesController.likke)
    }
}
const likesRoutes = new LikesRoutes();
export default likesRoutes.router;