import App, { Container } from "next/app";
import React from "react";
import NextSeo from "next-seo";
import DefaultSeo from "../settings/next-seo.config";
import "react-app-polyfill/ie9";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={DefaultSeo} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
