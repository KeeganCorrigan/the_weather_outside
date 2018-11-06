import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloudIcon from '@material-ui/icons/Cloud';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
  root: {
    width: '100%',
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  onChange = (event, value) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.onChange}
        showLabels
        className={classes.root}
      >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Darksky" icon={<CloudIcon />} />
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
