import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../../.env') });

import app from './app';

import routes from './routes';

app.use(routes);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  const statusServer =
    process.env.NODE_ENV === 'test'
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URL}`;

  console.log(statusServer);
});
