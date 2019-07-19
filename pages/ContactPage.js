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
            canonical: `https://www.kkontichfc.be/info/contact`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: `https://www.kkontichfc.be/info/contact`,
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
                <Formik
                  initialValues={{
                    recaptcha: "",
                    name: "",
                    email: "",
                    message: ""
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      post("https://api.kkontichfc.be/contact", values)
                        .then(() => {
                          this.setState({ success: true });
                        })
                        .catch(error => {
                          if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                          } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                          } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log("Error", error.message);
                          }
                          console.log(error.config);
                        });
                      setSubmitting(false);
                    }, 500);
                  }}
                  validationSchema={Yup.object().shape({
                    recaptcha: Yup.string().required(
                      "Zorg ervoor dat je bovenstaande checkbox aanduidt"
                    ),
                    name: Yup.string().required(requiredMessage),
                    email: Yup.string()
                      .email("Email moet een geldig emailadres zijn")
                      .required(requiredMessage),
                    message: Yup.string().required(requiredMessage)
                  })}
                >
                  {props => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue
                    } = props;
                    return (
                      <form className="form__style" onSubmit={handleSubmit}>
                        <div className="input__fields full-width">
                          <div>
                            <label htmlFor="name">Naam</label>
                            <input
                              disabled={success}
                              id="name"
                              placeholder="Naam"
                              type="text"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.name && touched.name
                                  ? "text-input error"
                                  : "text-input"
                              }
                            />
                            {errors.name && touched.name && (
                              <div className="input-feedback">
                                {errors.name}
                              </div>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email">Email</label>
                            <input
                              disabled={success}
                              id="email"
                              placeholder="Email"
                              type="text"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.email && touched.email
                                  ? "text-input error"
                                  : "text-input"
                              }
                            />
                            {errors.email && touched.email && (
                              <div className="input-feedback">
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div>
                            <label htmlFor="message">Bericht</label>
                            <textarea
                              id="message"
                              disabled={success}
                              placeholder="Bericht"
                              type="text"
                              value={values.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.message && touched.message
                                  ? "text-input error"
                                  : "text-input"
                              }
                            />
                            {errors.message && touched.message && (
                              <div className="input-feedback">
                                {errors.message}
                              </div>
                            )}
                          </div>
                          <div>
                            <Recaptcha
                              sitekey="6LfEsWQUAAAAAIuiUIzvT5G0VZOJXXGsS5HhUdyZ"
                              render="explicit"
                              verifyCallback={response => {
                                setFieldValue("recaptcha", response);
                              }}
                              onloadCallback={() => {
                                console.log("Recaptcha initialized.");
                              }}
                            />
                            {errors.recaptcha && touched.recaptcha && (
                              <div className="input-feedback">
                                {errors.recaptcha}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="my-8 flex justify-end items-center">
                          {!success && (
                            <button
                              type="submit"
                              className="btn text-base"
                              disabled={isSubmitting}
                            >
                              Verzenden
                            </button>
                          )}
                          {success && (
                            <div className="btn text-base success">
                              Bericht ontvangen!
                            </div>
                          )}
                        </div>
                      </form>
                    );
                  }}
                </Formik>
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
                  <p>
                    <strong>Webmaster:</strong>
                    <br />
                    <a
                      href="mailto:webmaster@kkontichfc.be"
                      title="webmaster@kkontichfc.be"
                    >
                      webmaster@kkontichfc.be
                    </a>{" "}
                    (enkel voor zaken gerelateerd aan de website of digitale
                    strategie van de club!)
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
