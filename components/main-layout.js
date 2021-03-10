import Head from "next/head";
import Paper from "@material-ui/core/Paper";
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

      <Paper className={styles.main}>
        {children}
      </Paper>
      <DialogWindow />
      <footer className={styles.footer}>
        &copy; {`${new Date().getFullYear()} SoftServe`}
      </footer>
    </>
  );
}
