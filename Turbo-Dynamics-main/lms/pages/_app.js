import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import ContactUs from "../pages/contact-us";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <ContactUs />
      </ChakraProvider>
    </Provider>
  );
}
