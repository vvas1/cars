import '../styles/globals.css'
import PropTypes from 'prop-types';

MyApp.propTypes = {
  Component: PropTypes.objectOf({}).isRequired,
  pageProps: PropTypes.objectOf({}).isRequired,

}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
