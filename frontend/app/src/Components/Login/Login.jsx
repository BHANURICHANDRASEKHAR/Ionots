import React, { useState, useContext } from 'react';
import Input from './Input.jsx';
import { Context } from '../Context/UserContext.jsx';
import loginfunction, { Signup } from './loginfun.js';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const { show, setShow } = useContext(Context);
    const [isSignup, setIsSignup] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialData = {
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
        role: 'employee'  // Default role for both login and signup
    };
    const navigate = useNavigate();
    const [data, setData] = useState(initialData);
    const onHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const Submit = () => {
        if (!isSignup) {
            loginfunction(setLoading, data, setShow,navigate);
        } else {
            Signup(setLoading, data, setIsSignup, setData, initialData);
        }
    };

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm-6">
                    <div className="svg-container h-lg-100">
                        <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="Login/Signup" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <Container
                        data={data}
                        onHandler={onHandler}
                        Submit={Submit}
                        loading={loading}
                        isSignup={isSignup}
                        setIsSignup={setIsSignup}
                    />
                </div>
            </div>
        </div>
    );
}

const Container = ({ data, onHandler, Submit, isSignup, setIsSignup, loading }) => {
    return (
        <div className="mt-5 p-5">
            <h1 className="login-name">{isSignup ? 'Signup' : 'Login'}</h1>
            <div className="Auth-form-container">
                <div className="Auth-form-content">
                    {isSignup ? (
                        <>
                            <Input
                                label="Username"
                                placeholder="Enter your Username"
                                type="text"
                                handler={onHandler}
                                value={data.username}
                                name="username"
                            />
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                handler={onHandler}
                                value={data.email}
                                name="email"
                            />
                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.password}
                                name="password"
                            />
                            <Input
                                label="Confirm Password"
                                placeholder="Re-enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.confirmPassword}
                                name="confirmPassword"
                            />
                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    className="form-control"
                                    value={data.role}
                                    onChange={onHandler}
                                >
                                    <option value="employee">Employee</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            <Input
                                label="Email"
                                placeholder="Enter your Email"
                                type="email"
                                handler={onHandler}
                                value={data.email}
                                name="email"
                            />
                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.password}
                                name="password"
                            />
                            <div className="form-group mt-2">
                                <label htmlFor="role">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    className="form-control"
                                    value={data.role}
                                    onChange={onHandler}
                                >
                                    <option value="employee">Employee</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                        </>
                    )}
                    <button className="btn btn-success mt-4 w-100" onClick={Submit} disabled={loading}>
                        <b>{loading ? 'Loading ... ' : (isSignup ? 'Signup' : 'Login')}</b>
                    </button>
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary mt-4 w-20"
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? 'Already a User? Login' : 'Not a User? Signup'}
                    </button>
                </div>
            </div>
        </div>
    );
};
