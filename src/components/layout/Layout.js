/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Head from "next/head";
import { prefixURL } from "next-prefixed";
import Menu from "./Menu";

const Layout = props => {
  const {
    children,
    activePath = "home",
    title = "Welkom",
    description = ""
  } = props;

  return (
    <div>
      <Head>
        <title>{title} | K. Kontich F.C.</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={prefixURL("/static/img/favicon.ico")}
        />
      </Head>
      <header>
        <Menu />
      </header>
      {children}
    </div>
  );
};

export default Layout;
