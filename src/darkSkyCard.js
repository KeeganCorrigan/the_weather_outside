import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DarkSkyButton from './darkSkyButton';

const styles = {
  card: {
    minWidth: 275,
    boxShadow: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function DarkSkyCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Special thanks to Dark sky
        </Typography>
        <Typography variant="body1">
          The Dark Sky API allows you to request weather forecasts and historical weather data programmatically.
        </Typography>
        < DarkSkyButton />
      </CardContent>
    </Card>
  );
}

DarkSkyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DarkSkyCard);
