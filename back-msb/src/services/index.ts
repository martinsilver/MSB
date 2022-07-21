import { AppDataSource } from "../data-source";
import { Registro } from "../models/entities/Registro";
import { IRegistro } from '../Interface'


export const registroRepository = AppDataSource.getRepository(Registro);


const upload = async (registro: IRegistro) => {
  const newRegister = registroRepository.create({...registro});

  await registroRepository.save(newRegister);

  return newRegister;
};

const service = {
  upload,
};

export default service;
