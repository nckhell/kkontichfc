import React from "react";
import HistoryImage from "./HistoryImage";

const HistoryGallery = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <HistoryImage url="https://res.cloudinary.com/kkontichfc/image/upload/e_grayscale/geschiedenis/42201321_2420249461326358_3819049121050787840_o_fr3zzb" />
      <HistoryImage url="https://res.cloudinary.com/kkontichfc/image/upload/e_grayscale/geschiedenis/149897515238331700_agtoup" />
      <HistoryImage url="https://res.cloudinary.com/kkontichfc/image/upload/e_grayscale/geschiedenis/13669333_1271562042861778_2488570454153060011_o_gpxis0" />
      <HistoryImage url="https://res.cloudinary.com/kkontichfc/image/upload/e_grayscale/geschiedenis/12823435_1169241093093874_7425774194998410845_o_qwtbss" />
      <HistoryImage url="https://res.cloudinary.com/kkontichfc/image/upload/e_grayscale/geschiedenis/14089263_1311718928846089_4034641564325363875_n_qy1wit" />
    </div>
  );
};

export default HistoryGallery;
