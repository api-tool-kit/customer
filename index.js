/*****************************************
 * customer service for BigCo, Inc.
 * 2019-01 mamund
 *****************************************/
 
var express = require('express');
var app = express();
var customer = require('./customer');
var port = process.env.PORT || 8181;
 
app.use('/customer',customer);
app.listen(port, () => console.log(`customer svc listening on port ${port}!`));
