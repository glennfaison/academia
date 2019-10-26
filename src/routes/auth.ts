import { Router } from 'express';
import { decodeJwt } from '../middleware/decode-jwt';
import { AuthController } from '../controllers/auth.controller';

const controller = new AuthController();
export const auth = Router();

/* Register Instructor. */
auth.route('/instructor-registration')
  .post((req, res) => controller.instructorRegistration(req, res));

/* Login Instructor. */
auth.route('/instructor-login')
  .post((req, res) => controller.instructorLogin(req, res));

/* Register Student. */
auth.route('/student-registration')
  .post((req, res) => controller.studentRegistration(req, res));

/* Login Student. */
auth.route('/student-login')
  .post((req, res) => controller.studentLogin(req, res));

/* Get Current User */
auth.route('/me')
  .get(decodeJwt, (req, res) => controller.me(req, res));
