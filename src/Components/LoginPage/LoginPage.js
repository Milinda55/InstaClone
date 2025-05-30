import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import './LoginPage.css';
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";
import fb_logo from "../../images/fb.png";
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else
            this.setState({isLogin: true});
    }


    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="login-page-main">
                            <div>
                                <img src={inst_image} width="450" alt={"instagram"}/>
                            </div>
                        <div>
                        <div className="loginPage_rightComponent">
                            <img className="loginPage_logo" src={inst_logo} alt={"logo"}/>
                            <div className="loginPage_signin">

                                <input className="loginPage_text" type="text" placeholder="Phone number, username or email"/>
                                <input className="loginPage_text" type="password" placeholder="Password"/>
                                <button className="login_button">Sign In</button>


                            </div>

                            <div className="loginPage_ordiv">
                                <div className="login_divider"></div>
                                <div className="login_or">OR</div>
                                <div className="login_divider"></div>
                            </div>

                            <div className="login_fb">
                                <img src={fb_logo} width="15px" style={{ "marginRight":"5px" }}  alt=""/>Log in with Facebook
                            </div>
                            <div className="login_forgot"> Forgot password?</div>

                            <div className="loginpage_signupoption">
                                <div className="loginPage_signin">
                                    Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                </div>
                                {/*<div className="loginPage_signup">*/}
                                {/*    Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>*/}
                                {/*</div>*/}
                            </div>

                            <div className="loginPage__downloadSection">
                                <div>
                                    Get the app.
                                </div>
                                <div className="loginPage__option">
                                    <img className="loginPage_dwimg" src={appstore} width="136px" />
                                    <img className="loginPage_dwimg" src={playstore} width="136px" />
                                </div>
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