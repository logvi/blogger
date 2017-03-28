import config from 'lego-starter-kit/utils/config';

export default config.server({
  client: require('./client').default,
  port: process.env.PORT || 8080,
  host: 'localhost',
  db: {
    uri: 'mongodb://admin:admin@ds115110.mlab.com:15110/mytest',
  },
  jwt: {
    secret: 'replaceMyPlease',
  },
  // sockets: {
  //   transports: ['websocket'],
  // },
  middlewares: require('./middlewares').default,
});
