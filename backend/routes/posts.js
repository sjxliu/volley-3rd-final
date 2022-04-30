import express from "express";

import { getPosts, createPost, updatePost, deletePost, supportPost } from "../controllers/postsControl.js";


const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', supportPost)


export default router;