import Head from "next/head";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import DialogWindow from "./dialog-window";
import Header from "./header";

export default function MainLayout({ children }) {
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
      <DialogWindow />
      <footer className={styles.footer}>
        &copy; 2020 SoftServe
      </footer>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.shape(PropTypes.elementType).isRequired,
};
