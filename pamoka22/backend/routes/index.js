import express from 'express';
import { register, login, addPermissions, writeStuff } from '../controllers/index.js';
import { validateJwt } from '../middleware/index.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/permissions/:id', addPermissions);
router.post('/writeStuff', validateJwt, writeStuff);

export default router;
