const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({ path: 'variables.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => console.log('Express server is listening on port 5000'));

const verifyWebhook = require('./verify-webhook');

app.get('/', verifyWebhook);

const messageWebhook = require('./message-webhook');

app.post('/', messageWebhook);

const analysis = require('./do-analysis-fulfillment');

app.post('/analysis', analysis);