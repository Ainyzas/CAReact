import express from 'express';
import { createNewPost, deletePostById, getAllPosts } from '../../controllers/posts/index.js';
const router = express.Router();

router.post('/post', createNewPost);

router.delete('/post/:id', deletePostById);

router.get('/post/:id', getAllPosts);

export default router;
