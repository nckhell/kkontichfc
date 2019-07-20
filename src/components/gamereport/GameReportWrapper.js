/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like, Comments } from "react-facebook";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import BreadCrumb from "../breadcrumbs/BreadCrumb";
import GameReportHeader from "./GameReportHeader";
import TimeLine from "./TimeLine";
import { formatDate, formatTime } from "../../utils/dateTimeFormat";
import fetch from "../../services/api/fetch";

class GameReportWrapper extends Component {
  state = {
    isLoading: true,
    gameDetails: [],
    error: null
  };

  componentDidMount() {
    this.fetchMatchDetails();
  }

  fetchMatchDetails() {
    const { gameReportData } = this.props;

    fetch(gameReportData.graphQL)
      .then(data =>
        this.setState({
          gameDetails: data.data.matchDetail,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { gameDetails, isLoading, error } = this.state;
    const { gameReportData, query } = this.props;

    const href = `${query.fullUrl}`;

    if (!isLoading) {
      return (
        <div>
          <GameReportHeader gameDetails={gameDetails} />
          <div id="kkfc-background-logo">
            <div className="px-4 mt-8 md:mt-10 lg:mt-16 container mx-auto text-left">
              <div className="w-full mx-auto lg:w-5/6">
                <BreadCrumb
                  data={[
                    { title: "wedstrijdverslagen", url: "wedstrijdverslagen" },
                    { title: "heren 1e. Prov.", url: "" },
                    { title: gameReportData.title, url: "" }
                  ]}
                />
              </div>
            </div>
            <div className="px-4 mt-4 md:mt-5 lg:mt-8 container mx-auto text-left">
              <div className="body-content w-full mx-auto lg:w-5/6">
                <h1 className="pb-6 inline-block lg:w-4/6">
                  {gameReportData.title}
                </h1>
                {gameReportData.cloudinaryID && (
                  <figure className="mb-8">
                    <CloudinaryContext cloudName="kkontichfc">
                      <Image
                        className="w-full h-auto"
                        publicId={`wedstrijdverslagen/${gameReportData.cloudinaryID}`}
                        alt={gameReportData.title}
                        secure
                      >
                        <Transformation width="800" height="600" crop="fill" />
                      </Image>
                    </CloudinaryContext>
                    <figcaption className="italic text-base text-gray-300">
                      {gameReportData.figCaption}
                    </figcaption>
                  </figure>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: gameReportData.bodyHtml
                  }}
                />
                <FacebookProvider appId="346435965433483">
                  <div className="my-6">
                    <Like
                      href={`https://www.kkontichfc.be${href}`}
                      colorScheme="dark"
                      size="large"
                      showFaces
                      share
                    />
                  </div>
                  <Comments
                    href={`https://www.kkontichfc.be${href}`}
                    width="100%"
                    numPosts="10"
                  />
                </FacebookProvider>
              </div>
            </div>
            <img
              className="logo-kkfc-in-background"
              src={prefixURL("/static/img/kkontichfc.svg")}
              alt="K. Kontich F.C."
            />
          </div>
          <div className="spacer mb-16 md:mb-24"></div>
        </div>
      );
    }
    return <p>Loading</p>;
  }
}

GameReportWrapper.propTypes = {
  gameReportData: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired
};

export default GameReportWrapper;
