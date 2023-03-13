import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../api/userServices";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const initState = {
  email: "",
  password: "",
};
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(initState);
  const onChangeInput = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(userLogin)
      .then(async (res) => {
        // toast("cc");
        dispatch({ type: "LOG_IN", payload: res.data });
        // toast.success("Đăng nhập thành công !", {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 3000,
        // });

        navigate("/");
      })
      .catch((err) => {
        toast.error("Đăng nhập thất bại , sai email hoặc mật khẩu", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <>
      <ToastContainer />
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
                  <div className="sign-in-from w-100 pt-5 m-auto">
                    <h1 className="mb-3 text-center">Sign in</h1>
                    <form className="mt-4" onSubmit={handleLogin}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail2">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control mb-0"
                          id="exampleInputEmail2"
                          placeholder="Enter email"
                          value={userLogin.email}
                          onChange={onChangeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control mb-0"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          value={userLogin.password}
                          onChange={onChangeInput}
                        />
                      </div>
                      <div className="sign-info">
                        <button type="submit" className="btn btn-primary mb-2">
                          Sign in
                        </button>
                        <span className="dark-color d-block line-height-2">
                          Don't have an account?{" "}
                          <Link to="/register">Sign up</Link>
                        </span>
                      </div>
                      <div className="d-inline-block w-100">
                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link to="/register" className="ml-2">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link>Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sign in END */}
          {/* color-customizer */}
        </div>
      </section>
    </>
  );
}
