import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./../../states/auth/authSlice";
import { useLoginMutation } from "./../../states/auth/authApiSlice";
import { loading } from "../../components/Loading/Loading";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const userRef = useRef();
  const errRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [phoneNumber, password]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const useData = await login({ phoneNumber, password }).unwrap();
      dispatch(setCredentials({ ...useData, phoneNumber }));
      setPhoneNumber("");
      setPwd("");
      navigate("/main");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Phone Number or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  return isLoading ? (
    <>{loading}</>
  ) : (
    <section id="login">
      <div className="wrapper">
        <p ref={errRef}>{errMsg}</p>
        <h4>Employee Login</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            ref={userRef}
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPwd(e.target.value)}
            required
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
