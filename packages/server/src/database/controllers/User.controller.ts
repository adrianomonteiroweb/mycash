import { Request, Response } from 'express';
import { UserService } from '../services/User.Service';

export class UserController {
  private readonly _service = new UserService();

  async getAllUsersController(_req: Request, res: Response): Promise<Response> {
    const allUsers = await this._service.getAllUsersService();

    return res.status(200).json(allUsers);
  }
}
