import { Router } from 'express';
import { Instructor } from '../models/Instructor';
import { Student } from '../models/Student';
import * as bcrypt from 'bcrypt';
import * as jsonWebToken from 'jsonwebtoken';
import { config } from '../config';
import { decodeJwt } from '../middleware/decode-jwt';

export const auth = Router();

/* Register Instructor. */
auth.route('/instructor-registration')
  .post(async (req, res) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, config.bcrypt.salt);
      const result = await Instructor.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Login Instructor. */
auth.route('/instructor-login')
  .post(async (req, res) => {
    try {
      let result: Instructor | null = await Instructor.findOne({
        where: { email: req.body.email },
        include: [{ all: true }]
      });
      if (!result) {
        result = await Instructor.findOne({
          where: { username: req.body.email },
          include: [{ all: true }]
        });
      }
      if (!result) { return res.status(404).json("Email/username does not exist"); }
      if (!bcrypt.compareSync(req.body.password, result.password!)) {
        return res.status(401).json("Incorrect password");
      }
      const { id, email, username, password } = result;
      const jwt = jsonWebToken.sign({ id, email, username, password }, config.jwt.secret);
      console.log('jwt: ', jwt);
      return res.status(201).json({ jwt, user: result });
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Register Student. */
auth.route('/student-registration')
  .post(async (req, res) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, config.bcrypt.salt);
      const result = await Student.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Login Student. */
auth.route('/student-login')
  .post(async (req, res) => {
    try {
      let result: Student | null = await Student.findOne({
        where: { email: req.body.email },
        include: [{ all: true }]
      });
      if (!result) {
        result = await Student.findOne({
          where: { username: req.body.email },
          include: [{ all: true }]
        });
      }
      if (!result) { return res.status(404).json("Email/username does not exist"); }
      if (!bcrypt.compareSync(req.body.password, result.password!)) {
        return res.status(401).json("Incorrect password");
      }
      const { id, email, username, password } = result;
      const jwt = jsonWebToken.sign({ id, email, username, password }, config.jwt.secret);
      return res.status(201).json({ jwt, user: result });
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Get Current User */
auth.route('/me')
  .get(decodeJwt, async (req, res) => {
    try {
      let u = req['me'];
      let result: Student | null = await Student.findByPk(u.id, { include: [{ all: true }] });
      if (!result) { return res.status(404).json("No such user!"); }
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
