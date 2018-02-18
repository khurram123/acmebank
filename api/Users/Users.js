export default function (app)
{
    /*
     * Create a new user 
     */
    app.post('/api/user/login', function (request, response) {
        response.json(200, {msg: "user login success"});
    });

    /*
     * User get Details
     */
    app.get('/api/user/:id', function (request, response)
    {
        var mockData = require('../mockData/users.json');
        response.json(mockData[request.params.id-1]);
    });

    /*
     *  User Update
     */
    app.put('/api/user/:id', function (request, response) {
        
        response.json({msg: "User updated"});
    });

    /*
     * User Delete
     */
    app.delete('/api/user/:id', function (request, response) {
        response.json({msg: "User deleted"});
    });
};