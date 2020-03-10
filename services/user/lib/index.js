const {Server, passport} = require('@guardapp/server');
const authenticate = require('./authentication');
const db = require('../db');

const server = new Server('user');
(async () => {
  await db(server.logger);
})();

server.app.get('/me2', async (req, res) => {
  const user = await sequelize.models.user.findOne();
  res.json(user);
});


server.app.post('/login', authenticate(passport), (req, res) => {
  res.json({
    token: req.user,
  });
});

server.get('/me', (req, res) => {
  res.json(req.user);
});

module.exports = {server};
