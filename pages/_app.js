import "../styles/globals.css";
import PropTypes from "prop-types";
import { useMachine } from "@xstate/react";

import { MainContext } from "../context/mainContext";
import { carMachine } from "../machines/car-machine";

function MyApp({ Component, pageProps }) {
  const [state, send] = useMachine(carMachine);

  return (
    <MainContext.Provider value={{
      state,
      send,
    }}
    >
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
