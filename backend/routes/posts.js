import express from "express";

import auth from "../middleware/auth.js";
import { getPosts, getSearchedPosts, createPost, updatePost, deletePost, supportPost, getPost } from "../controllers/postsControl.js";


const router = express.Router()

router.get('/search', getSearchedPosts)
router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, supportPost)


export default router;