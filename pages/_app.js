import { useEffect, useState } from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";
import { useMachine } from "@xstate/react";
import Router from "next/router";
import { CircularProgress } from "@material-ui/core";
import { MainContext } from "../context/mainContext";
import { carMachine } from "../machines/car-machine";

function MyApp({ Component, pageProps }) {
  const [state, send] = useMachine(carMachine);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (

    <>
      {loading ? (
        <div style={{
          width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
        }}
        >
          <CircularProgress />
        </div>
      ) : (
        <MainContext.Provider value={{
          state,
          send,
        }}
        >
          <Component {...pageProps} />
        </MainContext.Provider>
      )}
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
