import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import User from "@modules/users/infra/typeorm/entities/User";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IRequest {
  user_id: string;
  id_delete: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,

    @inject("CacheProvider")
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id, id_delete }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if(user && user.acesso === '1') {

        const userDelete = await this.usersRepository.findById(id_delete);

        this.usersRepository.deleteUsers(userDelete);
    }
  
}
}

export default DeleteUserService;