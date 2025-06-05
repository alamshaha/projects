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

  

  return (
    <div className="login-form">
      <div className=" py-4 px-4">
        <div className="container" >
          {/* Login Form */}
        <div className="col-md-12 py-4 px-4 card">
            <form autoComplete="on" onSubmit={handleLogin} >
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

            <br/>
              <Button variant="primary" type="submit">
                Login 
              </Button>
            </form>
          </div>

          {/* Signup Form */}
          
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
