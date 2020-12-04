const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    transition: "0.3s ease-in-out",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: "100%",
    display: "grid",
    alignItems: "stretch",

    "@media (max-width:959px)": {
      height: "17vw",
    },
    "@media (min-width:320px)": {
      height: "100%",
    },
  },
  image: (props) => ({
    alignSelf: "stretch",
    background: `url(${props.photo}) no-repeat center`,
    backgroundSize: "cover",
    "@media (max-width:959px)": {
      height: "25vw",
    },
    "@media (max-width:500px)": {
      height: "60vw",
    },
  }),
  textDiv: {
    padding: "0 0 0 8px !important",
    "@media (max-width:959px)": {
      padding: "8px 0 !important",
    },
  },
  buttonDiv: {
    padding: "8px !important",
    "& button": {
      padding: "0.5rem",
      backgroundColor: "darkblue",
      color: "white",
    },
    "& button:hover": {
      backgroundColor: "blue",
    },
  },
}));
