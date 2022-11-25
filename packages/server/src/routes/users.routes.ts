import express from 'express';

import { UserController } from '../database/controllers/User.controller';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/users', (req, res) =>
  userController.createUsersController(req, res)
);

userRouter.get('/users', (req, res) =>
  userController.getAllUsersController(req, res)
);

userRouter.get('/user/:id');

userRouter.put('/user/:id');

userRouter.delete('/user/:id');

export default userRouter;
