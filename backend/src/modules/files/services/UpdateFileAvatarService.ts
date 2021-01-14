import { injectable, inject } from "tsyringe";

import Files from "@modules/files/infra/typeorm/entities/Files";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import IFilesRepository from "../repositories/IFilesRepository";

interface IRequest {
    id_arquivo: string;
}

@injectable()
class UpdateFileAvatarService
 {
  constructor(
    @inject("FilesRepository")
    private filesRepository: IFilesRepository,

    @inject("S3StorageProvider")
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ id_arquivo }: IRequest): Promise<void> {
    /*
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }
*/

    const file = await this.filesRepository.showFile(id_arquivo);

  }
}

export default UpdateFileAvatarService;
