import express from "express";
import _ from "lodash";
import {cassandraExe} from "@/cassandra";
export default class Helper {

  public static verifyRequestParams(
    params: string[],
    req: express.Request,
    res?: express.Response
  ) {
    const missingParams: any = [];

    if (req.body && params) {

      // Use map to check if each param is in req.body as array, if it is not, push what is missing.
      const hits: boolean[] = params.map(param => {
        if (_.has(req.body, param)) {
          return true;
        } else {
          missingParams.push(param);
          return false;
        }
      });

      // Check if the array includes false or not
      if (!hits.includes(false)) {
        return true;
      }
    }
    if (res) {
      // Return bad request
      res.status(400);
      res.send({
        status: 400,
        msg: "Input not valid.",
        expectedParams: params,
        missingParams: missingParams
      });
    }
    return false;
  }

  public static async  verifyPartner(

    req: express.Request,
    res?: express.Response
  ) {
    const query = `SELECT id FROM databaseTesla.partner WHERE token = ?`
    return await cassandraExe(query,[ req.body.token], (err: any, result: any) => {
      if (err) {
        console.log(err)
        return -1
      }
      return result.rows[0].id
    });

  }

}
