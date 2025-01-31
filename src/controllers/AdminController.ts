import { Request, Response } from "express";
import AdminService from "../services/AdminService";
import TestService from "../services/TestService";
import AppResponse from "../utils/appResponse";

class AdminController {

    private adminService;
    private testService;

    constructor() {
        this.adminService = new AdminService();
        this.testService = new TestService();

        this.test = this.test.bind(this);
    }

    // TEST
    async test(req: Request, res: Response) {
        try {

            const data = await this.testService.test(req.body);

            if (!data) {
                return AppResponse.sendErrors({
                    res,
                    data: null,
                    message: "API Testing Failed!",
                    code: 403
                });
            } else {
                return AppResponse.sendSuccessful({
                    res,
                    data: data,
                    message: "API Testing Successfully!",
                    code: 200
                });
            }

        } catch (error: any) {
            return AppResponse.sendErrors({
                res,
                data: null,
                message: error.message,
                code: 500
            });
        }
    }
};

export default AdminController;