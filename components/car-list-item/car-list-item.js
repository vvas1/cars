import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";
import { useStyles } from "./car-list-item.styles";

export function CarListItem({
  _id, brand, model, price, year, photo, mileage,
}) {
  const classes = useStyles({ photo });
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
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
                  {brand}
                  {" "}
                  {model}
                </Typography>
                <Typography>
                  {year}
                </Typography>
                <Typography>
                  {mileage}
                </Typography>
              </Grid>
              <Grid item className={classes.buttonDiv}>
                <Link href={`/car/${_id}`}>
                  <Button>show more</Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="h5" gutterBottom>
                {`$ ${price}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

CarListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
};
