import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";

import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Create, Delete, Image } from "@material-ui/icons";
import { useStyles } from "./car-details.styles";
import { MainContext } from "../../context/mainContext";
import { deleteCar } from "../../operations/car-operations";
import CustomCircularProgress from "../custom-circular-progress/custom-circullar-progress";

export default function CarDetails({ car }) {
  const classes = useStyles();
  const {
    state,
    send,
    toast,
  } = useContext(MainContext);

  useEffect(() => {
    send({
      type: "SET_LOADING",
      loading: false,
    });
  }, [car]);

  const deleteHandler = () => {
    send({
      type: "SHOW",
      text: "Are you sure you want to delete the car?",
      handler: async () => {
        const deletedCar = await deleteCar(car._id);

        if (deletedCar && deletedCar.error) {
          toast.error(deletedCar.error, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
          return;
        }
        toast.success("Car successfully deleted!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      },
    });
  };

  const date = new Date(+car.date).toLocaleDateString();

  return state.context.loading ? (
    <CustomCircularProgress />
  ) : (
    <Paper elevation={10} className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          container
          md={7}
          id="photo div"
          style={{
            padding: "1rem",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            minHeight: "10rem",
          }}
        >
          {car.photo ? (
            <img alt="car" className={classes.img} src={car.photo} />
          ) : (
            <Image style={{
              width: "100%",
              height: "100%",
            }}
            />
          )}
        </Grid>
        <Grid container md={5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.textDiv}
            >
              <div>
                <b>Brand: </b>
                {car.brand}
              </div>
              <div>
                <b>Model: </b>
                {car.model}
              </div>
              <Typography variant="h6" className={classes.price}>
                <b>Price: </b>
                $
                {car.price}
              </Typography>
              <div>
                <b>Year: </b>
                {car.year}
              </div>
              <div>
                <b>Category: </b>
                {car.category}
              </div>
              <div>
                <b>Engine: </b>
                {car.engine}
              </div>
              <div>
                <b>Transmission: </b>
                {car.transmission}
              </div>
              <div>
                <b>Mileage: </b>
                {car.mileage}
                {" "}
                km
              </div>
              <div>
                <b>External color: </b>
                {car.externalColor}
              </div>
              <div>
                <b>Publication date: </b>
                {date}
              </div>
              <div>
                <b>Description: </b>
                {car.description}
              </div>
            </Typography>
          </div>
          <Grid container md={12} style={{ padding: "1rem" }}>
            <div className={classes.buttonDiv}>
              <Link href={`/car/edit/${car._id}`}>
                <Button
                  startIcon={<Create />}
                  type="button"
                  aria-label="edit car"
                  variant="contained"
                  color="primary"
                >
                  edit
                </Button>
              </Link>
              <Button
                startIcon={<Delete />}
                aria-label="delete car"
                type="button"
                onClick={deleteHandler}
                variant="contained"
                color="primary"
              >
                delete
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

CarDetails.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
