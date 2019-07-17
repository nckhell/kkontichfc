import React, { Component } from "react";
import { prefixURL } from "next-prefixed";
import NextSeo from "next-seo";
import { Formik } from "formik";
import * as Yup from "yup";
import Recaptcha from "react-recaptcha";
import post from "../src/services/api/post";
import Layout from "../src/components/layout/Layout";
import BreadCrumb from "../src/components/breadcrumbs/BreadCrumb";
import YouthInscriptionSucces from "../src/components/form/YouthInscriptionSucces";

// eslint-disable-next-line react/prefer-stateless-function
class OnlineRegistrationPage extends Component {
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

    return (
      <Layout showGrassHeader>
        <NextSeo
          config={{
            title: "Online registratie | Jeugd",
            description: `Online registratie voor de jeugd van K. Kontich F.C.`,
            canonical: `https://kkontichfc.be/info/bestuur`,
            openGraph: {
              type: "website",
              locale: "nl_BE",
              url: "https://kkontichfc.be/info/bestuur",
              title: "Bestuur | Info | K. Kontich F.C.",
              description: "Een overzicht van het bestuur van K. Kontich F.C."
            }
          }}
        />
        <div id="kkfc-background-logo">
          <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
            <div className="w-full">
              <BreadCrumb
                data={[
                  { title: "Jeugd", url: "jeugd" },
                  { title: "Online registratie", url: "online_registratie" }
                ]}
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
            <div className="body-content w-full">
              <h1 className="leading-snug font-normal text-5xl normal-case pb-6 inline-block lg:w-4/6">
                Online registratie
              </h1>
              <p>
                Vul onderstaande gegevens in om een registratieprocedure in gang
                te zetten. Wanneer wij alle gegevens correct ontvangen hebben en
                na ontvangst van het lidgeld, moeten we enkel nog kort afspreken
                om de details te overlopen en de aansluiting bij de club in orde
                te brengen.
              </p>
            </div>
            <Formik
              initialValues={{
                recaptcha: "",
                firstname: "",
                lastname: "",
                sex: "",
                address: "",
                postal: "",
                city: "",
                tel: "",
                birthDate: "",
                birthPlace: "",
                nationality: "",
                RRN: "",
                legalRepresentative: "",
                email: "",
                landOfOrigin: "",
                adressAbroad: "",
                dateOfArrivalInBelgium: "",
                previousClub: "",
                position: "",
                bankNumber: "",
                affiliatedWithOtherClub: "",
                diseaseAndMedication: "",
                remarks: ""
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  post("https://api.kkontichfc.be/youth-inscriptions", values)
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
                firstname: Yup.string().required(requiredMessage),
                lastname: Yup.string().required(requiredMessage),
                sex: Yup.string().required(requiredMessage),
                address: Yup.string().required(requiredMessage),
                postal: Yup.number().required(requiredMessage),
                city: Yup.string().required(requiredMessage),
                tel: Yup.string().required(requiredMessage),
                birthDate: Yup.string().required(requiredMessage),
                birthPlace: Yup.string().required(requiredMessage),
                nationality: Yup.string().required(requiredMessage),
                RRN: Yup.string().required(requiredMessage),
                legalRepresentative: Yup.string().required(requiredMessage),
                email: Yup.string()
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
                    {success && <YouthInscriptionSucces />}
                    <div className="lg:flex">
                      <div className="lg:w-4/12">
                        <h2 className="lg:text-2xl">Persoonlijke gegevens</h2>
                      </div>
                      <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                        <div>
                          <label htmlFor="firstname">Voornaam</label>
                          <input
                            disabled={success}
                            id="firstname"
                            placeholder="Voornaam"
                            type="text"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.firstname && touched.firstname
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.firstname && touched.firstname && (
                            <div className="input-feedback">
                              {errors.firstname}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="lastname">Achternaam</label>
                          <input
                            disabled={success}
                            id="lastname"
                            placeholder="Achternaam"
                            type="text"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.lastname && touched.lastname
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.lastname && touched.lastname && (
                            <div className="input-feedback">
                              {errors.lastname}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="sex">Geslacht</label>
                          <select
                            name="sex"
                            value={values.sex}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.sex && touched.sex
                                ? "text-input error"
                                : "text-input"
                            }
                          >
                            <option value="" label="Selecteer geslacht" />
                            <option value="M" label="Jongen" />
                            <option value="F" label="Meisje" />
                          </select>
                          {errors.sex && touched.sex && (
                            <div className="input-feedback">{errors.sex}</div>
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
                            <div className="input-feedback">{errors.email}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="address">Adres</label>
                          <input
                            disabled={success}
                            id="address"
                            placeholder="Adres"
                            type="text"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.address && touched.address
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.address && touched.address && (
                            <div className="input-feedback">
                              {errors.address}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="postal">Postcode</label>
                          <input
                            disabled={success}
                            id="postal"
                            placeholder="Postcode"
                            type="text"
                            value={values.postal}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.postal && touched.postal
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.postal && touched.postal && (
                            <div className="input-feedback">
                              {errors.postal}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="city">Stad of Gemeente</label>
                          <input
                            disabled={success}
                            id="city"
                            placeholder="Stad of Gemeente"
                            type="text"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.city && touched.city
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.city && touched.city && (
                            <div className="input-feedback">{errors.city}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="tel">Telefoonnummer</label>
                          <input
                            disabled={success}
                            id="tel"
                            placeholder="Telefoon"
                            type="text"
                            value={values.tel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.tel && touched.tel
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.tel && touched.tel && (
                            <div className="input-feedback">{errors.tel}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="tel">Geboortedatum</label>
                          <input
                            disabled={success}
                            id="birthDate"
                            placeholder="Geboortedatum"
                            type="text"
                            value={values.birthDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.birthDate && touched.birthDate
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.birthDate && touched.birthDate && (
                            <div className="input-feedback">
                              {errors.birthDate}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="birthPlace">Geboorteplaats</label>
                          <input
                            disabled={success}
                            id="birthPlace"
                            placeholder="Geboorteplaats"
                            type="text"
                            value={values.birthPlace}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.birthPlace && touched.birthPlace
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.birthPlace && touched.birthPlace && (
                            <div className="input-feedback">
                              {errors.birthPlace}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="nationality">Nationaliteit</label>
                          <input
                            disabled={success}
                            id="nationality"
                            placeholder="Nationaliteit"
                            type="text"
                            value={values.nationality}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.nationality && touched.nationality
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.nationality && touched.nationality && (
                            <div className="input-feedback">
                              {errors.nationality}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="RRN">Rijksregisternummer</label>
                          <input
                            disabled={success}
                            id="RRN"
                            placeholder="Rijksregisternummer"
                            type="text"
                            value={values.RRN}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.RRN && touched.RRN
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.RRN && touched.RRN && (
                            <div className="input-feedback">{errors.RRN}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="legalRepresentative">
                            Wettelijk vertegenwoordiger
                          </label>
                          <input
                            disabled={success}
                            id="legalRepresentative"
                            placeholder="Wettelijk vertegenwoordiger"
                            type="text"
                            value={values.legalRepresentative}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.legalRepresentative &&
                              touched.legalRepresentative
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.legalRepresentative &&
                            touched.legalRepresentative && (
                              <div className="input-feedback">
                                {errors.legalRepresentative}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-12 lg:flex">
                      <div className="lg:w-4/12">
                        <h2 className="lg:text-2xl">
                          Indien vreemde nationaliteit
                        </h2>
                      </div>
                      <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                        <div>
                          <label htmlFor="landOfOrigin">
                            Land van herkomst
                          </label>
                          <input
                            disabled={success}
                            id="landOfOrigin"
                            placeholder="Land van herkomst"
                            type="text"
                            value={values.landOfOrigin}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.landOfOrigin && touched.landOfOrigin
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.landOfOrigin && touched.landOfOrigin && (
                            <div className="input-feedback">
                              {errors.landOfOrigin}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="adressAbroad">
                            Vorig adres in het buitenland
                          </label>
                          <input
                            disabled={success}
                            id="adressAbroad"
                            placeholder="Vorig adres in het buitenland"
                            type="text"
                            value={values.adressAbroad}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.adressAbroad && touched.adressAbroad
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.adressAbroad && touched.adressAbroad && (
                            <div className="input-feedback">
                              {errors.adressAbroad}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="dateOfArrivalInBelgium">
                            Datum aankomst België
                          </label>
                          <input
                            disabled={success}
                            id="dateOfArrivalInBelgium"
                            placeholder="Datum aankomst België"
                            type="text"
                            value={values.dateOfArrivalInBelgium}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.dateOfArrivalInBelgium &&
                              touched.dateOfArrivalInBelgium
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.dateOfArrivalInBelgium &&
                            touched.dateOfArrivalInBelgium && (
                              <div className="input-feedback">
                                {errors.dateOfArrivalInBelgium}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-12 lg:flex">
                      <div className="lg:w-4/12">
                        <h2 className="lg:text-2xl">Extra informatie</h2>
                      </div>
                      <div className="input__fields lg:w-8/12 lg:flex lg:justify-between flex-wrap">
                        <div>
                          <label htmlFor="previousClub">Vorige club</label>
                          <input
                            disabled={success}
                            id="previousClub"
                            placeholder="Vorige club"
                            type="text"
                            value={values.previousClub}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.previousClub && touched.previousClub
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.previousClub && touched.previousClub && (
                            <div className="input-feedback">
                              {errors.previousClub}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="position">Standaardpositie</label>
                          <input
                            disabled={success}
                            id="position"
                            placeholder="Standaardpositie"
                            type="text"
                            value={values.position}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.position && touched.position
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.position && touched.position && (
                            <div className="input-feedback">
                              {errors.position}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="bankNumber">Rekeningnummer</label>
                          <input
                            disabled={success}
                            id="bankNumber"
                            placeholder="Rekeningnummer"
                            type="text"
                            value={values.bankNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.bankNumber && touched.bankNumber
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.bankNumber && touched.bankNumber && (
                            <div className="input-feedback">
                              {errors.bankNumber}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="affiliatedWithOtherClub">
                            Nog aangesloten bij vorige club
                          </label>
                          <select
                            name="affiliatedWithOtherClub"
                            value={values.affiliatedWithOtherClub}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.affiliatedWithOtherClub &&
                              touched.affiliatedWithOtherClub
                                ? "text-input error"
                                : "text-input"
                            }
                          >
                            <option value="" label="Selecteer" />
                            <option value="N" label="Nee" />
                            <option value="Y" label="Ja" />
                          </select>
                          {errors.affiliatedWithOtherClub &&
                            touched.affiliatedWithOtherClub && (
                              <div className="input-feedback">
                                {errors.affiliatedWithOtherClub}
                              </div>
                            )}
                        </div>
                        <div>
                          <label htmlFor="diseaseAndMedication">
                            Ziekte en/of medicatie
                          </label>
                          <textarea
                            disabled={success}
                            id="diseaseAndMedication"
                            placeholder="Ziekte en/of medicatie"
                            type="text"
                            value={values.diseaseAndMedication}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.diseaseAndMedication &&
                              touched.diseaseAndMedication
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.diseaseAndMedication &&
                            touched.diseaseAndMedication && (
                              <div className="input-feedback">
                                {errors.diseaseAndMedication}
                              </div>
                            )}
                        </div>
                        <div>
                          <label htmlFor="diseaseAndMedication">
                            Opmerkingen
                          </label>
                          <textarea
                            disabled={success}
                            id="remarks"
                            placeholder="Ziekte en/of medicatie"
                            type="text"
                            value={values.remarks}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.remarks && touched.remarks
                                ? "text-input error"
                                : "text-input"
                            }
                          />
                          {errors.remarks && touched.remarks && (
                            <div className="input-feedback">
                              {errors.remarks}
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
                        <p className="text-gray-300 text-sm italic">
                          Door het versturen van het formulier gaat u ermee
                          akkoord dat uw persoonsgegevens worden verwerkt en
                          opgenomen in ons bestand. Deze gegevens zullen door
                          ons vertrouwelijk worden behandeld en uitsluitend
                          worden gebruikt voor de inschrijving van nieuwe
                          spelers. Wij zullen geen informatie verstrekken aan
                          derden, tenzij wij daartoe op grond van de wet
                          verplicht zijn. Wij zullen uw gegevens direct
                          verwijderen uit ons bestand zodra u ons daarom
                          verzoekt.
                        </p>
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
                          Verzenden
                        </button>
                      )}
                      {success && (
                        <div className="btn success">
                          Inschrijving ontvangen!
                        </div>
                      )}
                    </div>
                    {success && <YouthInscriptionSucces />}
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

export default OnlineRegistrationPage;
