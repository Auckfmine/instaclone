const express = require('express');
const app = express();

const config = require('./config');
const db = require('./config/database');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const cors = require('cors');

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(config.port, console.log('Server has started on http://localhost:%s', config.port));