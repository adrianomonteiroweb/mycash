const frisby = require('frisby');

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

const url =
  process.env.NODE_ENV === 'test'
    ? `http://${HOST}:${PORT}`
    : process.env.DEPLOY_URL;

describe('Users tests.', () => {
  it('It should be possible to list all users.', async () => {
    const result = await frisby
      .get(`${url}/users`)
      .expect('status', 200)
      .done(() => {});

    expect(result).toEqual([]);
  });
});
