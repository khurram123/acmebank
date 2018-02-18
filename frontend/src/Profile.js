import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import LoginScreen from './Loginscreen';
var apiBaseUrl = "http://localhost:4000/api/";
class Profile extends Component {
    constructor(props){
    super(props);
    
    this.state={
      full_name:'',
      e_mail:'',
      web_site:'',
      phone_number:'',
      password:''
    };
    //this.renderProfile = this.renderProfile.bind(this);
   }
  componentWillMount(){
        axios.get(apiBaseUrl + 'user/1')
        .then((response) => {
                    if (response.status == 200)
                    {
                        //console.log(response.data);
                        this.setState({full_name: response.data.name,e_mail: response.data.email,web_site: response.data.website,phone_number: response.data.phone});

                    }
                })
                .catch((e) =>
                {
                    console.error(e);
                });
  
  }
  handleClick(event){
    // console.log("values in profile handler",role);
   // var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.full_name.length>0 && this.state.e_mail.length>0){
      var payload={
      "full_name": this.state.full_name,
      "e_mail":this.state.e_mail,
      "phone_number":this.state.phone_number,
      "web_site":this.state.web_site,
      "user_password":this.state.user_password
      }
      console.log(payload);
      axios.put(apiBaseUrl+'user/1', payload)
     .then(function (response) {
       console.log(response);
       if(response.status == 200){
        alert("Profile details updated");
       }
       else{
         console.log("some error ocurred",response.status);
       }
     }
             )
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }
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
  // console.log("logout event fired",this.props);
  var loginPage =[];
  loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  this.props.appContext.setState({loginPage:loginPage,dashboard:[]})
}

  render() {
    return (
      <div className="App">
          <center>
          <h3>Update Profile</h3>
          </center>
          <center>
            <div>
             <MuiThemeProvider>
               <div>
                <TextField
                  value={this.state.full_name}
                  hintText="Enter your Full Name"
                  floatingLabelText="Full Name *"
                  onChange = {(event,newValue) => this.setState({full_name:newValue})}
                  />
                <br/>
                <TextField
                 value={this.state.e_mail}
                  hintText="Enter your Email"
                  floatingLabelText="Email *"
                  onChange = {(event,newValue) => this.setState({e_mail:newValue})}
                  />
                <br/>
                <TextField
                 value={this.state.phone_number}
                  hintText="Enter your Phone"
                  floatingLabelText="Phone"
                  onChange = {(event,newValue) => this.setState({phone_number:newValue})}
                  />
                <br/>
                <TextField
                 value={this.state.web_site}
                  hintText="Enter your Website"
                  floatingLabelText="Website"
                  onChange = {(event,newValue) => this.setState({web_site:newValue})}
                  />
                <br/>
                <TextField
                  type = "password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({user_password:newValue})}
                  />
                <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               </div>
              </MuiThemeProvider>
           </div>
          </center>
          </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Profile;