import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import UpdateProfileService from "@modules/users/services/UpdateProfileService";
import ShowProfileService from "@modules/users/services/ShowProfileService";
import ListUsersService from "@modules/users/services/ListUsersService";
import DeleteUserService from "@modules/users/services/DeleteUserService";

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    
    const user_id = request.user.id;

    const showProfileService = container.resolve(ShowProfileService);

    const user = await showProfileService.execute({ user_id });

    return response.json(classToClass(user));
  }

  public async showAdm(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const showProfileService = container.resolve(ShowProfileService);

    const user = await showProfileService.execute({ user_id });

    return response.json(classToClass(user));
  }
  
  public async update(request: Request, response: Response): Promise<Response> {
    const id_user = request.user.id;
    console.log(id_user);

    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    const updateUser = container.resolve(UpdateProfileService);

    const user = await updateUser.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    return response.json(classToClass(user));
  }

  public async updateAdm(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const { name, email, old_password, password } = request.body;

    const updateUser = container.resolve(UpdateProfileService);

    const user = await updateUser.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    return response.json(classToClass(user));
  }

  public async index(request: Request, response: Response): Promise<Response> {

    const { user_id } = request.params;

    const listUsersService = container.resolve(
      ListUsersService,
    );

    const users = await listUsersService.execute({
      user_id,
    });

    return response.json(classToClass(users));
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const user_id = request.user.id;

    const { id_delete } = request.params;

    console.log(id_delete);
   
    const deleteUserService = container.resolve(
      DeleteUserService,
    );

    const users = await deleteUserService.execute({
      user_id,
      id_delete,
    });

    return response.json({message: 'ok'});
  }  
}
