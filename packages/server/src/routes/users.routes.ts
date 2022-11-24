import express from 'express';

const userRouter = express.Router();

userRouter.post('/users');

userRouter.get('/users');

userRouter.get('/user/:id');

userRouter.put('/user/:id');

userRouter.delete('/user/:id');

export default userRouter;
