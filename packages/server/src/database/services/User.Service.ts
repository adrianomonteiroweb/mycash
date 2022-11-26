import checkSchema from '../../utils/functions/checkSchema';
import { userSchema } from '../../utils/joiSchemas';
import { ICreateUser } from '../interfaces';
import { UseRepository } from './../repositories/User.repository';
import { AccountService } from './Account.service';

const { v4 } = require('uuid');

export class UserService {
  private readonly _useRepository = new UseRepository();
  private readonly _accountService = new AccountService();

  async getAllUsersService() {
    const allUsers = await this._useRepository.getAllUsersRepository();

    return allUsers;
  }

  async createUsersService(user: ICreateUser) {
    if (checkSchema(user, userSchema)) return checkSchema(user, userSchema);

    const accountCreated = await this._accountService.createUsersService();

    const userCreated = await this._useRepository.createUsersRepository({
      ...user,
      id: v4(),
      accountId: accountCreated.dataValues.id,
    });

    return userCreated;
  }
}
