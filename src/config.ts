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
  },
  db: {
    dialect: 'mysql',
    username: 'Er8Wvj9lSv',
    dbname: 'Er8Wvj9lSv',
    password: 'RzqHxvL0Ht',
    host: 'remotemysql.com',
  },
  bcrypt: {
    salt: 10,
  }
};
