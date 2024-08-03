import React from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const passwordValidation = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character"
  )
  .required("Password is required");

const validationSchema = Yup.object().shape({
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      return "Thank you for registering";
    },
  });

  // Rendering of the form
  return (
    <form onSubmit={formik.handleSubmit}>
      {" "}
      {/*Submit handler*/}
      {/*First Name*/}
      <label className="nameLabel" htmlFor="firstName">
        First Name
      </label>
      <input
        className="registerName"
        id="firstName"
        name="firstName"
        type="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        maxlength={15}
        required
      />
      <br />
      <br />
      {/*Surname*/}
      <label className="surnameLabel" htmlFor="surname">
        Surname
      </label>
      <input
        className="register"
        id="surname"
        name="surname"
        type="surname"
        onChange={formik.handleChange}
        value={formik.values.surname}
        maxlength={20}
        required
      />
      <br />
      <br />
      {/*Email*/}
      <label className="emailLabel" htmlFor="email">
        Email Address
      </label>
      <input
        className="register"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange} // Change handler
        value={formik.values.email} // Current value of input field
      />
      <br />
      <br />
      {/*Password*/}
      <label className="passLabel" htmlFor="password">
        Password
      </label>
      <input
        className="register"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        required
      />
      {formik.errors.password && formik.touched.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br />
      <br />
      {/*Confirm Password*/}
      <label className="confirmLabel" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className="register"
        id="confirmPassword"
        name="confirmPassword"
        type="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}
      <br />
      <br />
      {/*Submit*/}
      <button className="registerSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
