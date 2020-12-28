import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Card } from '@material-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useStyles } from './car-list-item.styles';

export function CarListItem({ _id, brand, model, price, year, photo }) {
  const classes = useStyles();
  return (
    <Card elevation={3}>
      <Grid container className={classes.mainContainer}>
        <Grid item md={6} lg={6} className={classes.imageContainer}>
          <img alt={model} className={classes.image} src={photo} />
        </Grid>
        <Grid container md={6} lg={6} className={classes.textContainer}>
          <Grid item md={12}>
            <Grid item md={12} className={classes.titleDiv}>
              <Typography className={classes.title}>
                {brand} {model}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h6">
                Price: <span className={classes.price}>{`$ ${price}`}</span>
              </Typography>
              <Typography>
                Year:
                {year}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid container md={12} className={classes.buttonContainer}>
              <Grid item>
                <Link href="/car/:id" as={`/car/${_id}`}>
                  <a>
                    <Button
                      aria-label="show car details"
                      color="primary"
                      variant="contained"
                    >
                      show more
                    </Button>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

CarListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
};
