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

function DarkSkyButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" href="https://darksky.net/dev" className={classes.button}>
        more info
      </Button>
    </div>
  );
}

DarkSkyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DarkSkyButton);
