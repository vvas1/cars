import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'
import { useStyles } from './car-details.styles';

CarDetails.propTypes = {
  car: PropTypes.objectOf({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
}

export default function CarDetails({ car }) {
  const { photo, ...carDetails } = car;
  const classes = useStyles();

  const carEntries = Object.entries(carDetails);
  const mappedCarDetails = carEntries.map((detail) => (
    <li key={detail}>
      <Typography gutterBottom variant="subtitle1">
        <b>
          {detail[0]}
          :
          {' '}
        </b>
        {detail[1]}
      </Typography>
    </li>
  ));
  return (
    <Paper className={classes.root}>
      <Typography className={classes.image}><img alt={`${carDetails.brand} ${carDetails.model} ${carDetails.year}`} className={classes.img} src={photo} /></Typography>
      <Typography className={classes.text}>
        <Typography>
          {mappedCarDetails}
        </Typography>
        <Typography className={classes.deleteButton}>
          <Button variant="outlined">edit</Button>
          <Button variant="contained">delete</Button>
        </Typography>
      </Typography>
    </Paper>
  )
}
