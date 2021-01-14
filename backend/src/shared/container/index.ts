import { container } from "tsyringe";

import "@modules/users/providers";
import "./providers";

import IAppointmentsRepository from "@modules/appointments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "@modules/appointments/infra/typeorm/repositories/AppointmentsRepository";

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import IUsersTokensRepository from "@modules/users/repositories/IUserTokensRepository";
import UsersTokensRepository from "@modules/users/infra/typeorm/repositories/UserTokensRepository";

import INotificationsRepository from "@modules/notifications/repositories/INotificationsRepository";
import NotificationsRepository from "@modules/notifications/infra/typeorm/repositories/NotificationsRepository";

import IFilesRepository from "@modules/files/repositories/IFilesRepository";
import FilesRepository from "@modules/files/infra/typeorm/repositories/FilesRepository";

container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  "UserTokensRepository",
  UsersTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  "NotificationsRepository",
  NotificationsRepository,
);

container.registerSingleton<IFilesRepository>(
  "FilesRepository",
  FilesRepository,
);