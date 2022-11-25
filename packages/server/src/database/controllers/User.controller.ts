import { Request, Response } from 'express';
import { UserService } from '../services/User.Service';

export class UserController {
  private readonly _service = new UserService();

  async getAllUsersController(_req: Request, res: Response): Promise<Response> {
    const allUsers = await this._service.getAllUsersService();

    return res.status(200).json(allUsers);
  }

  async createUsersController(req: Request, res: Response): Promise<Response> {
    const userCreated = await this._service.createUsersService(req.body);

    return userCreated.dataValues
      ? res.status(201).json({ message: 'User created successfully.' })
      : res.status(400).json({
          message:
            'TUnable to create a user. Probable field with wrong or blank value.',
        });
  }
}
