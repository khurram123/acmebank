import express from 'express';
var app = express();

app.use(function(req,res,next){
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
   next(); 
});

import Users from './api/Users/Users.js';
Users(app);

import Transactions from './api/Transactions/Transactions.js';
Transactions(app);

import Accounts from './api/Accounts/Accounts.js';
Accounts(app);

app.listen(4000, () => console.log('Acme bank server is running on http://127.0.0.1:4000!'));