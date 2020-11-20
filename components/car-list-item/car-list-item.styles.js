const { makeStyles } = require('@material-ui/core');

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem',
    border: '0.2px solid black',
    borderRadius: '4px',
    paddingLeft: '0.5rem',
    '@media (max-width:1000px)': {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: '0',
    },
  },
  photo: {
    width: '270px',
    transition: '0.2s',
    '@media (max-width:1000px)': {
      marginTop: '0.5rem',
      transition: '0.5s',
    },
    '@media (max-width: 1000px)': {
      width: '300px',
      transition: '0.5s',
    },
    '@media (max-width: 700px)': {
      width: '200px',
      transition: '0.5s',
    },
    '@media (max-width: 500px)': {
      width: '250px',
      transition: '0.5s',
    },
  },
  textDiv: {
    height: '220px',
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
    '@media (max-width:1000px)': {
      justifyContent: 'center',
      marginBottom: '1rem',
    },
  },
  carTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    transition:'0.5s',
    '@media (max-width:1000px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign:'center'
    },
  },
  year: {
    marginLeft: '0.5rem',
    height: '100%',
    '@media (max-width:1000px)': {
      textAlign: 'center',
    },
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
