import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";

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
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <div>
                                <img src={inst_image} alt={"instagram"}/>
                            </div>
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