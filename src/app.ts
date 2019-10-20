import * as express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
// const jwt = require('express-jwt');
// import config from './config';
import * as errorhandler from 'strong-error-handler';
import { genders, students, instructors, examinations, classrooms, courses, auth } from './routes';
import { enableCors } from './middleware/enable-cors';

export const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable cors for all origins
app.use(enableCors);

// app.use(jwt({ secret: config.jwt.secret }).unless({
// 	path: ['**',
// 		config.routeNames.root,
// 		config.routeNames.register,
// 		config.routeNames.privileges,
// 		config.routeNames.login,
// 		'/auth/forgot-password',
//    '/auth/reset-password',
// 	]
// }));
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') { res.status(401).send(err); }
});

// app.use('/movies', movies);
// app.use('/actors', actors);
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
