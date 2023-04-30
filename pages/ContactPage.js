/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { FacebookProvider, Like } from "react-facebook";
import Recaptcha from "react-recaptcha";
import { Formik } from "formik";
import * as Yup from "yup";
import post from "../src/services/api/post";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import Map from "../src/components/google-maps/Map";

class ContactPage extends Component {
  state = {
    success: false
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    const { success } = this.state;

    const mapStyle = {
      height: "450px"
    };

    const requiredMessage = "Verplicht veld";

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: `Contact & Ligging | Info`,
            description: `Al de nodige contactgegevens en details over K. Kontich F.C.`,
            canonical: `https://www.kkontichfc.be/info/contact/`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: `https://www.kkontichfc.be/info/contact/`,
              title: `Contact | Info | K. Kontich F.C.`,
              description: `Al de nodige contactgegevens en details over K. Kontich F.C.`
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full mx-auto">
              <BreadCrumb
                data={[
                  { title: "info", url: "#" },
                  { title: "contact & ligging", url: "info/contact" }
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-4/12 body-content">
                <h1 className="pb-6 inline-block lg:w-4/6">Contact</h1>
                <p>
                  Voor vragen of meer informatie kan je ons een mailtje sturen
                  op <a href="mailto:info@kkontichfc.be">info@kkontichfc.be</a>.
                </p>
              </div>
              <div className="lg:w-7/12 lg:flex lg:justify-between flex-wrap">
                <div className="body-content w-full mx-auto">
                  <h1 className="pb-6 inline-block lg:w-4/6">Informatie</h1>
                  <p>
                    <strong>KBVB-stamnummer:</strong> 3029
                    <br />
                    <strong>Terreinen/maatschappelijke zetel:</strong>{" "}
                    Duffelsesteenweg 73, 2550 Kontich
                    <br />
                    <strong>Correspondentieadres:</strong> Helenaveldstraat 26,
                    2550 Kontich (Adres GC Knegtel theo)
                    <br />
                    <strong>Telefoon kantine:</strong> 03/457 10 09
                  </p>
                  <p>
                    <strong>Gerechtigd Correspondent:</strong>
                    <br /> 0475/81 18 80
                    <br /> 0495/90 33 00
                  </p>
                  <h2>Op de kaart</h2>
                  <div
                    style={mapStyle}
                    className="w-full relative overflow-hidden container m-auto"
                  >
                    <Map></Map>
                  </div>
                  <FacebookProvider appId="346435965433483">
                    <div className="my-6">
                      <Like
                        href="https://www.kkontichfc.be/info/contact"
                        colorScheme="dark"
                        size="large"
                        showFaces
                        share
                      />
                    </div>
                  </FacebookProvider>
                </div>
              </div>
            </div>
          </div>
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
        <div className="spacer mb-16 md:mb-24"></div>
      </Layout>
    );
  }
}

export default ContactPage;
