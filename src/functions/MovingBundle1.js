import React from "react";
import "./MovingBundle1.css";

const MovingBundle1 = ({
  movingBundleCSS,
  bundle1CSS,
  img1,
  img1CSS,
  bundle2CSS,
  img2,
  img2CSS,
  bundle3CSS,
  img3,
  img3CSS,
}) => {
  let movingBungleSettings = movingBundleCSS ? movingBundleCSS : {};

  let bungle1Settings = bundle1CSS ? bundle1CSS : {};
  let bungle2Settings = bundle2CSS ? bundle2CSS : {};
  let bungle3Settings = bundle3CSS ? bundle3CSS : {};

  let img1Settings = img1CSS ? img1CSS : {};
  let img2Settings = img2CSS ? img2CSS : {};
  let img3Settings = img3CSS ? img3CSS : {};

  return (
    <div className="movingBundle1" style={movingBungleSettings}>
      <div className="movingBundle1Part1" style={bungle1Settings}>
        <img
          src={img1}
          alt="movingIcon"
          className="movingBundlePart1IMG1"
          style={img1Settings}
        />
      </div>
      <div className="movingBundle1Part2" style={bungle2Settings}>
        <img
          src={img2}
          alt="movingIcon"
          className="movingBundlePart1IMG2"
          style={img2Settings}
        />
      </div>
      <div className="movingBundle1Part3" style={bungle3Settings}>
        <img
          src={img3}
          alt="movingIcon"
          className="movingBundlePart1IMG3"
          style={img3Settings}
        />
      </div>
    </div>
  );
};

export default MovingBundle1;
