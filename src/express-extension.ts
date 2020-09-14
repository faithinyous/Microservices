const gExpressMiddleware = (req: any, res: any, next: any) => {
  req.gSession = req.session;

  res.gSend = (
    payload: {
      success: boolean;
      payload?: any;
      message?: string;
    },
    statusCode: number = 200
  ) => {
    res.status(statusCode);
    res.send(payload);
  };

  res.gSendSuccess = (
    payload?: { payload?: any; message?: string },
    statusCode: 200 | 202 = 200
  ) => {
    const _payLoad: any = payload ? payload : {};
    res.status(statusCode);
    _payLoad.success = true;
    res.send(_payLoad);
  };

  res.gSendFail = (
    message: string,
    statusCode: 400 | 401 | 402 | 403 = 400
  ) => {
    res.status(statusCode);
    res.send({ message: message });
  };

  res.gSendError = (message: string, statusCode: 500 | 503 = 500) => {
    res.status(statusCode);
    res.send({ message: message });
  };
  next();
};

export { gExpressMiddleware };
