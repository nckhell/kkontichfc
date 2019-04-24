/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, prefixURL } from "next-prefixed";
import Head from "next/head";

import React from "react";

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
        <nav>
          <div>
            <img
              src={prefixURL("/static/img/full_logo.svg")}
              className="h-32 md:h-48"
              alt="Kevin Bal Kinesitherapie"
            />
          </div>
          <div>
            <Link href="/">
              <a
                title="Home"
                className={`${
                  activePath === "home" ? "underline " : "no-underline "
                }block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12`}
              >
                Home
              </a>
            </Link>
            <Link href="/heren/1e-provinciale/klassement/">
              <a
                title="Home"
                className={`${
                  activePath === "home" ? "underline " : "no-underline "
                }block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12`}
              >
                Klassement
              </a>
            </Link>
            <Link href="/info/bestuur/">
              <a
                title="Home"
                className={`${
                  activePath === "home" ? "underline " : "no-underline "
                }block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12`}
              >
                Bestuur
              </a>
            </Link>
            <Link href="/jeugd/trainers/">
              <a
                title="Home"
                className={`${
                  activePath === "home" ? "underline " : "no-underline "
                }block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12`}
              >
                Trainers
              </a>
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
