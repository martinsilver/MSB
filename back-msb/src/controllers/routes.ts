import { Router } from 'express';
import multer from 'multer';
import { multerConfig } from './../models/config/multer';
import  Middleware  from './middleware';

const router = Router();

router.post('/api/upload', multer(multerConfig).single('file'), Middleware.upload);


export default router;

