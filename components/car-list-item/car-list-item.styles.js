const { makeStyles } = require('@material-ui/core');

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem',
    border: '0.2px solid black',
    borderRadius: '4px',
    paddingLeft: '0.5rem',
  },
  photo: {
    width: '250px',
  },
  textDiv: {
    height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '0.5rem',

    height: 'auto',
    '& button': {
      backgroundColor: 'darkblue',
      cursor: 'pointer',
      color: 'white',
    },
    '& button:hover': { backgroundColor: 'darkblue', fontWeight: 900 },
  },
  carTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
  },
  year: {
    marginLeft: '0.5rem',
    height: '100%',
  },
  fontWeight900: {
    fontWeight: 900,
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'green',
  },
});
