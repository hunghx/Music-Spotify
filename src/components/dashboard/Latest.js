import React from "react";

export default function Latest() {
  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
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
                <ul className="list-unstyled row  feature-album iq-box-hover mb-0">
                  <li className="col-lg-2  iq-music-box">
                    <div className="iq-card mb-0">
                      <div className="iq-card-body p-0">
                        <div className="iq-thumb">
                          <div className="iq-music-overlay" />
                          <a href="music-player.html">
                            <img
                              src="images/dashboard/feature-album/01.png"
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
                          <h6 className="font-weight-600 mb-0">Doja Cat</h6>
                          <p className="mb-0">Annie Lennox</p>
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
                    <a href="albums.html">
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
                    <a href="albums.html">
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
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between align-items-center">
                <div className="iq-header-title">
                  <h4 className="card-title">Featured Albums</h4>
                </div>
                <div
                  id="feature-album-artist-slick-arrow"
                  className="slick-aerrow-block"
                />
              </div>
              <div className="iq-card-body">
                <ul className="list-unstyled row feature-album-artist mb-0">
                  <li className="col-lg-2  iq-music-box">
                    <div className="iq-thumb-artist">
                      <div className="iq-music-overlay" />
                      <a href="music-player.html">
                        <img
                          src="images/dashboard/feature-album-artist/01.png"
                          className="w-100 img-fluid"
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
                      <h6 className="font-weight-600  mb-0">Pixie Lott</h6>
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
