const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: "100%",
    display: "grid",
    alignItems: "stretch",
    minHeight: "10rem",

  },
  image: (props) => ({
    alignSelf: "stretch",
    background: `url(${props.photo}) no-repeat center`,
    backgroundSize: "cover",
    minHeight: "10vh",
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
