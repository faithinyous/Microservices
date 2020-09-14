/// <reference types="./typings/express/" />

require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";
import router from "./routes";
import "dotenv/config";
//todo
// import errorHandler from "./middlewares/error.middleware";
// import authMiddleware from "./middlewares/auth.middleware";


// @ts-ignore
import { gExpressMiddleware } from "./express-extension";

class App {
  public app: express.Application;
  public port: number;


  constructor(port: number) {
    // This is where the methods get called
    this.app = express();
    this.port = port;
  }

  public initialize() {
    return new Promise(async (resolve, reject) => {
      try {
        // Google client must be initialized before router because it will be shared among router controllers.
        this.initializeMiddleware();
        this.initializeRouter();
        this.connectToDatabase();
        resolve(this);
      } catch (err) {
        reject(err);
      }
    });
  }
  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(
      bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000
      })
    );
    this.app.use(this.allowCrossDomain);
    this.app.use(gExpressMiddleware);
  }
  allowCrossDomain: express.RequestHandler = (req, res, next) => {

    // @ts-ignore
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  };

  private initializeRouter() {
    this.app.use("/", router);
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
  //todo
  private connectToDatabase() {}
}

export default App;

