import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { loginCbHandler } = props;
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/api/users/login",
        data: form,
      });

      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);

      loginCbHandler(true);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = () => {
    // console.log(form);
    loginUser();
  };
  return (
    <>
      <div className="login-page">
        <div className="login-component">
          <div className="my-3 w-100 text-center">
            <h3>Login</h3>
          </div>
          <div className="w-100">
            <div class="input-group mb-3">
              <span class="input-group-text">@</span>
              <input
                onChange={(e) => setform({ ...form, email: e.target.value })}
                type="text"
                class="form-control"
                placeholder="Input Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">@</span>
              <input
                onChange={(e) => setform({ ...form, password: e.target.value })}
                type="password"
                class="form-control"
                placeholder="Input Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-success"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
