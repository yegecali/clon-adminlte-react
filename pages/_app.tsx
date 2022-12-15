import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/Global";
import store from "../redux/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
