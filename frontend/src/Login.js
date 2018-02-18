import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import Dashboard from './Dashboard';
import MainPage from './MainPage';
var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component
{
    constructor(props)
    {
        super(props);
        var localloginComponent = [];
        localloginComponent.push(
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="UserName"
                            onChange = {(event, newValue) => this.setState({username: newValue})}
                            />
                        <br/>
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
                    )
            this.state = {
                username: '',
                menuValue: 1,
                loginComponent: localloginComponent

            }
        }

        handleClick(event)
        {
            var self = this;
            if (this.state.username.length > 0)
            {
                var payload =
                        {
                            "userid": this.state.username,
                        };
                axios.post(apiBaseUrl + 'user/login', payload).then(function (response)
                {
                    //console.log(response);
                    if (response.status == 200)
                    {
                        var dashboard = [];
                        dashboard.push(<MainPage appContext={self.props.appContext} />)
                        self.props.appContext.setState({loginPage: [], dashboard: dashboard})
                    } else
                    {
                        //console.log("Username does not exists");
                        alert("Username does not exist");
                    }
                })
                        .catch(function (error)
                        {
                            console.log(error);
                        });
            } else
            {
                alert("Username required");
            }
        }

        handleMenuChange(value)
        {
            //console.log("menuvalue", value);
        }
        render()
        {
            return (
                    <div>
                        <MuiThemeProvider>
                            <AppBar
                                title="Login"
                                />
                        </MuiThemeProvider>
                        {this.state.loginComponent}
                    </div>
                    );
        }
    }

    const style = {
        margin: 15,
    };

    export default Login;