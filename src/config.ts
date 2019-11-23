export const config = {
  jwt: {
    secret: 'secret'
  },
  collectionNames: {
    users: 'Users',
    courses: 'Courses',
    topics: 'Topics',
    questions: 'Questions',
    options: 'Options',
    quizzes: 'Quizzes',
    userQuizzes: 'UserQuizzes',
    settings: 'Settings',
    privileges: 'Privileges',
    codes: 'Codes',
    tiers: 'Tiers',
  },
  routeNames: {
    root: '/',
    me: '/auth/me',
    register: '/auth/register',
    login: '/auth/login',
    users: '/users',
    courses: '/courses',
    settings: '/settings',
    privileges: '/privileges',
    persons: '/persons',
    genders: '/genders',
    instructors: '/instructors',
  },
  db: {
    dialect: 'mysql',
    username: '3eP9td1Iay',
    dbname: '3eP9td1Iay',
    password: '9ncWiH7X8d',
    host: 'remotemysql.com',
  }/* {
    dialect: 'mysql',
    username: 'root',
    dbname: 'academia',
    password: 'root',
    host: 'localhost',
  } */,
  bcrypt: {
    salt: 10,
  }
};
