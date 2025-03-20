import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
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
                    <Grid item xs={3}>
                        Hello
                    </Grid>a
                    <Grid item xs={6}>
                        <div>
                            <div>
                                <img src={inst_image} width={"450"} alt={"instagram"}/>
                            </div>
                        </div>
                        <div>
                            <img src={inst_logo} width={"450"} alt={"logo"}/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        IJSE
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginPage;