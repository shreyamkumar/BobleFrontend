import React from "react";
//import "./App.css";

function SignUP() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>create account</h1>
        <form noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className=""
              placeholder="First Name"
              name="fistName"
              noValidate
              // onChange={this.handleChange}
            ></input>
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className=""
              placeholder="Last Name"
              name="lastName"
              noValidate
              // onChange={this.handleChange}
            ></input>
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className=""
              placeholder="email"
              name="email"
              noValidate
              //onChange={this.handleChange}
            ></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className=""
              placeholder="password"
              name="password"
              noValidate
              //onChange={this.handleChange}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUP;
