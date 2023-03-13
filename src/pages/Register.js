import React from "react";

export default function Register() {
  return (
    <section className="sign-in-page">
      <div className="container">
        <div className="row justify-content-center align-items-center height-self-center">
          <div className="col-md-6 col-sm-12 col-12 align-self-center">
            <div className="sign-user_card ">
              <div className="d-flex justify-content-center">
                <div className="sign-user_logo">
                  <img
                    src="images/login/user.png"
                    className=" img-fluid"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="sign-in-page-data">
                <div className="sign-in-from w-100 m-auto pt-5">
                  <h1 className="mb-3 text-center">Sign Up</h1>
                  <form className="mt-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail2">Your Full Name</label>
                      <input
                        type="email"
                        className="form-control mb-0"
                        id="exampleInputEmail2"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail3">Email address</label>
                      <input
                        type="email"
                        className="form-control mb-0"
                        id="exampleInputEmail3"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword2">Password</label>
                      <input
                        type="password"
                        className="form-control mb-0"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                    </div>
                    <div className="d-inline-block w-100">
                      <div className="custom-control custom-checkbox d-inline-block mt-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          I accept <a href="#">Terms and Conditions</a>
                        </label>
                      </div>
                    </div>
                    <div className="sign-info mt-3">
                      <button type="submit" className="btn btn-primary mb-2">
                        Sign Up
                      </button>
                      <span className="d-block line-height-2">
                        Already Have Account ? <a href="sign-in.html">Log In</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
