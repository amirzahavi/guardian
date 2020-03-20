const {createServer, passport, NotFound} = require('@guardapp/server');
const db = require('./db');
const authenticate = require('./authentication');
const usersRoute = require('./routes/user.route');


module.exports = async () => {
  const server = await createServer('user');

  server.app.post('/login', authenticate(passport), (req, res) => {
    res.json({
      token: req.user,
    });
  });

  server.get('/me', (req, res) => {
    res.json(req.user);
  });

  server.use(usersRoute);

  return server;
};
