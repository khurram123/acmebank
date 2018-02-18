import React, { Component } from 'react';
import './App.css';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import Transactions from './Transactions';
import LoginScreen from './Loginscreen'
/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import axios from 'axios';
import _ from 'lodash';
var apiBaseUrl = "http://localhost:4000/api/";

/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
     draweropen:false,
     responseData: []
    };
   
    this.renderAccounts = this.renderAccounts.bind(this);

    }
  componentWillMount(){
     
        axios.get(apiBaseUrl + 'user/1/account')
        .then((response) => {
                    if (response.status == 200)
                    {
                        //console.log(response.data);
                        this.setState({responseData: response.data});
                    }
                })
                .catch((e) =>
                {
                    console.error(e);
                });
  
  }
/*
  Function:toggleDrawer
  Parameters: event
  Usage:This fxn is used to toggle drawer state
  */
toggleDrawer(event){
  // console.log("drawer click");
  this.setState({draweropen: !this.state.draweropen})
}
/*
  Function:toggleDrawer
  Parameters: event
  Usage:This fxn is used to close the drawer when user clicks anywhere on the 
  main div
  */
handleDivClick(event){
  // console.log("event",event);
  if(this.state.draweropen){
    this.setState({draweropen:false})
  }
}
/*
  Function:handleLogout
  Parameters: event
  Usage:This fxn is used to end user session and redirect the user back to login page
  */
handleLogout(event){
  var loginPage =[];
  loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  this.props.appContext.setState({loginPage:loginPage,dashboard:[]})
}

  render() {
    return (
      <div className="App">
          <center>
          <div>
            <h3>Welcome to Dashboard</h3>
          </div>
          </center>
          <center>
          <div>
            <h4>Accounts</h4>
            <table>
  <tr>
    <th>Account ID</th>
    <th>Account Holder Name</th>
    <th>Account Type</th>
    <th>Account Balance</th>
  </tr>
           
               {this.renderAccounts()}
                       </table>
          </div>
          </center>
          </div>
    );
  }
  
  renderAccounts() {
      
     return _.map(this.state.responseData, account => {
     return (
             <tr>
    <td>{account.accountNumber}</td>
    <td>{account.accountOwner}</td>
    <td>{account.accountType}</td>
    <td>{account.balance}</td>
  </tr>
     );
   });
   
 }

  
}

const style = {
  margin: 15,
};

export default Dashboard;