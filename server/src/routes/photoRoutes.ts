import {  Router } from 'express'
import photoController from '../controllers/photoController';
import multer from '../lib/multer';


let nameimage = multer.single('image');

class PhotoRoutes{
    public router: Router = Router();   
    
    constructor(){
        this.config();
    }
    config(): void{
        //this.router.get('/photo,)
        
        this.router.post('/', nameimage ,photoController.nimage);
    }

}
const photoRoutes = new PhotoRoutes();
export default photoRoutes.router;
