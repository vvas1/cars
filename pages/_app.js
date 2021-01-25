import "../styles/globals.css";
import PropTypes from "prop-types";
import { useMachine } from "@xstate/react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainContext } from "../context/mainContext";
import { carMachine } from "../machines/car-machine";
import "react-toastify/dist/ReactToastify.css";

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
      toast,
    }}
    >
      <Component {...pageProps} />
      <ToastContainer />
    </MainContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
