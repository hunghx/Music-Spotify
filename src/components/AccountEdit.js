import React from "react";

export default function AccountEdit() {
  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-body p-0">
                <div className="iq-edit-list">
                  <ul className="iq-edit-profile d-flex nav nav-pills">
                    <li className="col-md-3 p-0">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#personal-information"
                      >
                        Personal Information
                      </a>
                    </li>
                    <li className="col-md-3 p-0">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#chang-pwd"
                      >
                        Change Password
                      </a>
                    </li>
                    <li className="col-md-3 p-0">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#emailandsms"
                      >
                        Email and SMS
                      </a>
                    </li>
                    <li className="col-md-3 p-0">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#manage-contact"
                      >
                        Manage Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iq-edit-list-data">
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="personal-information"
                  role="tabpanel"
                >
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Personal Information</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form>
                        <div className="form-group row align-items-center">
                          <div className="col-md-12">
                            <div className="profile-img-edit">
                              <img
                                className="profile-pic"
                                src="images/user/11.png"
                                alt="profile-pic"
                              />
                              <div className="p-image">
                                <i className="ri-pencil-line upload-button" />
                                <input
                                  className="file-upload"
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" row align-items-center">
                          <div className="form-group col-sm-6">
                            <label htmlFor="fname">First Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              defaultValue="Barry"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label htmlFor="lname">Last Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lname"
                              defaultValue="Tech"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label htmlFor="uname">User Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="uname"
                              defaultValue="Barry@01"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label htmlFor="cname">City:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cname"
                              defaultValue="Atlanta"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label className="d-block">Gender:</label>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadio6"
                                name="customRadio1"
                                className="custom-control-input"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                {" "}
                                Male{" "}
                              </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadio7"
                                name="customRadio1"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio7"
                              >
                                {" "}
                                Female{" "}
                              </label>
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <label htmlFor="dob">Date Of Birth:</label>
                            <input
                              className="form-control"
                              id="dob"
                              defaultValue="1984-01-24"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Marital Status:</label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option selected>Single</option>
                              <option>Married</option>
                              <option>Widowed</option>
                              <option>Divorced</option>
                              <option>Separated </option>
                            </select>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Age:</label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect2"
                            >
                              <option>12-18</option>
                              <option>19-32</option>
                              <option selected>33-45</option>
                              <option>46-62</option>
                              <option>63 &gt; </option>
                            </select>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Country:</label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect3"
                            >
                              <option>Caneda</option>
                              <option>Noida</option>
                              <option selected>USA</option>
                              <option>India</option>
                              <option>Africa</option>
                            </select>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>State:</label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect4"
                            >
                              <option>California</option>
                              <option>Florida</option>
                              <option selected>Georgia</option>
                              <option>Connecticut</option>
                              <option>Louisiana</option>
                            </select>
                          </div>
                          <div className="form-group col-sm-12">
                            <label>Address:</label>
                            <textarea
                              className="form-control"
                              name="address"
                              rows={5}
                              style={{ lineHeight: 22 }}
                              defaultValue={
                                "37 Cardinal Lane\nPetersburg, VA 23803\nUnited States of America\nZip Code: 85001\n                                             "
                              }
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button type="reset" className="btn iq-bg-danger">
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Change Password</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="cpass">Current Password:</label>
                          <a href="javascripe:void();" className="float-right">
                            Forgot Password
                          </a>
                          <input
                            type="Password"
                            className="form-control"
                            id="cpass"
                            defaultValue
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="npass">New Password:</label>
                          <input
                            type="Password"
                            className="form-control"
                            id="npass"
                            defaultValue
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="vpass">Verify Password:</label>
                          <input
                            type="Password"
                            className="form-control"
                            id="vpass"
                            defaultValue
                          />
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button type="reset" className="btn iq-bg-danger">
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Email and SMS</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-8 col-md-3"
                            htmlFor="emailnotification"
                          >
                            Email Notification:
                          </label>
                          <div className="col-4 col-md-9 custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="emailnotification"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="emailnotification"
                            />
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label
                            className="col-8 col-md-3"
                            htmlFor="smsnotification"
                          >
                            SMS Notification:
                          </label>
                          <div className="col-4 col-md-9 custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="smsnotification"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="smsnotification"
                            />
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label className="col-md-3" htmlFor="npass">
                            When To Email
                          </label>
                          <div className="col-md-9">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email01"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email01"
                              >
                                You have new notifications.
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email02"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email02"
                              >
                                You're sent a direct message
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email03"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email03"
                              >
                                Someone adds you as a connection
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row align-items-center">
                          <label className="col-md-3" htmlFor="npass">
                            When To Escalate Emails
                          </label>
                          <div className="col-md-9">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email04"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email04"
                              >
                                {" "}
                                Upon new order.
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email05"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email05"
                              >
                                {" "}
                                New membership approval
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="email06"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="email06"
                              >
                                {" "}
                                Member registration
                              </label>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button type="reset" className="btn iq-bg-danger">
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="manage-contact"
                  role="tabpanel"
                >
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Manage Contact</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="cno">Contact Number:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cno"
                            defaultValue="001 2536 123 458"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            defaultValue="Barryjone@demo.com"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="url">Url:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="url"
                            defaultValue="https://getbootstrap.com"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button type="reset" className="btn iq-bg-danger">
                          Cancel
                        </button>
                      </form>
                    </div>
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
