import express, { query, Router } from "express"
import { CreatePost } from "../resolver/post-resolver.js";
const router = express.Router();
// router.get('/',(request,response)=>{
//          response.send('hello world')
//     })
router.post("/create",CreatePost);
router.get('/posts',getAllPosts)
router.get('/posts:id',getPost)
router.post("/update/:id",updatePost)
export default router;
// ?->query
// :->params