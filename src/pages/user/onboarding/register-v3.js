import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import man from "../../../assets/images/african-american-man.png";
import UserForm from "./userForm.js";

function RegisterV3() {
  return (
    <div className="register register-with-news-feed">
      <div className="news-feed">
        <div
          className="news-image"
          style={{ backgroundImage: `url(${man})` }}
        ></div>
        <div
          className="news-image"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 155.28%)",
          }}
        ></div>
        <div className="news-caption">
          <h4 className="caption-title fs-38px">
            <b>RevAc</b>
          </h4>
          <p className="caption-text">
            Enumeration, Billing Payment & Report Management Application
          </p>
        </div>
      </div>
      <div className="register-container">
        <div className="login-header">
          <div className="brand">
            <div className="d-flex justify-content-between">
              <span className="l">
                <img className="RevAc-logo" src={logo} alt="revac" width="300px"/>
              </span>
              <Link className="icon" to="/">
                <div>
                  <i className="fa fa-home"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <hr className="no-margin" />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RegisterV3;