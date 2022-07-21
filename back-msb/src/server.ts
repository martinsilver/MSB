import { App } from './app';
import { AppDataSource } from './data-source';
import 'dotenv/config';


const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
    .then(() => {
      new App().start(PORT);
    })
    .catch((error) => console.log(error))


