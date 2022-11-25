import { AccountRepository } from '../repositories/Account.repository';

const { v4 } = require('uuid');

export class AccountService {
  private readonly _accountRepository = new AccountRepository();

  async createUsersService() {
    const accountCreated =
      await this._accountRepository.createAccountsRepository({
        id: v4(),
        balance: 100,
      });

    return accountCreated;
  }
}
