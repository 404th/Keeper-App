import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from ".././styles/useStyles"

export function Header() {
  
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar className={ classes.nav } >
        <Typography className={ classes.typo } > Keeper </Typography>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
