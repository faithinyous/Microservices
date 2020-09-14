import App from "./app";
// import PostController from './controllers/post.controller';
import validateEnv from "./utils/validateEnv";
validateEnv(); //==> Validate the .env variables below
const app = new App(parseInt(process.env.PORT) || 5000);
app
  .initialize()
  .then(() => {
    app.listen();
  })
  .catch(err => {
    console.log("Failed to start server", err);
  });
