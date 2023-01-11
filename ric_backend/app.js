const express = require ('express');
const app = express();
var cors= require('cors')
const userRouter = require('./router/user-router')

// middleware
app.use(cors())
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    next(`Can't find ${req.originalUrl} on this server!`, 404);
});
  
module.exports = app;   