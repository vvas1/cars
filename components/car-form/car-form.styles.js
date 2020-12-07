const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    width: "60vw",
    margin: "auto",
    height: "100%",
    "@media (max-width:1280px)": {
      width: "80vw",
    },
    "@media (max-width:768px)": {
      width: "100vw",
    },
  },
  image: (props) => ({
    alignSelf: "stretch",
    background: `url(${props.photo}) no-repeat center`,
    backgroundSize: "cover",
    "@media (max-width:960px)": {
      height: "25vw",
    },
    "@media (max-width:500px)": {
      height: "60vw",
    },
  }),
  inputMargin: {
    margin: 0,
    height: "70px",
  },
  inputError: {
    color: "red",
  },
  buttonDiv: {

    display: "flex",
    justifyContent: "space-between",
    "& button": {
      margin: "0 1rem",
    },
  },
}));
