Project Title
    Customer Portal Acme Bank

Getting Started
    navigate project root folder
    1- run commands: `npm install` and `npm start` (This will run the backend server)
    2- Navigate frontend dir in second terminal of main project and run command: `npm install` and `npm start` (This will run the frontend react app)

Node backend server
    1- provide APIs for frontend
    2- APIs will serve static, mock data (users, transactions and accounts)
    3- supported http Methods: PUT, POST, GET, DELETE, OPTIONS
    4- running on port: 4000

Frontend
    1- log-in page, dashboard page, transaction page and profile page
    2- user should submit only their username and be taken to the Customer Portal.
    3- successful login will allow user to navigate between links of following pages Dashboard, Profile, and Transactions
    4- dashboard will display all accounts of logged user
    5- profile page will update the logged user
    6- transaction page will display all the transactions along with options to switch between multiple accounts of logged user
    7- logout will simply take to the main login screen
    8- all the data is coming from the Node backend server APIs
    9- running on port: 3000

Built With
    Express - The nodejs framework
    Reactjs - A JavaScript library for building user interfaces
    NPM - Node package manager
    Babel - Transpiler (Source-to-source compiler)

Author
    Khurram Shehzad