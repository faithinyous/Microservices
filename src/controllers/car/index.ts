import Helper from "@/helpers/helper";
import express from "express";
import {cassandraExe} from "@/cassandra";
import assert from "assert";

export default class User {
  public static async insertLog(req: express.Request, res: express.Response) {
    if (Helper.verifyRequestParams(['car_id', 'timestamp', 'long', 'lat', 'etc'], req, res)) return;
    const query = `INSERT INTO databaseTesla.car_logs (car_id, timestamp, long, lat, etc)
                   VALUES (5b6962dd-3f90-4c93-8f61-eabfa4a803e2,
                           '2019-01-01 00:00:00z', 13.123213, 41.2412412, 'etc');`
    await cassandraExe(query, req.body, (err: any, result: any) => {
      if (err) {
        console.log(err)
        res.gSendError(err)
      }
      res.gSendSuccess()

    });

  }

  //if the car is not online then the log will send as in history
  public static async insertHistory(req: express.Request, res: express.Response) {
    //check if the data is valid
    for (let data in req.body) {
      //check data correction
      const carData = ['car_id', 'timestamp', 'long', 'lat', 'etc'];
      // @ts-ignore
      const validated = carData.every((prop: any) => prop in data)
      if (!validated) {
        res.gSendFail("wrong input")
        return;
      }
      const query = `INSERT INTO databaseTesla.car_logs (car_id, timestamp, long, lat, etc)
                     VALUES (5b6962dd-3f90-4c93-8f61-eabfa4a803e2,
                             '2019-01-01 00:00:00z', 13.123213, 41.2412412, 'etc');`
      await cassandraExe(query, req.body, (err: any, result: any) => {
        if (err) {
          console.log(err)
          res.gSendError(err)
        }
        res.gSendSuccess()
      });

    }
  }


}