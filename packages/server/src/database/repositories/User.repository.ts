import UserModel from '../models/UserModel';

export class UseRepository {
  private readonly _userModel = UserModel;

  getAllUsersRepository() {
    const allUsers = this._userModel.findAll();

    return allUsers;
  }
}
