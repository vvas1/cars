import { ButtonBase, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './car-details.styles';

export default function CarDetails(props) {
  const { photo, ...carDetails } = props.car;
  const classes = useStyles();

  const carEntries = Object.entries(carDetails);
  const mappedCarDetails = carEntries.map((detail) => (
    <li key={detail}>
      <Typography gutterBottom variant="subtitle1">
        <b>{detail[0]}: </b>
        {detail[1]}
      </Typography>
    </li>
  ));
  return (
    <Paper className={classes.root}>
      <Typography className={classes.image}><img className={classes.img} src={photo} /></Typography>
      <Typography className={classes.text}>
        <Typography>
          {mappedCarDetails}
        </Typography>
        <Typography className={classes.deleteButton}><Button variant='outlined'>edit</Button><Button variant='contained'>delete</Button></Typography>
      </Typography>
    </Paper>
  )
}
