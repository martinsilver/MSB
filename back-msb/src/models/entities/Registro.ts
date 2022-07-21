import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('registro')
export class Registro {
  @PrimaryGeneratedColumn()
  id:number

  @Column({ type: 'text' })
  name:string

  @Column({ type: 'text' })
  email:string

  @Column({ type: 'text' })
  telefone:string

  @Column({ type: 'text' })
  mensagem:string

  @Column({ type: 'text' })
  arquivo:string

  @Column({ type: 'text' })
  ip:string

  @Column({ type: 'text' })
  data:string


}