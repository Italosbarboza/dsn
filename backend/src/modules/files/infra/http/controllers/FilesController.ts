import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateUserAvatarService from "@modules/files/services/UpdateUserAvatarService";
import IndexFilesService from "@modules/files/services/IndexFilesService";
import DeleteFileService from "@modules/files/services/DeleteFileService";
import UpdateFileAvatarService from "@modules/files/services/UpdateFileAvatarService";

export default class FilesController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const cod_user: number = Number(request.user.id);

    const file = await updateUserAvatar.execute({
      cod_user,
      avatar_filename: request.file.filename,
    });

    return response.json(file);
  }

  public async updateFile(request: Request, response: Response): Promise<Response> {
    const updateFileAvatar = container.resolve(UpdateFileAvatarService);

    const cod_user: number = Number(request.user.id);

    const file = await updateFileAvatar.execute({
      cod_user,
    });

    return response.json(file);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const cod_user: number = Number(request.user.id);

    const indexFiles = container.resolve(IndexFilesService);

    const files = await indexFiles.execute({
      cod_user,
    });

    return response.json(files);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id_arquivo } = request.params;

    const deleteFile = container.resolve(DeleteFileService);

    const files = await deleteFile.execute({
      id_arquivo,
    });

    return response.json({message: 'ok'});
  }
}
