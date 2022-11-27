import checkSchema from '../../utils/functions/checkSchema';
import {
  BAD_REQUEST,
  NOT_IMPLEMENTED,
} from '../../utils/functions/httpStatusFunction';
import responseConstructor from '../../utils/functions/responseConstructor';
import { userSchema } from '../../utils/joiSchemas';
import { ICreateUser } from '../interfaces';
import { UserRepository } from './../repositories/User.repository';
import { AccountService } from './Account.service';

const { v4 } = require('uuid');

export class UserService {
  private readonly _userRepository = new UserRepository();
  private readonly _accountService = new AccountService();

  async getAllUsersService() {
    const allUsers = await this._userRepository.getAllUsersRepository();

    return allUsers;
  }

  async checksUsernameExists(username: string) {
    const userExists = await this._userRepository.getUserByUsername(username);

    return userExists?.dataValues ? true : false;
  }

  async createUsersService(user: ICreateUser) {
    if (await this.checksUsernameExists(user.username))
      return responseConstructor(
        BAD_REQUEST,
        'The username used already exists.'
      );

    if (checkSchema(user, userSchema)) return checkSchema(user, userSchema);

    const userCreated = await this._userRepository.createUsersRepository({
      ...user,
      id: v4(),
      accountId: v4(),
    });

    if (userCreated.dataValues.accountId) {
      const accountCreated = await this._accountService.createUsersService(
        userCreated.dataValues.accountId
      );

      return accountCreated.dataValues.id
        ? userCreated
        : responseConstructor(
            NOT_IMPLEMENTED,
            'For some reason the user account was not created.'
          );
    } else {
      return responseConstructor(
        NOT_IMPLEMENTED,
        'For some reason the user was not created.'
      );
    }
  }
}
