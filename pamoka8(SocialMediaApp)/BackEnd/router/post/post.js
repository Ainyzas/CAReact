import express from 'express';
import { createNewPost, deletePostById } from '../../controllers/posts/index.js';
const router = express.Router();

router.post('/post', createNewPost);
router.delete('/post/:id', deletePostById);

export default router;
