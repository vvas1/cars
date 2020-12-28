import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "end",
    margin: "1rem",
    display: "grid",
    padding: "0.5rem",
    maxWidth: "60vw",
    gridTemplateAreas: "\"image text\"",
    "@media (max-width:1280px)": {
      maxWidth: "80vw",
    },
    "@media (max-width:1000px)": {
      gridTemplateAreas: "\"image\" \"text\"",
      maxWidth: "100%",
    },
  },
  image: {
    minWidth: "30vw",
    transition: "0.5s",
    gridArea: "image",
    display: "grid",
    justifyContent: "center",
  },
  img: {
    maxHeigh: "100%",
    maxWidth: "100%",
  },
  text: {
    display: "grid",
    gridArea: "text",
    listStyle: "none",
    padding: "0 1rem",
    alignSelf: "stretch",
    transition: "0.3s ease-in-out",
    maxWidth: "20vw",
    "@media (max-width:1280px)": {
      maxWidth: "30vw",
    },
    "@media (max-width:1000px)": {
      padding: "1rem 0 0",
      maxWidth: "100%",
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
