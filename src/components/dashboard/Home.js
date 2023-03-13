import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home(props) {
  let { songPlay, isPlay } = props;

  const songs = useSelector((state) => state.songReducer);
  const album = useSelector((state) => state.albumsReducer);

  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="iq-card iq-realease">
              <div className="iq-card-header d-flex justify-content-between border-0">
                <div className="iq-header-title">
                  <h4 className="card-title">New Realeases</h4>
                </div>
              </div>
              <div className="iq-card-body  iq-realeses-back">
                <div className="row">
                  <div className="col-lg-5 iq-realese-box ">
                    <div className="iq-music-img">
                      <div className="equalizer">
                        <span className="bar bar-1" />
                        <span className="bar bar-2" />
                        <span className="bar bar-3" />
                        <span className="bar bar-4" />
                        <span className="bar bar-5" />
                      </div>
                    </div>
                    {songPlay && (
                      <div className="player1 row">
                        <div className="details1 music-list col-6 col-sm-6 col-lg-6">
                          <div>
                            <div className="track-name1">{songPlay.name}</div>
                            <div className="track-artist1">
                              {songPlay.singer_name}
                            </div>
                          </div>
                        </div>
                        <div className="buttons1 col-6 col-sm-2 col-lg-3">
                          <div className="prev-track1">
                            <i
                              className="fa fa-step-backward fa-2x"
                              onClick={props.handleBack}
                            />
                          </div>
                          <div className="playpause-track1">
                            <i
                              className={`fa fa-${
                                isPlay ? "pause" : "play"
                              }-circle fa-3x`}
                              onClick={props.handleControl}
                            />
                          </div>
                          <div className="next-track1">
                            <i
                              className="fa fa-step-forward fa-2x"
                              onClick={props.handleNext}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className="col-lg-7"
                    style={{ height: "500px", overflow: "scroll" }}
                  >
                    {/* List slide song */}
                    <ul className="list-unstyled iq-song-slide mb-0 realeases-banner">
                      {songs.map((song) => (
                        <li
                          key={song.id}
                          className="row"
                          style={{
                            background:
                              songPlay && songPlay.id === song.id
                                ? "rgba(0,0,0,0.7)"
                                : "",
                          }}
                        >
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ width: "100%" }}
                          >
                            <div
                              className="media align-items-center col-10 col-md-5"
                              onClick={() => {
                                props.playMusic(song);
                              }}
                            >
                              <div className="iq-realese-song ">
                                <Link>
                                  <img
                                    src={song.image_path}
                                    className="img-border-radius avatar-60 img-fluid"
                                    alt="song.name"
                                  />
                                </Link>
                              </div>
                              <div className="media-body text-white ml-3">
                                <p className="mb-0 iq-music-title">
                                  {song.name}
                                </p>
                                <small>{song.singer.name}</small>
                              </div>
                            </div>
                            {/* <p className="mb-0 col-md-2 iq-m-icon">
                              <i className="lar la-star font-size-20" />
                            </p>
                            <p className="mb-0 col-2 col-md-2">
                              <i className="las la-play-circle font-size-32" />
                            </p> */}
                            <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center  col-md-1">
                              <div className="dropdown">
                                <span
                                  className="dropdown-toggle text-primary"
                                  id="dropdownMenuButton1"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  role="button"
                                >
                                  <i className="ri-more-2-fill text-primary" />
                                </span>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <Link className="dropdown-item" href="#">
                                    <i className="ri-eye-fill mr-2" />
                                    View
                                  </Link>
                                  <Link className="dropdown-item" href="#">
                                    <i className="ri-delete-bin-6-fill mr-2" />
                                    Delete
                                  </Link>
                                  <Link className="dropdown-item" href="#">
                                    <i className="ri-file-download-fill mr-2" />
                                    Download
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between align-items-center">
                <div className="iq-header-title">
                  <h4 className="card-title">Featured Albums</h4>
                </div>
                <div
                  id="feature-album-slick-arrow"
                  className="slick-aerrow-block"
                />
              </div>
              <div className="iq-card-body">
                {/* lisst card */}
                <ul className="list-unstyled row  feature-album iq-box-hover mb-0">
                  {album.map((al) => (
                    <li className="col-lg-2  iq-music-box" key={al.id}>
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <div className="iq-music-overlay" />

                            <Link to="/music-player">
                              <div
                                className="img-border-radius img-fluid w-100"
                                style={{
                                  backgroundImage: `url('${al.image_path}')`,
                                  width: "100%",
                                  height: "180px",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                            </Link>
                            <div className="overlay-music-icon">
                              <Link to="/music-player">
                                <i className="las la-play-circle" />
                              </Link>
                            </div>
                          </div>
                          <div className="feature-list text-center">
                            <h6 className="font-weight-600 mb-0">{al.name}</h6>
                            <p className="mb-0">{al.description}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Trending Songs</h4>
                </div>
                <div className="d-flex align-items-center iq-view">
                  <b className="mb-0 text-primary">
                    <a href="albums.html">
                      View More <i className="las la-angle-right" />
                    </a>
                  </b>
                </div>
              </div>
              <div className="iq-card-body">
                {/* trending list */}
                <ul className="list-unstyled row iq-box-hover mb-0">
                  {songs.map((song) => (
                    <li
                      className="col-xl-2 col-lg-3 col-md-4 iq-music-box"
                      key={song.id}
                    >
                      <div className="iq-card">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <div className="iq-music-overlay" />
                            <Link to="/music-player">
                              <div
                                className="img-border-radius img-fluid w-100"
                                style={{
                                  backgroundImage: `url('${song.image_path}')`,
                                  width: "100%",
                                  height: "180px",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                            </Link>
                            <div className="overlay-music-icon">
                              <a href="music-player.html">
                                <i className="las la-play-circle" />
                              </a>
                            </div>
                          </div>
                          <div className="feature-list text-center">
                            <h6 className="font-weight-600  mb-0">
                              {song.name}
                            </h6>
                            <p className="mb-0">{song.singer_name}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Popular Hindi Songs</h4>
                </div>
                <div className="d-flex align-items-center iq-view">
                  <b className="mb-0 text-primary">
                    <a href="albums.html">
                      View More <i className="las la-angle-right" />
                    </a>
                  </b>
                </div>
              </div>
              <div className="iq-card-body">
                {/* popular song */}
                <ul className="list-unstyled row  iq-box-hover mb-0">
                  {songs.map((song) => (
                    <li
                      className="col-xl-2 col-lg-3 col-md-4 iq-music-box"
                      key={song.id}
                    >
                      <div className="iq-card ">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <div className="iq-music-overlay" />
                            <a href="music-player.html">
                              <div
                                className="img-border-radius img-fluid w-100"
                                style={{
                                  backgroundImage: `url('${song.image_path}')`,
                                  width: "100%",
                                  height: "180px",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                            </a>
                            <div className="overlay-music-icon">
                              <a href="music-player.html">
                                <i className="las la-play-circle" />
                              </a>
                            </div>
                          </div>
                          <div className="feature-list text-center">
                            <h6 className="font-weight-600  mb-0">
                              {song.name}
                            </h6>
                            <p className="mb-0">{song.singer_name}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-header d-flex justify-content-between align-items-center">
                    <div className="iq-header-title">
                      <h4 className="card-title">Hot Songs</h4>
                    </div>
                    <div
                      id="hot-song-slick-arrow"
                      className="slick-aerrow-block"
                    />
                  </div>
                  <div className="iq-card-body">
                    {/* Hot songs */}
                    <ul className="list-unstyled row hot-songs mb-0">
                      {songs.map((song) => (
                        <li className="col-lg-12" key={song.id}>
                          <div className="iq-card iq-card-transparent">
                            <div className="iq-card-body p-0">
                              <div className="media align-items-center">
                                <div className="iq-thumb-hotsong">
                                  <div className="iq-music-overlay" />
                                  <Link to="music-player">
                                    <img
                                      src={song.image_path}
                                      className="img-fluid avatar-60"
                                      alt={song.name}
                                    />
                                  </Link>
                                  <div className="overlay-music-icon">
                                    <a href="music-player.html">
                                      <i className="las la-play-circle font-size-24" />
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 iq-song-title">
                                    {song.name}
                                  </h6>
                                  <small>{song.singer_name}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-header d-flex justify-content-between align-items-center">
                    <div className="iq-header-title">
                      <h4 className="card-title">Hot Video Songs</h4>
                    </div>
                    <div
                      id="hot-video-slick-arrow"
                      className="slick-aerrow-block"
                    />
                  </div>
                  <div className="iq-card-body">
                    {/* Video */}
                    <ul className="list-unstyled row iq-box-hover hot-video mb-0">
                      <li className="col-lg-6">
                        <div className="iq-card  mb-lg-0">
                          <div className="iq-card-body p-0">
                            <div className="iq-thumb">
                              <video controls>
                                <source
                                  src="images/dashboard/song-video/video-1.mp4"
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                            <div className="feature-list text-center">
                              <h6 className="font-weight-600  mb-0">
                                Chicago Freestyle
                              </h6>
                              <p className="mb-0">9999k Views</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
