import App from "next/app";
import React from "react";
import NextSeo from "next-seo";
import DefaultSeo from "../settings/next-seo.config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <NextSeo config={DefaultSeo} />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
