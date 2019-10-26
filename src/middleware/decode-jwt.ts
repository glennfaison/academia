import * as jsonWebToken from 'jsonwebtoken';
import { config } from '../config';
import {Response} from 'express';

export function decodeJwt(req, res: Response, next) {
  try {
    let jwt = req.headers['authorization'];
    jwt = jwt!.split(' ')[1];
    req.me = jsonWebToken.verify(jwt, config.jwt.secret);
  } catch (e) { }

  next();
};
