import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function AboutButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" href="https://github.com/KeeganCorrigan/the_weather_outside" className={classes.button}>
        more info
      </Button>
    </div>
  );
}

AboutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutButton);
