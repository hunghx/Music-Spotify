import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Footer(props) {
  return (
    <footer className="iq-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 m-0 p-0 text-center">
            <ReactAudioPlayer
              style={{ width: "80%" }}
              src={props.songPlay.music_path}
              autoPlay
              controls
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
