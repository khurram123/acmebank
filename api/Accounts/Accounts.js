export default function (app)
{
    /*
     *  To remove /user/:id portion from routes we can send user auth token in every request 
     *  to compute user id
    */
    
    /*
     * User accounts details
     */
    app.get('/api/user/:id/account', function (request, response)
    {
        var mockData = require('../mockData/accounts.json');
        response.json(mockData);
    });

    /*
     *  User account Update by account id
     */
    app.put('/api/user/:id/account/:accountId', function (request, response) {
        response.json({msg: "User updated"});
    });

    /*
     * User account Delete by account id
     */
    app.delete('/api/user/:id/account/:accountId', function (request, response) {
        response.json({msg: "User deleted"});
    });
};