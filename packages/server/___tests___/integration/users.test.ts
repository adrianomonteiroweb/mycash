const frisby = require('frisby');
const path = require('path');
const shell = require('shelljs');

require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const data = require('../data/data.js');

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

const url =
  process.env.NODE_ENV === 'test'
    ? `http://${HOST}:${PORT}`
    : process.env.DEPLOY_URL;

describe('Users tests erros.', () => {
  it('1/4 - It should not be possible to create a user with a username shorter than 3 characters.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[1])
      .expect('status', 400);

    expect(JSON.parse(result._body)).toEqual({
      message:
        'Error: username must be at least 3 characters, while password: minimum 8 characters, a number and a capital letter.',
    });
  });

  it('2/4 - It should not be possible to create a user with a password shorter than 8 characters.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[2])
      .expect('status', 400);

    expect(JSON.parse(result._body)).toEqual({
      message:
        'Error: username must be at least 3 characters, while password: minimum 8 characters, a number and a capital letter.',
    });
  });

  it('3/4 - It should not be possible to create a user with a password without at least one number.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[3])
      .expect('status', 400);

    expect(JSON.parse(result._body)).toEqual({
      message:
        'Error: username must be at least 3 characters, while password: minimum 8 characters, a number and a capital letter.',
    });
  });

  it('4/4 - It should not be possible to create a user with a password without at least one capital letter.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[4])
      .expect('status', 400);

    expect(JSON.parse(result._body)).toEqual({
      message:
        'Error: username must be at least 3 characters, while password: minimum 8 characters, a number and a capital letter.',
    });
  });
});

describe('Database update.', () => {
  it('1/1 - Drop, create and table generate.', async () => {
    shell.exec('yarn db:drop');
    shell.exec('yarn db:create && yarn db:migrate');
  });
});

describe('Users tests.', () => {
  it('1/3 - When creating the database, it should not contain any data.', async () => {
    const result = await frisby.get(`${url}/users`).expect('status', 200);

    expect(JSON.parse(result._body)).toHaveLength(0);
  });

  it('2/3 - It must be possible to create a new user.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[0])
      .expect('status', 201);

    expect(JSON.parse(result._body)).toEqual({
      message: 'User created successfully.',
    });
  });

  it('3/3 - When inserting 1 user, it must contain 1 referring record.', async () => {
    const result = await frisby.get(`${url}/users`).expect('status', 200);
    console.log(result._body);

    expect(JSON.parse(result._body)).toHaveLength(1);
    expect(JSON.parse(result._body)[0].username).toEqual(data[0].username);
  });
});
