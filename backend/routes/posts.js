import express from "express";

import auth from "../middleware/auth.js";
import { getPosts, createPost, updatePost, deletePost, supportPost } from "../controllers/postsControl.js";


const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, supportPost)


export default router;