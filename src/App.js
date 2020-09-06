import React, { Component } from "react";
import "./Style/App.css";
import facebook from "./Logo/facebook.svg";
import react from "./Logo/amazon.png";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
  }

  // async postData() {
  //   try {
  //     let result = await fetch("https://reqres.in/api/register", {
  //       method: "post",
  //       mode: "no-cors",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({}),
  //     });
  //   }
  // }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    axios
      .post("https://reqres.in/api/register", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status >= 201) {
          alert("User created");
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        alert("Error occured");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <nav className="logo-wrapper">
          <img src={react} alt="" />
        </nav>
        <div className="form-wrapper">
          <div className="heading">
            <h3>sign up</h3>
            <h1>create your account</h1>
            <p>Lorem, ipsum dolor sitm!</p>
          </div>
          <div className="signin-btn">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <div class="btn-text">
                <p>Sign in with Google</p>
              </div>
            </div>
            <div className="facebook-btn">
              <div className="facebook-icon-wrapper">
                <img className="facebook-icon" src={facebook} alt="" />
              </div>
              <div class="btn-text">
                <p>Sign in with Facebook</p>
              </div>
            </div>
          </div>
          <span className="alternative">or</span>
          <form onSubmit={this.hanldeSubmit} noValidate>
            <div className="firstName">
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="lastName">
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="email">
              <input
                type="email"
                className=""
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="password">
              <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            <span>
              By clicking Sign In, you agree to our{" "}
              <a href="https://google.com">Terms of Use</a> and our{" "}
              <a href="https://google.com">Privacy Policy</a>.
            </span>

            <div className="createAccount">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
