const app = require('./app');
const db  = require('./models');
const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  console.log('DB synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
