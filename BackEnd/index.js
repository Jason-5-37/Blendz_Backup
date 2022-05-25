'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const machineRoutes = require('./routes/machine-routes');
const beverageRoutes = require('./routes/beverage-routes');
const accessorieRoutes = require('./routes/accessorie-routes');
const userRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {res.send('Welcome to blendz');})

app.use('/api', machineRoutes.routes);
app.use('/api', beverageRoutes.routes);
app.use('/api', accessorieRoutes.routes);
app.use('/api', userRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));