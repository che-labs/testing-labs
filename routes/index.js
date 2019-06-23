import { Router } from 'express';
import StudentController from '../controllers/StudentController.js';

const routes = Router();
routes.get('/students', StudentController.getAllStudents);
routes.get('/students/:id', StudentController.getSingleStudent);
routes.post('/students', StudentController.createStudent);
routes.put('/students/:id', StudentController.updateStudent);
routes.delete('/students/:id', StudentController.deleteStudent);

export default routes;