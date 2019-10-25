import * as express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const jwt = require('express-jwt');
import { config } from './config';
import * as errorhandler from 'strong-error-handler';
import { genders, students, instructors, examinations, classrooms, courses, auth } from './routes';
import { enableCors } from './middleware/enable-cors';
import { decodeJwt } from './middleware/decode-jwt';

export const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable cors for all origins
app.use(enableCors);

app.use(jwt({ secret: config.jwt.secret, requestProperty: 'me' })
  .unless({
    path: [/auth.*/],
    ext: [],
  }));

// This is included because, for some reason, the decoded jwt is not being attached to response objects
app.use(decodeJwt);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') { res.status(401).send(err); }
});

app.use('/auth', auth);
app.use('/genders', genders);
app.use('/students', students);
app.use('/instructors', instructors);
app.use('/classrooms', classrooms);
app.use('/examinations', examinations);
app.use('/courses', courses);

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
