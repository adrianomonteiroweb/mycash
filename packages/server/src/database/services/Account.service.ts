import { AccountRepository } from '../repositories/Account.repository';

export class AccountService {
  private readonly _accountRepository = new AccountRepository();

  async createUsersService(accountId: string) {
    const accountCreated =
      await this._accountRepository.createAccountsRepository({
        id: accountId,
        balance: 100,
      });

    return accountCreated;
  }
}
