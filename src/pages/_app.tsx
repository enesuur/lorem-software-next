import "@/styles/globals.css"
import "@/styles/customSwal.css";
import "swiper/swiper-bundle.css"; 
import { Provider } from 'react-redux';
import { store } from "../store/store";
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp;