import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { Formik } from "formik";
import * as Yup from "yup";
import Recaptcha from "react-recaptcha";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";

// eslint-disable-next-line react/prefer-stateless-function
class PaastornooiRegistrationPage extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    const requiredMessage = "Verplicht veld";

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Online registratie | Paastornooi | Jeugd",
            description: `Online registratie voor het Paastornooi (Volvo Vermant Cup) van K. Kontich F.C.`,
            canonical: `https://kkontichfc.be/info/bestuur`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://kkontichfc.be/jeugd/paastornooi/online-registratie",
              title:
                "Online registratie | Paastornooi | Jeugd | K. Kontich F.C.",
              description:
                "Online registratie voor het Paastornooi (Volvo Vermant Cup) van K. Kontich F.C."
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full">
              <BreadCrumb
                data={[
                  { title: "Jeugd", url: "jeugd" },
                  { title: "Paastornooi", url: "paatornooi" },
                  { title: "Online registratie", url: "online_registratie" }
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full">
              <h1 className="leading-snug font-normal text-5xl normal-case pb-6 inline-block mb-8">
                Online registratie Volvo Vermant Cup
              </h1>
            </div>
            <Formik
              initialValues={{
                recaptcha: "",
                gc: "",
                club: "",
                stamnummer: "",
                shirtColor: "",
                pantsColor: "",
                team: "",
                contactName: "",
                contactAddress: "",
                contactTel: "",
                contactEmail: ""
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                recaptcha: Yup.string().required(
                  "Zorg ervoor dat je bovenstaande checkbox aanduidt"
                ),
                gc: Yup.string().required(requiredMessage),
                club: Yup.string().required(requiredMessage),
                stamnummer: Yup.number(
                  "Stamnummer moet een getal zijn"
                ).required(requiredMessage),
                shirtColor: Yup.string().required(requiredMessage),
                pantsColor: Yup.string().required(requiredMessage),
                team: Yup.string().required(requiredMessage),
                contactName: Yup.string().required(requiredMessage),
                contactAddress: Yup.string().required(requiredMessage),
                contactTel: Yup.string().required(requiredMessage),
                contactEmail: Yup.string()
                  .email("Email moet een geldig emailadres zijn")
                  .required(requiredMessage)
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
                    <div className="lg:flex">
                      <div className="lg:w-4/12">
                        <h2 className="lg:text-2xl">Clubinformatie</h2>
                      </div>
                      <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                        <div>
                          <label htmlFor="gc">Gerechtigd correspondent</label>
                          <input
                            id="gc"
                            placeholder="Gerechtigd correspondent"
                            type="text"
                            value={values.gc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.gc && touched.gc
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.gc && touched.gc && (
                            <div className="input-feedback">{errors.gc}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="club">Club</label>
                          <input
                            id="club"
                            placeholder="Club"
                            type="text"
                            value={values.club}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.club && touched.club
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.club && touched.club && (
                            <div className="input-feedback">{errors.club}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="stamnummer">Stamnummer</label>
                          <input
                            id="stamnummer"
                            placeholder="Stamnummer"
                            type="text"
                            value={values.stamnummer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.stamnummer && touched.stamnummer
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.stamnummer && touched.stamnummer && (
                            <div className="input-feedback">
                              {errors.stamnummer}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="shirtColor">Kleur shirts</label>
                          <input
                            id="shirtColor"
                            placeholder="Kleur shirts"
                            type="text"
                            value={values.shirtColor}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.shirtColor && touched.shirtColor
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.shirtColor && touched.shirtColor && (
                            <div className="input-feedback">
                              {errors.shirtColor}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="pantsColor">Kleur broeken</label>
                          <input
                            id="pantsColor"
                            placeholder="Kleur broeken"
                            type="text"
                            value={values.pantsColor}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.pantsColor && touched.pantsColor
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.pantsColor && touched.pantsColor && (
                            <div className="input-feedback">
                              {errors.pantsColor}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="team">Team</label>
                          <select
                            name="team"
                            value={values.team}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.team && touched.team
                                ? "text-input error"
                                : "text-input"
                            }
                          >
                            <option value="" label="Selecteer team" />
                            <option value="U6" label="U6" />
                            <option value="U7" label="U7" />
                            <option value="U8" label="U8" />
                            <option value="U9" label="U9" />
                            <option value="U10" label="U10" />
                            <option value="U11" label="U11" />
                            <option value="U12" label="U12" />
                            <option value="U13" label="U13" />
                          </select>
                          {errors.team && touched.team && (
                            <div className="input-feedback">{errors.team}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-12 lg:flex">
                      <div className="lg:w-4/12">
                        <h2 className="lg:text-2xl">Contactinformatie</h2>
                      </div>
                      <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                        <div>
                          <label htmlFor="contactName">
                            Naam contactpersoon
                          </label>
                          <input
                            id="contactName"
                            placeholder="Naam contactpersoon"
                            type="text"
                            value={values.contactName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.contactName && touched.contactName
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.contactName && touched.contactName && (
                            <div className="input-feedback">
                              {errors.contactName}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contactAddress">
                            Adres contactpersoon
                          </label>
                          <input
                            id="contactAddress"
                            placeholder="Adres contactpersoon"
                            type="text"
                            value={values.contactAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.contactAddress && touched.contactAddress
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.contactAddress && touched.contactAddress && (
                            <div className="input-feedback">
                              {errors.contactAddress}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contactTel">
                            Telefoon contactpersoon
                          </label>
                          <input
                            id="contactTel"
                            placeholder="Telefoon contactpersoon"
                            type="text"
                            value={values.contactTel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.contactTel && touched.contactTel
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.contactTel && touched.contactTel && (
                            <div className="input-feedback">
                              {errors.contactTel}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contactEmail">
                            Email contactpersoon
                          </label>
                          <input
                            id="contactEmail"
                            placeholder="Email contactpersoon"
                            type="text"
                            value={values.contactEmail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.contactEmail && touched.contactEmail
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.contactEmail && touched.contactEmail && (
                            <div className="input-feedback">
                              {errors.contactEmail}
                            </div>
                          )}
                        </div>
                        <div>
                          <Recaptcha
                            // KKFC sitekey="6LfEsWQUAAAAAIuiUIzvT5G0VZOJXXGsS5HhUdyZ"
                            sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
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
                    </div>
                    <div className="my-8 flex justify-end">
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        Verzenden
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
      </Layout>
    );
  }
}

export default PaastornooiRegistrationPage;
