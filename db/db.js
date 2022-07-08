// required module
const mongoose = require('mongoose');

// connecting
mongoose.connect(
  process.env.MONGODB_URL, 
{
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
})
.then(() => {
  console.log('mongodb connected');
})
.catch(err => {
  console.log(err.message);
});

// on connected
mongoose.connection.on('connected', () => {
  console.log('connected to mongodb atlas');
});

// on error
mongoose.connection.on('error', (err) => {
  console.log(err.message);
});

// on disconnected
mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});


