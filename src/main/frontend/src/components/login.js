import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";

const theme = createTheme();

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        axios
            .post("http://localhost:8080/api/auth/signin", {
                username: username,
                password: password,
            })
            .then(function (response) {
                console.log(response);
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    alert("Login successful");
                    window.location.href = "http://localhost:3000/";
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Login failed, please check your username and password");
            });

        event.preventDefault();
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <Avatar
                    className="Avatar"
                    sx={{
                        m: 1,
                        bgcolor: "secondary.main",
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="group" size="lg" controlId="email">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        size="lg"
                        controlId="password"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        block
                        size="lg"
                        type="submit"
                        disabled={!validateForm()}
                    >
                        Login
                    </Button>
                </Form>
                <br />
                <br />
                <br />
                <p>Don't have an account?</p>
                <a href="http://localhost:3000/register">Register</a>
            </div>
        </div>
    );
};

export default Login;
