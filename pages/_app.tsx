// pages/_app.js
import withRedux from "next-redux-wrapper";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { makeStore, StoreState } from "../reducer/index";

interface Props {
  store: StoreState;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    ctx.store.dispatch({ type: "FOO", payload: "fooboo" });
    if (ctx.req) {
      ctx.store.dispatch({ type: "HOST", payload: ctx.req.headers.host });
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore, { debug: true })(MyApp);
