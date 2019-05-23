import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import appIcon from "../assets/svg/protection.svg";

const styles = {
  root: {
    flexGrow: 1
  }
};

class HeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              style={{ height: "35px", paddingRight: "10px" }}
              src={appIcon}
            />
            <Typography variant="h6" color="inherit">
              Raaine
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
