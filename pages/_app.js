
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'suneditor/dist/css/suneditor.min.css'; 
import 'react-image-crop/dist/ReactCrop.css';
import "suneditor/src/assets/css/suneditor-contents.css";
import '../styles/main.scss'
import 'aos/dist/aos.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AOS from 'aos';
import { useEffect } from 'react';
config.autoAddCss = false



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      duration: 2000,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
