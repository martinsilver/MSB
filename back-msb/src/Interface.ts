export interface IBodyData {
  email:string,
  name:string,
  mensagem:string,
  telefone:string,
}

export interface IRegistro extends IBodyData {
  arquivo:string,
  ip:string,
  data:string,
}