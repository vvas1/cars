const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    height: "8vw",

    "@media (max-width:2560px)": {
      height: "9vw",
    },
    "@media (max-width:1920px)": {
      height: "12vw",
    },
    "@media (max-width:1440px)": {
      height: "14vw",
    },

    "@media (max-width:1280px)": {
      height: "16vw",
    },
    "@media (max-width:1024px)": {
      height: "auto",
    },
  },
  imageContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: "100%",
    "@media (max-width:959px)": {
      height: "30vw",
    },
    "@media (max-width:500px)": {
      height: "100%",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    padding: "8px 0 8px 8px",
    "@media (max-width:959px)": {
      height: "30vw",
      padding: 0,
    },
    "@media (max-width:500px)": {
      height: "60vw",
    },
  },
  title: {
    fontSize: "1.1rem",
  },
  textContainer: {
    width: "100%",
    display: "grid",
    height: "100%",
    padding: "8px",
    "@media (max-width:959px)": {
      height: "auto",
    },
  },
  titleDiv: {
    height: "50%",
    "@media (max-width:959px)": {
      height: "10vw",
    },
  },

  price: {
    color: "green",
    fontWeight: 700,
  },
  buttonContainer: {
    width: "100%",
    display: "grid",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
}));
