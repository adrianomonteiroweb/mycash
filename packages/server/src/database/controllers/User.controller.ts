import { Request, Response } from 'express';

import {
  CREATED,
  INTERNAL_SERVER_ERROR,
} from '../../utils/functions/httpStatusFunction';
import messageErros from '../../utils/messageErros';
import { UserService } from '../services/User.Service';

export class UserController {
  private readonly _service = new UserService();

  async getAllUsersController(_req: Request, res: Response): Promise<Response> {
    const allUsers = await this._service.getAllUsersService();

    return res.status(200).json(allUsers);
  }

  async createUsersController(req: Request, res: Response): Promise<Response> {
    let userCreated: any;

    try {
      userCreated = await this._service.createUsersService(req.body);
    } catch (error: any) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: messageErros.internalServerError });
    }
    console.log(userCreated);

    return userCreated !== undefined && !userCreated.status
      ? res.status(CREATED).json({ message: 'User created successfully.' })
      : res.status(userCreated.status).json({
          message: userCreated.message,
        });
  }
}
