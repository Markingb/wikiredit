import {request, Request, response, Response} from 'express';
import pool from '../database'

class PostController {
    public async lista (req: Request,res: Response): Promise<void> {
        try {
            const posts = await pool.query('SELECT * FROM posts');
            res.json(posts);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

    public async un_post (req: Request,res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const posts_ = await pool.query('SELECT * FROM posts WHERE id_post = ?', [id]);
            console.log(posts_);
            res.json(posts_);
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

    public async create(req: Request, res: Response): Promise<void>{
        try {
            await pool.query('INSERT INTO posts set ?', [req.body])
            res.json({text: 'Se ha creado el postt'});
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

    public async delete(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM posts WHERE id_post = ?', [id]);
            res.json({text: 'Post eliminado'});
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

    public async put(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            await pool.query('UPDATE posts set ? WHERE id_post = ?', [req.body,id]);
            res.json({text: 'Post actualizado ' + req.params.id});
        } catch (e: any) {
            res.json({text: e.name + e.message});
        }
        
    }

}
const postController = new PostController();
export default postController;