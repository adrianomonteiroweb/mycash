import AccountModel from '../models/AccountModel';

export class AccountRepository {
  private readonly _accountModel = AccountModel;

  async createAccountsRepository(account: any) {
    const accountCreated = await this._accountModel.create(account);

    return accountCreated;
  }
}
