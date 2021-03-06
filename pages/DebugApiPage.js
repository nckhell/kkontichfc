import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { Formik } from "formik";
import * as Yup from "yup";
import Recaptcha from "react-recaptcha";
import post from "../src/services/api/post";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import PaastornooiInscriptionSucces from "../src/components/form/PaastornooiInscriptionSucces";

// eslint-disable-next-line react/prefer-stateless-function
class PaastornooiRegistrationPage extends Component {
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
    const requiredMessage = "Verplicht veld";
    const { success } = this.state;

    const showInscription = true;

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Debug Api"
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full">
              <BreadCrumb
                data={[
                  {
                    title: "Debug api",
                    url: "#"
                  }
                ]}
              />
            </div>
          </div>
          {showInscription && (
            <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
              <div className="body-content w-full">
                <h1 className="leading-snug font-normal text-5xl normal-case pb-6 inline-block mb-8">
                  Online registratie voor onze 51 ste Vermant - Cup
                </h1>
                <div>
                  Het tornooi vindt plaats gespreid over 3 dagen:
                  <ul>
                    <li>
                      <u> Zondag 23 augustus 2020: </u> <b>U12</b> ( in de
                      voormiddag) & <b> U11 </b> (in de namiddag);
                    </li>
                    <li>
                      <u> Zaterdag 29 augustus 2020: </u> <b>U10</b> ( in de
                      voormiddag) & <b> U9 </b> (in de namiddag);
                    </li>
                    <li>
                      <u> Zondag 30 augustus 2020: </u> <b>U8</b> ( in de
                      voormiddag) & <b> U7 </b> (in de namiddag);
                    </li>
                  </ul>
                </div>
                <p>
                  Indien u problemen ondervindt met het online inschrijven raden
                  we u aan opnieuw te proberen met een moderne browser.Voor de
                  beste online ervaring bezoekt u onze website het best via de
                  <a
                    href="https://browsehappy.com/"
                    title="Google Chrome & Firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    laatste versies van Google Chrome, Safari of FireFox
                  </a>
                  .
                </p>
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
                    post(
                      "https://api.kkontichfc.be/paastornooi-inscriptions",
                      values
                    )
                      .then(() => {
                        this.setState({
                          success: true
                        });
                        setSubmitting(false);
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
                    isValid,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                  } = props;
                  return (
                    <form className="form__style" onSubmit={handleSubmit}>
                      {success && <PaastornooiInscriptionSucces />}
                      <div className="lg:flex">
                        <div className="lg:w-4/12">
                          <h2 className="lg:text-2xl"> Clubinformatie </h2>
                        </div>
                        <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                          <div>
                            <label htmlFor="gc">Gerechtigd correspondent</label>
                            <input
                              disabled={success}
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
                            <label htmlFor="club"> Club </label>
                            <input
                              disabled={success}
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
                              <div className="input-feedback">
                                {errors.club}
                              </div>
                            )}
                          </div>
                          <div>
                            <label htmlFor="stamnummer"> Stamnummer </label>
                            <input
                              disabled={success}
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
                            <label htmlFor="shirtColor"> Kleur shirts </label>
                            <input
                              disabled={success}
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
                            <label htmlFor="pantsColor"> Kleur broeken </label>
                            <input
                              disabled={success}
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
                            <label htmlFor="team"> Team </label>
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
                              {/* <option value="U6" label="U6" /> */}
                              <option value="U7" label="U7" />
                              <option value="U8" label="U8" />
                              <option value="U9" label="U9" />
                              <option value="U10" label="U10" />
                              <option value="U11" label="U11" />
                              <option value="U12" label="U12" />
                              {/* <option value="U13" label="U13" /> */}
                              {/* <option value="U13_dames" label="Meisjes U13" /> */}
                              {/* <option value="U16_dames" label="Meisjes U16" /> */}
                            </select>
                            {errors.team && touched.team && (
                              <div className="input-feedback">
                                {errors.team}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-8 lg:mt-12 lg:flex">
                        <div className="lg:w-4/12">
                          <h2 className="lg:text-2xl"> Contactinformatie </h2>
                        </div>
                        <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                          <div>
                            <label htmlFor="contactName">
                              Naam contactpersoon
                            </label>
                            <input
                              disabled={success}
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
                              disabled={success}
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
                            {errors.contactAddress &&
                              touched.contactAddress && (
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
                              disabled={success}
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
                              disabled={success}
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
                              sitekey="6LfEsWQUAAAAAIuiUIzvT5G0VZOJXXGsS5HhUdyZ"
                              // sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
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
                      <div className="my-8 flex justify-end items-center">
                        {!isValid && (
                          <div className="text-sm text-red-500 italic pr-8">
                            Het formulier is nog niet volledig correct ingevuld,
                            kijk het opnieuw na.
                          </div>
                        )}
                        {!success && (
                          <button
                            type="submit"
                            className="btn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Even geduld" : "Verzenden"}
                          </button>
                        )}
                        {success && (
                          <div className="btn success">
                            Inschrijving ontvangen!
                          </div>
                        )}
                      </div>
                      {success && <PaastornooiInscriptionSucces />}
                    </form>
                  );
                }}
              </Formik>
            </div>
          )}
          {!showInscription && (
            <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
              <div className="body-content w-full">
                <h1 className="leading-snug font-normal text-5xl normal-case pb-6 inline-block mb-8">
                  Online registratie voor onze 51 ste Vermant - Cup
                </h1>
                <p>
                  <b> 5 mei 2020: </b> We doen momenteel onderhoud aan onze
                  server waardoor inschrijven momenteel niet mogelijk is.Probeer
                  later deze week opniew.
                </p>
              </div>
            </div>
          )}
          <img
            className="logo-kkfc-in-background"
            src={prefixURL("/static/img/kkontichfc.svg")}
            alt="K. Kontich F.C."
          />
        </div>
        <div className="spacer mb-16 md:mb-24"> </div>
      </Layout>
    );
  }
}

export default PaastornooiRegistrationPage;
