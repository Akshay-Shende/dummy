import styles from "../Components/css/signup.module.css";
import { useRef, useEffect, useState } from "react";
import { getAllRoles } from "./Services/useRoleServices";
import { createUser } from "./Services/userServices";

const SignUp = () => {
  const [roleList, setRoleList] = useState([]);
  const firstName = useRef();
  const lastName = useRef();
  const emailAddress = useRef();
  const contactNumber = useRef();
  const [role, setRole] = useState();
  const password = useRef();

  useEffect(() => {
    (async () => {
      const result = await getAllRoles();
      setRoleList(result);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const emailAddressValue = emailAddress.current.value;
    const contactNumberValue = contactNumber.current.value;
    const passwordValue = password.current.value;

    let createdUserResult = await createUser({
      firstName: firstNameValue,
      lastName: lastNameValue,
      emailId: emailAddressValue,
      contactNumber: contactNumberValue,
      roleId : Number(role),
      password: passwordValue,
    });

    console.log(createdUserResult);
  };
  return (
    <>
      <form className={`${styles.form}`}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" ref={firstName} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" ref={lastName} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            ref={emailAddress}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input type="text" ref={contactNumber} className="form-control" />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option disabled selected>
              Open this select menu
            </option>
            {roleList.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={password}
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

export default SignUp;
