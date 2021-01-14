import { injectable, inject } from "tsyringe";

import Files from "@modules/files/infra/typeorm/entities/Files";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import IFilesRepository from "../repositories/IFilesRepository";

interface IRequest {
  cod_user: number;
  avatar_filename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject("FilesRepository")
    private filesRepository: IFilesRepository,

    @inject("S3StorageProvider")
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ cod_user, avatar_filename }: IRequest): Promise<void> {
    /*
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }
*/

    const filename: string = await this.storageProvider.saveFile(avatar_filename);

    const nome_arquivo = avatar_filename;

    const file = await this.filesRepository.create(cod_user, nome_arquivo);

  }
}

export default UpdateUserAvatarService;
