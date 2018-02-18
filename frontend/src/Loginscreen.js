import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
class Loginscreen extends Component
{
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {
        var loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
        this.setState({
            loginscreen: loginscreen
        })
    }

    render()
    {
        return (
                <div className="loginscreen">
                    {this.state.loginscreen}
                    <div>
                        {this.state.loginButtons}
                    </div>
                </div>
                );
    }
}
const style = {
    margin: 15,
};

export default Loginscreen;