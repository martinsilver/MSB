import { NextFunction, Request, Response } from 'express';
import service from '../services';
import { IBodyData } from '../Interface'

const upload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ip = req.ip;

    if (req.file === undefined) new Error('file undefined')

    const { path } = req.file as Express.Multer.File;
    console.log(req.body);
    
    const { email, name, mensagem, telefone }:IBodyData = req.body;
   
    const data = Date()

    await service.upload({name, email, telefone, mensagem, arquivo:path, ip, data })
    
    res.status(201).json('ok');
  } catch (error) {
    res.status(500).end('');
    //criar conta de gerenciamento de erro com joi
  }
};


const Middleware = {
  upload,
};

export default Middleware;
