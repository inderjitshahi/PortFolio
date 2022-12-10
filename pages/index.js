import React, { Fragment } from 'react'
import Component from '../components/Component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  return (
    <Fragment>
      <ToastContainer />
      <Component />
    </Fragment>
  );
}

export default Home;