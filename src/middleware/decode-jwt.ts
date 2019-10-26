import * as jsonWebToken from 'jsonwebtoken';
import { config } from '../config';

export function decodeJwt(req, res, next) {
  let jwt = req.headers['authorization'];
  jwt = jwt!.split(' ')[1];
  req.me = jsonWebToken.verify(jwt, config.jwt.secret);

  next();
};
