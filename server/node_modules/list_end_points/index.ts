import { Application } from 'express';
import main from './src/main';
import 'colors';

const listEndpoints = (app: Application): void => {
  main(app).forEach((endpoint, key, arr) => {
    console.log(
      `${key + 1}`.blue,
      endpoint.methods.includes('GET')
        ? 'GET'.green.bold
        : endpoint.methods.includes('PUT')
        ? 'PUT'.blue.bold
        : endpoint.methods.includes('POST')
        ? 'POST'.yellow.bold
        : endpoint.methods.join(', ').red.bold,
      endpoint.middlewares.join(' ').cyan,
      endpoint.path.yellow.bold,
    );
    if (key === arr.length - 1) {
      console.log(`${arr.length} endpoints registered`.yellow.underline);
    }
  });
};

export default listEndpoints;
