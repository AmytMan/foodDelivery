import express from 'express';
import {userController} from '../controllers/userController.js';
import { foodDataController } from '../controllers/foodDataController.js';
import { categoryController } from '../controllers/categoryController.js';
const router = express.Router();



  //public route
  router.get('/category' , categoryController.category);
  router.get('/foodData' ,foodDataController.foodMenu);
  router.post('/createuser',userController.createUser);
  router.post('/loginuser', userController.verifyUser);

export default router;
