// This file contains all interface and type declaration
import { GaxiosResponse } from "gaxios";

declare global {
  namespace ExpressServer {
    interface ResponseBody {
      success: boolean;
      payload?: any;
      message?: any;
    }
    interface ErrorResponseBody extends ResponseBody {
      success: false;
      message: any;
    }
    interface FailResponseBody extends ResponseBody {
      status: false;
      message: any;
    }
    interface SuccessResponseBody extends ResponseBody {
      status: true;
      payload: any;
    }


  }
}
