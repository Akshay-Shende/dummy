import React, { useRef } from "react";
import styles from "../Components/css/login.module.css";
import { loginUser } from "../Services/loginServices";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const userId = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let idResult = userId.current.value;

    let id = Number(idResult);
    let password = passwordRef.current.value;

    let result = await loginUser({ id, password });
    console.log(result);
//console.log(navigation);
    navigate('/')
  };

  return (
    <>
      <h3 className="text-center">Log In</h3>
      <form className={`${styles.form}`}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            User Id
          </label>
          <input type="text" ref={userId} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LogIn;
