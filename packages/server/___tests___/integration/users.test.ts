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

describe('Database update.', () => {
  shell.exec('yarn db:drop');
  shell.exec('yarn db:create && yarn db:migrate');
});

describe('Users tests.', () => {
  it('When creating the database, it should not contain any data.', async () => {
    const result = await frisby.get(`${url}/users`).expect('status', 200);

    expect(JSON.parse(result._body)).toHaveLength(0);
  });

  it('It must be possible to create a new user.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[0])
      .expect('status', 201);

    expect(JSON.parse(result._body)).toEqual({
      message: 'User created successfully.',
    });
  });

  it('When inserting 1 user, it must contain 1 referring record.', async () => {
    const result = await frisby.get(`${url}/users`).expect('status', 200);
    console.log(result._body);

    expect(JSON.parse(result._body)).toHaveLength(1);
    expect(JSON.parse(result._body)[0].username).toEqual(data[0].username);
  });
});
