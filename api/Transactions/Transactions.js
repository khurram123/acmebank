export default function (app)
{
    /*
     * User Transactions
     */
    app.get('/api/user/:id/transactions', function (request, response)
    {
       var mockData = require('../mockData/transactions.json');
       
        if (request.query.account  == '1')
       {
          return response.json(mockData.slice(0, 2));  
       }
       if (request.query.account == '2')
       {
          return response.json(mockData.slice(2, 4));  
       }
       
       return response.json(mockData); 
    });
    
    
    
     /*
     * Create a new user 
     */
    app.post('/api/user/:id/transactions', function (request, response) {
        response.json(201, {msg: "user created"});
    });

};