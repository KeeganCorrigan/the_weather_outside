import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'Lato, sans-serif',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const background = props.temperature > 60 ? "red-toolbar" : "blue-toolbar";
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar classes={{root: background}}>
            <i className="fas fa-cloud-sun-rain"></i><b>THE WEATHER OUTSIDE</b>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
