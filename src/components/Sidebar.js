import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const isActive = ({ isActive }) => {
  return {
    color: isActive ? "red" : "black",
  };
};
function Sidebar(props) {
  const userLogin = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <NavLink to="/" className="header-logo">
            <img
              src="images/logo.png"
              className="img-fluid rounded-normal"
              alt="logo"
            />
            <div className="logo-title">
              <span className="text-primary text-uppercase">Muzik</span>
            </div>
          </NavLink>
          <div className="iq-menu-bt-sidebar">
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li className="active active-menu">
                <a
                  href="#dashboard"
                  className="iq-waves-effect"
                  data-toggle="collapse"
                  aria-expanded="true"
                >
                  <span className="ripple rippleEffect" />
                  <i className="las la-home iq-arrow-left" />
                  <span>Dashboard</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul
                  id="dashboard"
                  className="iq-submenu collapse show"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li className="active">
                    <NavLink style={isActive} to="/">
                      <i className="las la-house-damage" />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={isActive} to="/latest">
                      <i className="las la-headphones" />
                      Latest
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={isActive} to="/album">
                      <i className="lar la-file-audio" />
                      Albums
                    </NavLink>
                  </li>
                </ul>
              </li>
              {userLogin.isLogin ? (
                ""
              ) : (
                <li>
                  <NavLink to="/login">
                    <i class="las la-sign-in-alt"></i>Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars" />
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between">
                <Link to="/" className="header-logo">
                  <img
                    src="images/logo.png"
                    className="img-fluid rounded-normal"
                    alt="logo-cc"
                  />
                  <div className="pt-2 pl-2 logo-title">
                    <span className="text-primary text-uppercase">Muzik</span>
                  </div>
                </Link>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="list-unstyled iq-menu-top d-flex justify-content-between mb-0 p-0">
                <li className="active">
                  <NavLink style={isActive} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink style={isActive} to="/latest">
                    Latest
                  </NavLink>
                </li>
                <li>
                  <NavLink style={isActive} to="album">
                    Albums
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto navbar-list">
                <li className="nav-item nav-icon">
                  <div className="iq-search-bar">
                    <form action="#" className="searchbox">
                      <input
                        type="text"
                        className="text search-input"
                        placeholder="Search Here.."
                      />
                      <a className="search-link" href="#">
                        <i className="ri-search-line text-black" />
                      </a>
                      <a className="search-audio" href="#">
                        <i className="las la-microphone text-black" />
                      </a>
                    </form>
                  </div>
                </li>
                <li className="nav-item nav-icon search-content">
                  <a
                    href="#"
                    className="search-toggle iq-waves-effect text-gray rounded"
                  >
                    <span className="ripple rippleEffect " />
                    <i className="ri-search-line text-black" />
                  </a>
                  <form action="#" className="search-box p-0">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Type here to search..."
                    />
                    <a className="search-link" href="#">
                      <i className="ri-search-line text-black" />
                    </a>
                    <a className="search-audio" href="#">
                      <i className="las la-microphone text-black" />
                    </a>
                  </form>
                </li>
                {!userLogin.isLogin ? (
                  ""
                ) : (
                  <li className="line-height pt-3">
                    <Link className="search-toggle iq-waves-effect d-flex align-items-center">
                      <span className="mx-2">
                        {userLogin.userLogin.user.name}
                      </span>
                      <img
                        src="images/user/07.jpg"
                        className="img-fluid rounded-circle border"
                        alt="user"
                      />
                    </Link>
                    <div className="iq-sub-dropdown iq-user-dropdown">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3">
                            <h5 className="mb-0 text-white line-height">
                              Hello Barry Tech
                            </h5>
                            <span className="text-white font-size-12">
                              Available
                            </span>
                          </div>
                          <Link
                            to="/account-profile"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-file-user-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">My Profile</h6>
                                <p className="mb-0 font-size-12">
                                  View personal profile details.
                                </p>
                              </div>
                            </div>
                          </Link>
                          <Link
                            to="/account-edit"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-profile-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Edit Profile</h6>
                                <p className="mb-0 font-size-12">
                                  Modify your personal details.
                                </p>
                              </div>
                            </div>
                          </Link>
                          <Link
                            to="/account-setting"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-account-box-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Account settings</h6>
                                <p className="mb-0 font-size-12">
                                  Manage your account parameters.
                                </p>
                              </div>
                            </div>
                          </Link>
                          <a
                            href="privacy-setting.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-lock-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Privacy Settings</h6>
                                <p className="mb-0 font-size-12">
                                  Control your privacy parameters.
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="d-inline-block w-100 text-center p-3">
                            <a
                              className="bg-primary iq-sign-btn"
                              href="sign-in.html"
                              role="button"
                            >
                              Sign out
                              <i className="ri-login-box-line ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
