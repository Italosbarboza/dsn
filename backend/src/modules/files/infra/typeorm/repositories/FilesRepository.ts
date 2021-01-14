import { getRepository, Repository, Not } from "typeorm";

import IFilesRepository from "@modules/files/repositories/IFilesRepository";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IFindAllProvidersDTO from "@modules/users/dtos/IFindAllProvidersDTO";

import Files from "../entities/Files";

class FilesRepository implements IFilesRepository {
  private ormRepository: Repository<Files>;

  constructor() {
    this.ormRepository = getRepository(Files);
  }
  /*
  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  } 
  */

  public async create(cod_user: number, nome_arquivo: string): Promise<void> {

    const file = this.ormRepository.create({
        cod_user,
        nome_arquivo
    });
    console.log(file);
    const files = await this.ormRepository.save(file);
  }
/*
  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findAllUsers(): Promise<User[] | null> {
    return this.ormRepository.find();
  }

  public async  deleteUsers(userDelete: User): Promise<void> {
    return this.ormRepository.remove(userDelete);
  }
*/
public async index(cod_user: number): Promise<Files[]> {
    const file = this.ormRepository.find({
        where: String(cod_user),
    });
    return file;
  }

public async show(id_arquivo: string): Promise<Files | undefined> {
 
  const file = await this.ormRepository.findOne(id_arquivo);
 
  return file;
}

public async delete(id_arquivo: string): Promise<void> {
  const file = await this.show(id_arquivo);
  if(file) {
    await this.ormRepository.remove(file);
  }
}



}

export default FilesRepository;