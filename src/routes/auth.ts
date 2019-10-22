import { Router } from 'express';
import { Instructor } from '../models/Instructor';
import { Gender } from '../models/Gender';
import { Classroom } from '../models/Classroom';
import { Student } from '../models/Student';
import * as bcrypt from 'bcrypt';
import * as jsonWebToken from 'jsonwebtoken';
import { config } from '../config';

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
          include: [Gender, Classroom]
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
          include: [Gender, Classroom]
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
