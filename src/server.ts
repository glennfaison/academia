import {createServer} from 'http';
import {app} from './app';
import {sequelize} from './sequelize';
import * as seeds from './seeds';

const port = process.env.PORT || 3000;

(async () => {
  await sequelize.sync();
  seeds.generate(); // create seeds asynchronously

  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );
})();
