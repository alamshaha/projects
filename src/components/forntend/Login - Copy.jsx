import React, { useState } from "react";
import axios from "./axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const notify = (message) => {
    toast.error(message);
  };

  const notify_success = (message) => {
    toast.success(message);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/getUsers",
        {
          mobile,
          password,
        }
      );
      // console.log(resp.data);
      // return false;
      // If the login is successful
      if (resp.data[0].name)
      {
        const data = {
          id: resp.data[0]._id,
          name: resp.data[0].name,
          token: resp.data[0].age, // Assuming token is returned in the response
        };
        console.log(data);
        // Save the user data in localStorage
        localStorage.setItem("userInfo", JSON.stringify(data));

        // Show success message
        notify_success(resp.data[0].name);

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
      if (resp.data.name === "failed") {
        notify(resp.data[0].name);
      }
      // If the login fails (error in status)
      if (resp.data.name === "error") {
        
      }
    } catch (error) {
      console.error("Error during login:", error);
      notify("An error occurred. Please try again.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        //"http://127.0.0.1:8000/index.php/api/signup",
        "http://localhost:3000/users",
        {
          name,
          email,
          mobile,
          password,
        }
      );

      // If the signup is successful
      if (resp.data.status === "success") {
        notify_success(resp.data.message);

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
      if (resp.data.status === "failed") {
        notify(resp.data.message);
      }
      // If the signup fails (error in status)
      if (resp.data.status === "error") {
        if (resp.data.message) {
          if (resp.data.message.name) {
            resp.data.message.name.forEach((msg) => notify(msg));
            return false;
          }
          if (resp.data.message.email) {
            resp.data.message.email.forEach((msg) => notify(msg));
            return false;
          }
          if (resp.data.message.password) {
            resp.data.message.password.forEach((msg) => notify(msg));
            return false;
          }
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      notify("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="container py-4 px-4">
        <div className="row">
          {/* Login Form */}
          <div className="col-md-4 py-4 px-4 bg-warning">
            <form autoComplete="on" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile"
                  autoComplete="mobile" // Auto-fill for email field
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password" // Auto-fill for new password
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="col-md-4 offset-md-2 py-4 px-4 bg-info">
            <form autoComplete="on" onSubmit={handleSignup}>
              <Form.Group className="mb-3" controlId="formBasiName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  autoComplete="name" // Auto-fill for name field
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile"
                  autoComplete="Mobile" // Auto-fill for email field
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  autoComplete="email" // Auto-fill for email field
                  onChange={(e) =>setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password" // Auto-fill for new password
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to terms" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
