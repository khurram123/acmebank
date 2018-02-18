import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600,red500, greenA200} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Checkbox from 'material-ui/Checkbox';
import './App.css';
import LoginScreen from './Loginscreen';
import axios from 'axios';
import _ from 'lodash';
import FontIcon from 'material-ui/FontIcon';
var apiBaseUrl = "http://localhost:4000/api/";

/*
Module:superagent
superagent is used to handle post/get requests to server
*/
var request = require('superagent');
export default class Transactions extends Component {
  constructor(props){
    super(props);
    this.state={
      role:'student',
      responseData: []
    };
   
    this.renderTransactions = this.renderTransactions.bind(this);
    this.change = this.change.bind(this);

    }
  componentWillMount(){
     
        axios.get(apiBaseUrl + 'user/1/transactions')
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
h/*
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
  // console.log("logout event fired",this.props);
  var loginPage =[];
  loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  this.props.appContext.setState({loginPage:loginPage,dashboard:[]})
}

  render() {
    return (
      <div className="App">
          <center>
          <div>
          <h3> Transactions </h3>
          </div>
          </center>
          <center>
          <div>
            <h5> Switch Accounts: <select id="lang" onChange={this.change} value={this.state.value}>
                  <option value="select">All</option>
                  <option value="1">Account # 123456789-1</option>
                  <option value="2">Account # 123456789-2 </option>
               </select>
               </h5>
            <table>
                <tr>
                  <th>Account ID</th>
                  <th>Date</th>
                  <th>Beneficiary</th>
                  <th>Transfer Type</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
               {this.renderTransactions()}
            </table>
          </div>
          </center>
          </div>
    );
  }
  
  renderTransactions() {
      
     return _.map(this.state.responseData, transaction => {
     return (
             <tr>
    <td>{transaction.accountNumber}</td>
    <td>{transaction.date.toString()}</td>
    <td>{transaction.beneficiary}</td>
    <td>{transaction.transferType}</td>
    <td>{transaction.status}</td>
    <td>{transaction.amount}</td>
  </tr>
     );
   });
   
 }

change(event)
{
    axios.get(apiBaseUrl + 'user/1/transactions?account='+ event.target.value)
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
  
}
const style = {
  margin: 15,
};
