import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import LoginScreen from './Loginscreen';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {draweropen: false,currentScreen:[]};
  }
  componentDidMount(){
    var currentScreen=[];
    currentScreen.push(<Dashboard appContext={this.props.appContext} />);
    this.setState({currentScreen})
  }
  /**
   * Toggle opening and closing of drawer
   * @param {*} event 
   */ 
  toggleDrawer(event){
  // console.log("drawer click");
  this.setState({draweropen: !this.state.draweropen})
  }
  handleMenuClick(event,page){
    switch(page){
      case "opendashboard":
      // console.log("need to open dashboard")
      var currentScreen=[];
      currentScreen.push(<Dashboard appContext={this.props.appContext} />);
      this.setState({currentScreen})
      break;
      case "openprofile":
      // console.log("need to open profile")
      var currentScreen=[];
      currentScreen.push(<Profile appContext={this.props.appContext} />);
      this.setState({currentScreen})
      break;
      case "opentransactions":
      // console.log("need to open transactions")
      var currentScreen=[];
      currentScreen.push(<Transactions appContext={this.props.appContext} />);
      this.setState({currentScreen})
      break;
      case "logout":
      var loginPage =[];
      loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
      this.props.appContext.setState({loginPage:loginPage,dashboard:[]})
      break;
    }
    this.setState({draweropen:false})
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="Dashboard"
            onLeftIconButtonClick={(event) => this.toggleDrawer(event)}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.draweropen}>
            <MenuItem>
              <div>
              <a href="#"><FontIcon
                className="material-icons drawerclosebutton"
                color={blue500}
                styles={{ top:10,}}
                onClick={(event) => this.toggleDrawer(event)}
              >close menu</FontIcon></a>
              </div>
            </MenuItem>
              <div>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"opendashboard")}>
                  Dashboard
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openprofile")}>
                  Profile
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"opentransactions")}>
                  Transactions
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"logout")}>
                  Logout
              </MenuItem>
              </div> 
          </Drawer>
        </MuiThemeProvider>
        <div>
          {this.state.currentScreen}
        </div>
      </div>
    );
  }
}

export default App;
