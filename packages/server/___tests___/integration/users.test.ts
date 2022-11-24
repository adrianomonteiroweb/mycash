const frisby = require('frisby');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const data = require('../data/data.js');

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

const url =
  process.env.NODE_ENV === 'test'
    ? `http://${HOST}:${PORT}`
    : process.env.DEPLOY_URL;

describe('Users tests.', () => {
  it('It should be possible to list all users.', async () => {
    const result = await frisby.get(`${url}/users`).expect('status', 200);

    expect(JSON.parse(result._body)).toEqual([]);
  });

  it.only('It must be possible to create a new user.', async () => {
    const result = await frisby
      .post(`${url}/users`, data[0])
      .expect('status', 201);

    expect(JSON.parse(result._body)).toEqual({
      message: 'User created successfully.',
    });
  });
});
