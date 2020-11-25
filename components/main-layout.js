import Head from "next/head";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import DialogWindow from "./dialog-window";
import Header from "./header";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {children}
      </main>
      <DialogWindow open={open} handleClose={handleClose} dialogText="are you sure you want to delete the car?" />
      <footer onClick={handleClickOpen} className={styles.footer}>
        Copyright &copy; SoftServe 2020
      </footer>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.shape(PropTypes.elementType).isRequired,
};
