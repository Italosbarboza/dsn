import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user_tokens", {database: 'sabm'})
class UserToken {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  @Generated("uuid")
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserToken;
