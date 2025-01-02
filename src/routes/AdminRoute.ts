import express from 'express';
import AdminController from '../controllers/AdminController';

const adminRoute = express.Router();
const adminController = new AdminController();

adminRoute.get('/test', adminController.test);

export default adminRoute;