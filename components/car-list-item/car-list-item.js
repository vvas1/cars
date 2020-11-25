import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useStyles } from './car-list-item.styles';

CarListItem.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}

export function CarListItem({
  id, brand, model, price, photo, year,
}) {
  const classes = useStyles({ photo });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={5} className={classes.image} item />
          <Grid
            className={classes.textDiv}
            item
            xs={12}
            sm={12}
            md={7}
            container
          >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  brand:
                  {' '}
                  {brand}
                </Typography>
                <Typography gutterBottom>
                  model:
                  {model}
                </Typography>
                <Typography style={{ cursor: 'pointer' }}>
                  year:
                  {' '}
                  {year}
                </Typography>
              </Grid>
              <Grid item className={classes.buttonDiv}>
                <Link href={`/car/${id}`}>
                  <Button>show more</Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography gutterBottom>
                $
                {price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
