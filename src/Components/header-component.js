import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import appIcon from "../assets/svg/protection.svg";

const styles = {
  root: {
    flexGrow: 1,
    color: "white"
  }
};

class HeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Toolbar>
          <div className="white-circle">
            <img style={{ height: "35px", paddingTop: "7px" }} src={appIcon} />
          </div>
          <Typography variant="h6" color="inherit">
            Raaine
          </Typography>
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
