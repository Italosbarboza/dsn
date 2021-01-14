import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import User from "@modules/users/infra/typeorm/entities/User";
  
  @Entity("files", { database: "sabm" })
  class File {
    @PrimaryGeneratedColumn("increment")
    id_arquivo: number;
  
    @Column("int")
    cod_user: number;
  
    @Column("varchar")
    nome_arquivo: string;
  /*
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  */
  
    @ManyToOne(() => User)
    @JoinColumn({ name: "cod_user" })
    user: User;
}
  
  export default File;
  