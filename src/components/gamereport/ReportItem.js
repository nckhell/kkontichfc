/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import { prefixURL } from "next-prefixed";
import { FacebookProvider, Like } from "react-facebook";
import ReactSVG from "react-svg";
import { makeUrl } from "../../utils/gamereports";
import { formatDate } from "../../utils/dateTimeFormat";

const ReportItem = props => {
  const { data } = props;

  const href = makeUrl(data);
  const date = formatDate(data.date);
  let imageUrl;

  if (data.cloudinaryID) {
    imageUrl = `https://res.cloudinary.com/kkontichfc/image/upload/c_fit,h_391,q_90,w_632/wedstrijdverslagen/${data.cloudinaryID}`;
  } else {
    imageUrl = prefixURL("/static/img/no-news-image.png");
  }

  return (
    <article className="mb-4 w-full md:w-1/2 lg:w-1/3 md:px-2">
      <a
        href={prefixURL(href)}
        title={data.title}
        className="border border-gray-200 border-b-4 block hover:border-gray-300 hover:shadow-md"
      >
        <div
          className="w-full h-48 lg:h-56 bg-cover"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundPosition: `${
              data.backgroundPosition ? data.backgroundPosition : "center"
            }`
          }}
        >
          {/* <div className={`news-category mt-4 ml-6 ${category}`}>
            {category}
          </div> */}
        </div>
        <div className="h-56 overlow-y-hidden px-6">
          <div className="text-xl leading-relaxed pt-6 font-montserrat font-medium tracking-tighter">
            {data.title} ({data.homeTeamScore}-{data.awayTeamScore})
          </div>
          <div
            className="text-sm leading-loose pt-2 text-gray-600 overflow-y-hidden"
            dangerouslySetInnerHTML={{ __html: `${data.preview} ...` }}
          />
        </div>
        <div className="pb-4 px-6 flex text-xs text-gray-600 justify-between">
          <div content={data.date}>
            <ReactSVG
              className="inline-block align-middle pr-2"
              beforeInjection={svg => {
                svg.setAttribute("style", "fill: #52606D");
              }}
              src={prefixURL("/static/img/clock.svg")}
            />
            {date}
          </div>
          <div>
            <FacebookProvider appId="346435965433483">
              <Like
                href={`https://www.kkontichfc.be${href}`}
                colorScheme="dark"
                layout="button_count"
                showFaces={false}
                share={false}
              />
            </FacebookProvider>
          </div>
        </div>
      </a>
    </article>
  );
};

ReportItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default ReportItem;
