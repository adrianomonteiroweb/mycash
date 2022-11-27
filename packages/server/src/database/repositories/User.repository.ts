import UserModel from '../models/UserModel';

export class UserRepository {
  private readonly _userModel = UserModel;

  async getAllUsersRepository() {
    const allUsers = await this._userModel.findAll();

    return allUsers;
  }

  async getUserByUsername(username: string) {
    const userByUsername = await this._userModel.findOne({
      where: { username },
    });

    return userByUsername;
  }

  async createUsersRepository(user: any) {
    const userCreated = await this._userModel.create(user);

    return userCreated;
  }
}
