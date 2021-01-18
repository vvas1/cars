import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "end",
    margin: "1rem",
    display: "grid",
    padding: "0.5rem",
    maxWidth: "70vw",
    gridTemplateAreas: "'image text'",
    "@media (max-width:1280px)": {
      maxWidth: "80vw",
    },
    "@media (max-width:1000px)": {
      gridTemplateAreas: "'image' 'text'",
      maxWidth: "100%",
    },
  },
  img: {
    maxWidth: "100%",
    height: "30vw",
    "@media (max-width:1280px)": {
      maxWidth: "100%",
    },
    "@media (max-width:960px)": {
      height: "auto",
    },
  },
  textDiv: {
    padding: "1rem",
  },
  buttonDiv: {
    height: "2.5rem",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    alignSelf: "flex-end",
    "& button": {
      backgroundColor: "darkblue",
      color: "white",
    },
    "& button:hover": {
      backgroundColor: "darkblue",
    },
  },
  price: {
    color: "green",
    fontWeight: 700,
  },
});
