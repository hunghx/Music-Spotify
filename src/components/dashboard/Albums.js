import React from "react";

export default function Albums() {
  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="iq-card iq-card-transparent  iq-song-back">
              <div className="iq-card-body">
                <div className="iq-music-img1">
                  <div className="equalizer1">
                    <span className="bar1 bar-1" />
                    <span className="bar1 bar-2" />
                    <span className="bar1 bar-3" />
                    <span className="bar1 bar-4" />
                    <span className="bar1 bar-5" />
                  </div>
                </div>
                <div className="player1 row">
                  <div className="details1 col-6 col-sm-6 col-lg-6">
                    <div className="now-playing1" />
                    <div className="track-art1" />
                    <div>
                      <div className="track-name1">Pop Smoke</div>
                      <div className="track-artist1">Cascada</div>
                    </div>
                  </div>
                  <div className="slider_container1 col-sm-5 col-lg-5">
                    <div className="current-time1">00:00</div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      defaultValue={0}
                      className="seek_slider1"
                      onchange="seekTo1()"
                    />
                    <div className="total-duration1">00:00</div>
                  </div>
                  <div className="buttons1 col-6 col-sm-2 col-lg-3">
                    <div className="prev-track1" onclick="prevTrack1()">
                      <i className="fa fa-step-backward fa-2x" />
                    </div>
                    <div
                      className="playpause-track1"
                      onclick="playpauseTrack1()"
                    >
                      <i className="fa fa-play-circle fa-3x" />
                    </div>
                    <div className="next-track1" onclick="nextTrack1()">
                      <i className="fa fa-step-forward fa-2x" />
                    </div>
                  </div>
                  <div className="slider_container1 col-sm-4 col-lg-4">
                    <i className="fa fa-volume-down" />
                    <input
                      type="range"
                      min={1}
                      max={100}
                      defaultValue={99}
                      className="volume_slider1"
                      onchange="setVolume1()"
                    />
                    <i className="fa fa-volume-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="iq-card iq-card-transparent">
              <div className="iq-card-body p-0">
                <ul className="list-unstyled row mb-0">
                  <li className="col-lg-6 col-md-6">
                    <div className="iq-card iq-card-transparent">
                      <div className="iq-card-body p-0">
                        <div className="media align-items-center">
                          <div className="iq-thumb-hotsong">
                            <div className="iq-music-overlay" />
                            <a href="music-player.html">
                              <img
                                src="images/dashboard/album-song/01.png"
                                className="img-fluid avatar-60"
                                alt
                              />
                            </a>
                            <div className="overlay-music-icon">
                              <a href="music-player.html">
                                <i className="las la-play-circle font-size-24" />
                              </a>
                            </div>
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0">Girls Like You</h6>
                            <small>Juice WRLD</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Top Songs</h4>
                </div>
                <div className="d-flex align-items-center iq-view">
                  <b className="mb-0 text-primary">
                    <a href="latest.html">
                      View More <i className="las la-angle-right" />
                    </a>
                  </b>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="list-unstyled row iq-box-hover mb-0">
                  <li className="col-xl-2 col-lg-3 col-md-4 iq-music-box">
                    <div className="iq-card">
                      <div className="iq-card-body p-0">
                        <div className="iq-thumb">
                          <div className="iq-music-overlay" />
                          <a href="music-player.html">
                            <img
                              src="images/dashboard/top-song/01.png"
                              className="img-border-radius img-fluid w-100"
                              alt
                            />
                          </a>
                          <div className="overlay-music-icon">
                            <a href="music-player.html">
                              <i className="las la-play-circle" />
                            </a>
                          </div>
                        </div>
                        <div className="feature-list text-center">
                          <h6 className="font-weight-600 mb-0">
                            Enjoy Yourself
                          </h6>
                          <p className="mb-0">cupcakKe </p>
                        </div>
                      </div>
                    </div>
                  </li>
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
                    <a href="latest.html">
                      View More <i className="las la-angle-right" />
                    </a>
                  </b>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="list-unstyled row  iq-box-hover mb-0">
                  <li className="col-xl-2 col-lg-3 col-md-4 iq-music-box">
                    <div className="iq-card ">
                      <div className="iq-card-body p-0">
                        <div className="iq-thumb">
                          <div className="iq-music-overlay" />
                          <a href="music-player.html">
                            <img
                              src="images/dashboard/popular-hindi-song/01.png"
                              className="img-border-radius img-fluid w-100"
                              alt
                            />
                          </a>
                          <div className="overlay-music-icon">
                            <a href="music-player.html">
                              <i className="las la-play-circle" />
                            </a>
                          </div>
                        </div>
                        <div className="feature-list text-center">
                          <h6 className="font-weight-600  mb-0">Said Sum</h6>
                          <p className="mb-0">Moneybagg Yo</p>
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
  );
}
