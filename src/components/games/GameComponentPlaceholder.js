import React from "react";
import {
  TextRow,
  RectShape,
  TextBlock
} from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const GameComponentPlaceholder = (
  <div>
    <div className="border border-gray-200 border-b-4">
      <div className="border-gray-200 border-b text-center font-semibold py-4 text-xl uppercase">
        <div className="w-4/6 mx-auto text-center">
          <TextBlock color="#E4E7EB" rows={1} />
        </div>
      </div>
      <div className="border-gray-200 border-b flex">
        <div className="w-1/2 py-6 border-gray-200 border-r flex flex-col justify-center items-center">
          <div className="flex items-center">
            <RectShape color="#E4E7EB" style={{ width: 95, height: 95 }} />
          </div>
        </div>
        <div className="w-1/2 py-6 flex justify-center flex-col items-center">
          <div className="flex items-center">
            <RectShape color="#E4E7EB" style={{ width: 95, height: 95 }} />
          </div>
        </div>
      </div>
      <div className="text-xl text-gray-400 py-4 flex flex-col items-center justify-center text-center">
        <div className="w-5/6 mx-auto text-center">
          <TextBlock color="#E4E7EB" rows={3} />
        </div>
      </div>
    </div>
  </div>
);

export default GameComponentPlaceholder;
