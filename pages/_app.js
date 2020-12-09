import "../styles/globals.css";
import PropTypes from "prop-types";
import { useMachine } from "@xstate/react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainContext } from "../context/mainContext";
import { carMachine } from "../machines/car-machine";

function MyApp({
  Component,
  pageProps,
}) {
  const [state, send] = useMachine(carMachine);
  const router = useRouter();
  useEffect(() => {
    if (router.route === "/") {
      send({ type: "CLEAR_FILTER" });
    }
  }, [router.route]);

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
