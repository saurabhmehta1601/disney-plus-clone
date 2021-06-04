import "../styles/globals.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header"
import Head from "next/head"

import store from "../vendors/redux/store"
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }) {
  return  (<>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  </Head>
  <Provider store={store}>
  <Header />
  <Component {...pageProps} />
  </Provider>
  </>)
  }

export default MyApp


