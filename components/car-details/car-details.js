import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./car-details.styles";
import { MainContext } from "../../context/mainContext";
import { deleteCar } from "../../operations/car-operations";
import { loading } from "../Loading";

export default function CarDetails({ car }) {
  const { photo, ...carDetails } = car;
  const classes = useStyles();
  const { send } = useContext(MainContext);

  const deleteHandler = () => {
    send({
      type: "SHOW",
      text: "Are you sure you want to delete the car?",
      handler: () => deleteCar(car._id),
      push: () => Router.push("/"),
    });
  };
  const carEntries = Object.entries(carDetails);
  const mappedCarDetails = carEntries.map((detail) => (
    <li key={detail}>
      <Typography gutterBottom variant="subtitle1">
        <b>
          {detail[0]}
          :
          {" "}
        </b>
        {detail[1]}
      </Typography>
    </li>
  ));

  return (loading() ? <CircularProgress /> : (
    <Paper elevation={10} className={classes.root}>
      <Typography className={classes.image}><img alt={`${carDetails.brand} ${carDetails.model} ${carDetails.year}`} className={classes.img} src={photo} /></Typography>
      <Typography component="div" className={classes.text}>
        <Typography>
          {mappedCarDetails}
        </Typography>
        <Typography className={classes.deleteButton}>
          <Link href={`/car/edit/${carDetails._id}`}><Button variant="outlined">edit</Button></Link>
          <Button type="button" onClick={deleteHandler} variant="contained">delete</Button>
        </Typography>
      </Typography>
    </Paper>
  )

  );
}

CarDetails.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
