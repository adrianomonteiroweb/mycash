import { UseRepository } from './../repositories/User.repository';

export class UserService {
  private readonly _useRepository = new UseRepository();

  async getAllUsersService() {
    const allUsers = await this._useRepository.getAllUsersRepository();

    return allUsers;
  }
}
