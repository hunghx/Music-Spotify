import React from "react";

export default function MusicPlayer() {
  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src="images/dashboard/feature-album/01.png"
                      className="img-fluid w-100"
                      alt
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="d-flex align-items-top justify-content-between iq-music-play-detail">
                      <div className="music-detail">
                        <h3>DJ Khaled Featuring</h3>
                        <span>Edyta Gorniak</span>
                        <p className="mb-0">389382k Views</p>
                        <p>Song · 45 Plays</p>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary iq-play mr-2"
                          >
                            Play music
                          </a>
                        </div>
                      </div>
                      <div className="music-right">
                        <div className="d-flex align-items-center">
                          <div className="iq-circle mr-2 share">
                            <a href="javascript:void();">
                              <i className="las la-share-alt-square text-primary" />
                            </a>
                          </div>
                          <div className="iq-circle mr-2">
                            <a href="javascript:void();">
                              <i className="ri-heart-fill  text-primary" />
                            </a>
                          </div>
                          <div className="iq-circle">
                            <a href="javascript:void();">
                              <i className="las la-download text-primary" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="iq-card">
            <div className="iq-card-body">
              <ul className="list-unstyled iq-music-slide mb-0">
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/01.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/02.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/03.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/04.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/05.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between align-items-center row">
                    <div className="media align-items-center col-10 col-md-5">
                      <div className="iq-realese-song ">
                        <a href="javascript:void(0);">
                          <img
                            src="images/dashboard/realease-song/06.png"
                            className="img-border-radius avatar-60 img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="media-body ml-3">
                        <p className="mb-0">DJ Khaled Featuring</p>
                        <small>Edyta Gorniak</small>
                      </div>
                    </div>
                    <p className="mb-0 col-md-2 col-md-2 iq-music-time">9:52</p>
                    <p className="mb-0 col-md-2 col-md-2 iq-musc-icone">
                      <i className="lar la-star font-size-20" />
                    </p>
                    <p className="mb-0 col-2 col-md-2 iq-music-play">
                      <i className="las la-play-circle font-size-32" />
                    </p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-2 col-md-1">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-2-fill text-primary" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
                        </div>
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
  );
}
