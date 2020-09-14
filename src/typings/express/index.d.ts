import * as express from "express";
declare global {
  namespace Express {
    export interface Response {
      gSend: (
        payload: {
          success: boolean;
          payload?: any;
          message?: string;
        },
        statusCode?: number
      ) => any;

      gSendSuccess: (
        payload?: {
          payload?: any;
          message?: string;
        },
        statusCode?: 200 | 202
      ) => any;

      gSendFail: (
        message: string,
        statusCode?: 400 | 401 | 402 | 403 | 404
      ) => any;

      gSendError: (message: string, statusCode?: 500 | 503) => any;
    }
  }
}
