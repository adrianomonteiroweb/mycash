import AccountModel from '../models/AccountModel';

export class AccountRepository {
  private readonly _accountModel = AccountModel;

  createAccountsRepository(account: any) {
    const accountCreated = this._accountModel.create(account);

    return accountCreated;
  }
}
