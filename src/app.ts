import * as express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
import * as errorhandler from 'strong-error-handler';
import { genders, students, instructors, examinations, classrooms, courses, auth, writtenExams } from './routes';
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

app.use('/auth', auth);
app.use('/genders', genders);
app.use('/students', decodeJwt, students);
app.use('/instructors', decodeJwt, instructors);
app.use('/classrooms', decodeJwt, classrooms);
app.use('/examinations', decodeJwt, examinations);
app.use('/courses', decodeJwt, courses);
app.use('/written_exams', decodeJwt, writtenExams);

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
