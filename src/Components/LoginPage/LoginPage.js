import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import './LoginPage.css';
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="login-page-main">
                            <div>
                                <img src={inst_image} width="350" alt={"instagram"}/>
                            </div>
                        <div>
                        <div className="loginPage_rightComponent">
                            <img className="loginPage_logo" src={inst_logo} alt={"logo"}/>
                            <div className="loginPage_signin">
                                <input className="loginPage_text" type="text" placeholder="Phone number, username or email"/>
                                <input className="loginPage_text" type="password" placeholder="Password"/>
                                <button className="login_button">Sign In</button>
                            </div>
                        </div>
                        </div>
                        </div>


                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginPage;