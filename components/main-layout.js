import Head from 'next/head';
import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from '../styles/Home.module.css';
import DialogWindow from './dialog-window';
import Header from './header';

MainLayout.propTypes = {
  children: PropTypes.objectOf({}).isRequired,
}
export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false)
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
      <hr />
      <footer onClick={handleClickOpen} className={styles.footer}>

        footer  hello
      </footer>
    </>
  )
}
