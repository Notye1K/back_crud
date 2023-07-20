import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import * as userSchemas from "../schemas/userSchemas.js";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post(
  "/users",
  validateSchemaMiddleware(userSchemas.userPostSchema),
  userController.createUser
);
userRouter.get("/users", userController.getUsers);

userRouter.get("/users/:id", userController.getUser);
userRouter.delete("/users/:id", userController.deleteUser);
userRouter.patch(
  "/users/:id",
  validateSchemaMiddleware(userSchemas.userPatchSchema),
  userController.updateUser
);

export default userRouter;
