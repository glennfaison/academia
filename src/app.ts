import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
import * as errorhandler from 'strong-error-handler';
import { genders, students, instructors, sequences, classrooms, courses, auth, examinations, studentExaminations } from './routes';
import { enableCors } from './middleware/enable-cors';
import { decodeJwt } from './middleware/decode-jwt';

export const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable cors for all origins
app.use(enableCors);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') { res.status(401).send(err); }
});

app.use('/api/v1/auth', auth);
app.use('/api/v1/genders', genders);
app.use('/api/v1/students', decodeJwt, students);
app.use('/api/v1/instructors', decodeJwt, instructors);
app.use('/api/v1/classrooms', decodeJwt, classrooms);
app.use('/api/v1/sequences', decodeJwt, sequences);
app.use('/api/v1/courses', decodeJwt, courses);
app.use('/api/v1/examinations', decodeJwt, examinations);
app.use('/api/v1/student_examinations', decodeJwt, studentExaminations);

// Allowed extensions list can be extended depending on your own needs
const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg',];

app.get('*', function (req, res) {
  let requestedUrl = path.resolve('./public/index.html');
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    requestedUrl = path.resolve(`./public/${req.url}`);
  }
  // res.sendFile(requestedUrl);
  const stream = fs.createReadStream(requestedUrl);
  stream.pipe(res);
});

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
