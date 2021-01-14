import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ProfileController from "../controllers/ProfileController";

import authMiddleware from "../middlewares/auth";

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(authMiddleware);

profileRouter.get("/", profileController.show);
profileRouter.get("/adm/:user_id", profileController.showAdm);

profileRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref("password")),
    },
  }),
  profileController.update,
);

profileRouter.put(
  "/adm/:user_id",
  
  profileController.updateAdm,
);

profileRouter.get("/all", profileController.index);

profileRouter.delete("/:id_delete", profileController.delete);

export default profileRouter;
