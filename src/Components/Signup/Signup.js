import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container flex items-center justify-center">
      <div className="bg-white rounded-xl p-12 lg:w-1/2 flex flex-col gap-9">
        <div className="flex items-center justify-around">
          <Link to='/login' className="text-Tertiary text-2xl font-bold">
            Login
          </Link>
          <Link to='/signup' className="text-Primary text-2xl font-bold">
            Sign up
          </Link>

        </div>
        <form>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                id="reg-fname"
                name="reg-fname"
                autoComplete="user-fname"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="First Name"
              />
              <input
                type="text"
                id="reg-lname"
                name="reg-lname"
                autoComplete="user-lname"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="Last Name"
              />
              <div className="grid grid-cols-3 gap-4">
                <select name="reg-code" id="reg-code" className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary active:border-Primary">
                  <option defaultValue >Code</option>
                  <option value="1">+20</option>
                  <option value="2">+50</option>
                  <option value="3">+90</option>
                </select>
                <input
                  type="tel"
                  id="reg-phone"
                  name="reg-phone"
                  autoComplete="user-phone"
                  className="col-span-2 border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                  placeholder="Phone Number"
                />
              </div>
              <input
                type="email"
                id="reg-email"
                name="reg-email"
                autoComplete="current-email"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="Email"
              />
              <input
                type="password"
                id="reg-password"
                name="reg-password"
                autoComplete="current-password"
                className="border border-Accent bg-Accent rounded-lg py-3.5 px-5 font-semibold text-Text transition-colors duration-300 ease-in-out focus:outline-none focus:bg-white focus:border-Primary focus:text-Primary "
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Register" className="btn-secondary btn-lg cursor-pointer" />
            <p className="text-Primary text-sm font-semibold text-center">
              Already have an account?
              <Link to="/login" className="underline"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
