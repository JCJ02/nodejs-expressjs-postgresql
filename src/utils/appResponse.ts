import { Response } from "express";

type appResponseType = {
    res: Response,
    message?: string,
    data: unknown,
    code: number
}

class AppResponse {

    public static sendSuccessful({ res, message, data, code }: appResponseType) {
        res.status(code).json({
            data,
            message,
            code
        });
    }

    public static sendErrors({ res, message, data, code }: appResponseType) {

        let returnMessage;

        if (code !== 500) {
            returnMessage = message;
        } else {
            if (process.env.ENV = "development") {
                returnMessage = message;
            } else {
                returnMessage = "Internal Server Error!";
            }
        }

        res.status(code).json({
            data,
            message,
            code
        });
    }

}

export default AppResponse;