export interface ICreateUser {
  username: string;
  password: string;
}

export interface IUserCreated {
  id: string;
  username: string;
  password: string;
  accountId: string;
}

export interface IAccount {
  id: string;
  balance: number;
}
