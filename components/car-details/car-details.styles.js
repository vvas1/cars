import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    margin: "1rem",
    display: "grid",
    padding: "0.5rem",
    width: "60vw",
    gridTemplateAreas: "\"image text\"",
    "@media (max-width:1280px)": {
      width: "100%",
    },
    "@media (max-width:1000px)": {
      gridTemplateAreas: "\"image\" \"text\"",
    },
  },
  image: {
    transition: "0.5s",
    gridArea: "image",
    display: "grid",
  },
  img: {
    height: "auto",
    transition: "0.3s ease-in-out",
    width: "100%",
  },
  text: {
    display: "grid",
    gridArea: "text",
    listStyle: "none",
    padding: "0 1rem",
    alignSelf: "stretch",
    transition: "0.3s ease-in-out",
    "@media (max-width:1000px)": {
      padding: "1rem 0 0",
    },
  },
  deleteButton: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    alignSelf: "end",
    "& button": {
      backgroundColor: "darkblue",
      color: "white",
    },
    "& button:hover": {
      backgroundColor: "darkblue",
    },
  },
});
