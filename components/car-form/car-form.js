import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Image } from "@material-ui/icons";
import { useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { useStyles } from "./car-form.styles";
import { carValidationMessages } from "../../configs/validation";
import { carRegExp } from "../../configs/regexpSchemas";
import { colors, years } from "../../configs";
import { MainContext } from "../../context/mainContext";
import { addCar, updateCar } from "../../operations/car-operations";

const {
  MIN_LENGTH_MESSAGE,
  MAX_LENGTH_MESSAGE,
  VALIDATION_ERROR,
  PRICE_VALIDATION_ERROR,
} = carValidationMessages;

export function CarForm({ edit = false, car = {} }) {
  const classes = useStyles();
  const { send } = useContext(MainContext);

  const addCarhandler = (car) => {
    send({
      type: "SHOW",
      text: "Are you sure you want to add the car?",
      handler: () => addCar(car),
      push: () => Router.push("/"),
    });
  };
  const updateCarhandler = (data) => {
    send({
      type: "SHOW",
      text: "Are you sure you want to update the car data?",
      handler: () => updateCar(data),
      push: () => Router.push("/"),
    });
  };

  const mappedColors = colors.map((color) => (
    <option key={color}>{color}</option>
  ));
  const mappedYears = years.map((year) => <option key={year}>{year}</option>);

  const formSchema = Yup.object().shape({
    brand: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    model: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    year: Yup.string()
      .matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR)
      .required(VALIDATION_ERROR),

    engine: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    transmission: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    mileage: Yup.string()
      .matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR)
      .required(VALIDATION_ERROR),

    price: Yup.string()
      .matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR)
      .required(VALIDATION_ERROR),
    photo: Yup.string().required(VALIDATION_ERROR),

    description: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(200, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    externalColor: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),

    colorSimpleName: Yup.string()
      .min(2, MIN_LENGTH_MESSAGE)
      .max(100, MAX_LENGTH_MESSAGE)
      .required(VALIDATION_ERROR),
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    validationSchema: formSchema,
    validateOnBlur: true,
    initialValues: {
      brand: car.brand || "",
      year: car.year || "",
      model: car.model || "",
      photo: car.photo || "",
      price: car.price || "",
      engine: car.engine || "",
      mileage: car.mileage || "",
      description: car.description || "",
      transmission: car.transmission || "",
      externalColor: car.externalColor || "",
      colorSimpleName: car.colorSimpleName || "",
    },
    onSubmit: (data) => {
      if (edit) {
        updateCarhandler({ id: car._id, car: data });
      }
      addCarhandler(data);
    },
  });

  return (
    <Paper elevation={10}>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid
              container
              md={4}
              id="photo div"
              style={{
                padding: "1rem",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                minHeight: "10rem",
              }}
            >
              {values.photo ? (
                <img
                  alt="car"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={values.photo}
                />
              ) : <Image style={{ width: "100%", height: "100%" }} />}
            </Grid>
            <Grid container md={8}>
              <Grid container md={12} style={{ padding: "1rem" }}>
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ padding: "1rem 1rem 0" }}
                >
                  <div className={classes.inputMargin}>
                    <TextField
                      error={touched.photo && errors.photo}
                      name="photo"
                      label="Photo"
                      placeholder="Photo"
                      size="small"
                      fullWidth
                      value={values.photo}
                      variant="outlined"
                      onChange={handleChange}
                    />
                    {touched.photo && errors.photo && (
                      <div className={classes.inputError}>{errors.photo}</div>
                    )}
                  </div>
                </Grid>
                <Grid
                  item
                  style={{ padding: "0 1rem" }}
                  xs={12}
                  sm={12}
                  md={6}
                >
                  <div className={classes.inputMargin}>
                    <TextField
                      name="brand"
                      error={touched.brand && errors.brand}
                      placeholder="Brand"
                      label="Brand"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.brand}
                    />
                    {touched.brand && errors.brand && (
                      <div className={classes.inputError}>{errors.brand}</div>
                    )}
                  </div>

                  <div className={classes.inputMargin}>
                    <TextField
                      name="model"
                      error={touched.model && errors.model}
                      placeholder="Model"
                      label="Model"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.model}
                    />
                    {touched.model && errors.model && (
                      <div className={classes.inputError}>{errors.model}</div>
                    )}
                  </div>
                  <div className={classes.inputMargin}>
                    <TextField
                      name="price"
                      error={touched.price && errors.price}
                      placeholder="Price"
                      label="Price"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.price}
                    />
                    {touched.price && errors.price && (
                      <div className={classes.inputError}>{errors.price}</div>
                    )}
                  </div>
                  <div className={classes.inputMargin}>
                    <TextField
                      name="engine"
                      error={touched.engine && errors.engine}
                      placeholder="Engine"
                      label="Engine"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.engine}
                    />
                    {touched.engine && errors.engine && (
                      <div className={classes.inputError}>
                        {errors.engine}
                      </div>
                    )}
                  </div>
                  <div className={classes.inputMargin}>
                    <TextField
                      name="externalColor"
                      error={touched.externalColor && errors.externalColor}
                      placeholder="External color"
                      label="External color"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.externalColor}
                    />
                    {touched.externalColor && errors.externalColor && (
                      <div className={classes.inputError}>
                        {errors.externalColor}
                      </div>
                    )}
                  </div>
                </Grid>
                <Grid
                  item
                  style={{ padding: "0 1rem" }}
                  xs={12}
                  sm={12}
                  md={6}
                >
                  <div className={classes.inputMargin}>
                    <TextField
                      name="mileage"
                      error={touched.mileage && errors.mileage}
                      placeholder="Mileage"
                      label="Mileage"
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.mileage}
                    />
                    {touched.mileage && errors.mileage && (
                      <div className={classes.inputError}>
                        {errors.mileage}
                      </div>
                    )}
                  </div>

                  <div className={classes.inputMargin}>
                    <TextField
                      name="colorSimpleName"
                      error={
                        touched.colorSimpleName && errors.colorSimpleName
                      }
                      placeholder="Simple color"
                      select
                      label="Simple color"
                      SelectProps={{ native: true }}
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.colorSimpleName}
                    >
                      {mappedColors}
                    </TextField>
                    {touched.colorSimpleName && errors.colorSimpleName && (
                      <div className={classes.inputError}>
                        {errors.colorSimpleName}
                      </div>
                    )}
                  </div>
                  <div className={classes.inputMargin}>
                    <TextField
                      name="year"
                      error={touched.year && errors.year}
                      placeholder="choose a year"
                      label="year"
                      select
                      SelectProps={{ native: true }}
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.year}
                    >
                      {mappedYears}
                    </TextField>
                    {touched.year && errors.year && (
                      <div className={classes.inputError}>{errors.year}</div>
                    )}
                  </div>
                  <div className={classes.inputMargin}>
                    <TextField
                      name="transmission"
                      error={touched.transmission && errors.transmission}
                      placeholder="choose a transmission"
                      label="transmission"
                      select
                      SelectProps={{ native: true }}
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      value={values.transmission}
                    >

                      <option>Automatic</option>
                      <option>Manual</option>
                    </TextField>
                    {touched.transmission && errors.transmission && (
                      <div className={classes.inputError}>
                        {errors.transmission}
                      </div>
                    )}
                  </div>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  item
                  style={{ padding: "0 1rem" }}
                >
                  <div style={{ minHeight: "70px" }}>
                    <TextField
                      name="description"
                      error={touched.description && errors.description}
                      multiline
                      placeholder="description"
                      label="description"
                      size="small"
                      fullWidth
                      variant="outlined"
                      value={values.description}
                      onChange={handleChange}
                    />
                    {touched.description && errors.description && (
                      <div className={classes.inputError}>
                        {errors.description}
                      </div>
                    )}
                  </div>
                </Grid>
                <div className={classes.buttonDiv}>
                  <Link href="/"><Button type="button" variant="outlined" color="secondary">Back to main</Button></Link>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Create car
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Paper>
  );
}
