import express from "express";
import _ from "lodash";
export default class Helper {

  /**
   * This is a helper function for checking the input parameters of incoming request.
   * @param {string[]} params require list of header need to use
   * @param {express.Request} req The request.
   * @param {express.Response} res The response. Optional, pass in the response for directly return the bad request.
   */
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

}
