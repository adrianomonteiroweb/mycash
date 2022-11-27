# MyCash

### TECHNOLOGIES

- Dependency Manager

  - yarn

- Server
  <details>
  <sumary><strong>Dependencies:</strong></sumary><br/>

  - @types/express;
  - express;
  - dotenv;
  - bcrypt;
  - joi;
  - http-status-codes;
  - pg;
  - sequelize;
  - sequelize-typescript;
  - uuid.
  </details>
  <details>
  <sumary><strong>DevDependencies:</strong></sumary><br/>

  - @types/bcrypt;
  - @types/express;
  - @types/frisby;
  - @types/jest;,
  - frisby;
  - jest;
  - nodemon;
  - sequelize-cli;
  - shelljs;
  - ts-node;
  - typescript.
  </details>

### RUNNING THE APPLICATION

1 - Run the command "yarn install" to install the application's dependencies.

2 - To run the application, it is first necessary to inform the environment variables with the .env file. As in .env.example.

- Example:

```bash
# NODE_ENV status
NODE_ENV=test

# docker compose config
CONTAINER_NAME=mycash_db
DOCKER_IMAGE=postgres

# volumes
DB_DATA=./postgres-data:/var/lib/postgresql/data
CREATE_TABLES=./sql/create_tables.sql:/docker-entrypoint-initdb.d/create_tables.sql
FILL_TABLES=./sql/fill_tables.sql:/docker-entrypoint-initdb.d/fill_tables.sql

# db config
DB_HOST=0.0.0.0
DB_PORT=5438
DB_USER=mycashuser
DB_PASS=mycashpass
DB_NAME=mycash_db
DB_DRIVER=postgres

# server
HOST=localhost
PORT=3333

# deploy
DEPLOY_URL=https://mycash.com.br
```

3 - Here are some commands used in this application:

- Start the application in production.

```bash
yarn start
```

- Start the application in development.

```bash
yarn dev
```

- Test the application in development.

```bash
yarn test
```

- Using sequelize-cli to manage the local database.

  - Create database;

  ```bash
  yarn db:create
  ```

  - Migrate tables;

  ```bash
  yarn db:migrate
  ```

  - Running all seeders;

  ```bash
  yarn db:seeders
  ```

  - Drop database;

  ```bash
  yarn db:drop
  ```

### BUSINESS RULES

<details>
<sumary><strong>Users</strong></sumary>

- Anyone should be able to use the application. To do so, simply register by entering your username and password;
- It must be ensured that each username is unique and composed of at least 3 characters;
- You must ensure that the password consists of at least 8 characters, a number and a capital letter. Remember that it must be hashed when stored in the database;
- During the process of registering a new user, their respective account should be created automatically in the Accounts table with a balance of R$ 100.00. It is important to note that if a problem occurs and the user is not created, the Accounts table should not be affected;
- Every user should be able to log into the application by informing username and password. If login is successful, a JWT token (with 24h validity) must be provided;
- Every logged-in user (ie who presents a valid token) should be able to see their own current balance. User A cannot view user B's balance sheet, for example;
- Every logged-in user (that is, who presents a valid token) must be able to perform a cash-out by informing the username of the user who will be cash-in), if he has enough balance for that. Pay attention to the fact that a user should not be able to make a transfer for himself.
</details>
