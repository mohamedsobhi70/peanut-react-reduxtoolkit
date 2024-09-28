import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container flex items-center justify-center">
      <div className="bg-white rounded-xl p-12 lg:w-1/2 flex flex-col gap-9">
        <div className="flex items-center justify-around">
          <Link to='/login' className="text-Primary text-2xl font-bold">
            Login
          </Link>
          <Link to='/signup' className="text-Tertiary text-2xl font-bold">
            Sign up
          </Link>

        </div>
        <form>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <input
                type="email"
                id="login-email"
                name="login-email"
                autoComplete="current-password"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="Email"
              />
              <input
                type="password"
                id="login-password"
                name="login-password"
                autoComplete="current-password"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="Password"
              />
              <Link to='/forget-password' className="text-Primary font-semibold text-xs uppercase tracking-wider">
                Forgot password?
              </Link>
            </div>
            <input type="submit" value="Login" className="btn-secondary btn-lg cursor-pointer" />
            <p className="text-Primary text-sm font-semibold text-center">
              You don’t have an accoun?
              <Link to="/signup" className="underline"> Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
