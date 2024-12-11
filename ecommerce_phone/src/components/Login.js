import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userData from '../db.json';

const Login = ({ setIsLogin }) => {
  const nav = useNavigate();

  const loginSchema = Yup.object().shape({
    username: Yup.string().min(5,"Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values, { setSubmitting, setFieldError }) => {
    const user = userData.users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (user) {
      setIsLogin(true);
      if (user.role === "admin") {
        nav("/home");
      }
    } else {
      setFieldError("general", "Invalid username or password");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting, errors }) => (
          <Form className="w-50">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <Field name="username" id="username" className="form-control" placeholder="Enter username"/>
              <ErrorMessage name="username" component="div" style={{ color: "red" }}/>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <Field name="password" id="password" type="password" className="form-control"
            placeholder="Enter password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {errors.general && (
              <div style={{ color: "red" }}>{errors.general}</div>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
