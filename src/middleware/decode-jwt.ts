import * as jsonWebToken from 'jsonwebtoken';

export function decodeJwt (req, res, next) {
  let jwt = req.headers['authorization'];
  jwt = jwt!.split(' ')[1];
  req.me = jsonWebToken.decode(jwt);

  next();
};
