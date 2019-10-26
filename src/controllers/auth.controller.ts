import { Request, Response } from 'express';
import { Instructor } from '../models/Instructor';
import { Student } from '../models/Student';
import { config } from '../config';
import * as bcrypt from 'bcrypt';
import * as jsonWebToken from 'jsonwebtoken';

export class AuthController {

  constructor() { }

  async me(req: Request, res: Response) {
    try {
      let me = req['me'];
      if (!me) { return res.sendStatus(401); }
      let result: Student | Instructor | null = await Student.findByPk(me.id, { include: [{ all: true }] });
      if (!result) { return res.status(404).json("No such user!"); }
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async studentLogin(req: Request, res: Response) {
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
  }

  async studentRegistration(req: Request, res: Response) {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, config.bcrypt.salt);
      const result = await Student.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async instructorLogin(req: Request, res: Response) {
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
      return res.status(201).json({ jwt, user: result });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async instructorRegistration(req: Request, res: Response) {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, config.bcrypt.salt);
      const result = await Instructor.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

}
