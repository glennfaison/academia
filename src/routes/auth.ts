import { Router } from 'express';
import { Instructor } from '../models/Instructor';
import { Gender } from '../models/Gender';
import { Classroom } from '../models/Classroom';
import { Student } from '../models/Student';
import * as bcrypt from 'bcrypt';

export const auth = Router();

/* Register Instructor. */
auth.route('/auth/instructor-registration')
  .post(async (req, res) => {
    try {
      const result = await Instructor.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Login Instructor. */
auth.route('/auth/instructor-login')
  .post(async (req, res) => {
    try {
      let result = await Instructor.findOne({
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
      if (!result.password || bcrypt.compareSync(req.body.password, result.password)) {
        return res.status(401).json("Incorrect password");
      }
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Register Student. */
auth.route('/auth/student-registration')
  .post(async (req, res) => {
    try {
      const result = await Student.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Login Student. */
auth.route('/auth/student-login')
  .post(async (req, res) => {
    try {
      let result = await Student.findOne({
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
      if (!result.password || bcrypt.compareSync(req.body.password, result.password)) {
        return res.status(401).json("Incorrect password");
      }
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
