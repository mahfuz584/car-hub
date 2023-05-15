import React, { useContext } from "react";
import logo from "../../assets/images/login/login.svg";
import { FaFacebookF,FaLinkedinIn,FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const info = {email,password};
    console.log(info);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log(error);
    })
  };
  return (
    <div>
      <div className="flex justify-center lg:flex-row flex-col border-2 border-[#FF3811] gap-20 lg:w-fit w-94 p-10 mx-auto rounded-lg drop-shadow-lg shadow-lg items-center mb-5">
        <div className="login-img">
          <img className="lg:w-fit w-40" src={logo} alt="" />
        </div>
        <div className="login-form border-2 lg:w-fit w-80 p-8">
          <p className="text-center font-bold text-3xl">Sign In</p>
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-bold text-[#FF3811]">Email</p>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Name"
                className=" lg:w-[20rem] w-64 p-2 border-2 rounded-xl hover:scale-105 duration-500 transition outline-none"
                id="email"
              />
            </div>
            <div >
              <p className="text-lg font-bold text-[#FF3811]">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="lg:w-[20rem] w-64  p-2 border-2 rounded-xl hover:scale-105 duration-500 transition outline-none"
                id="password"
                required
              />
            </div>
            <p></p>
            <div>
              <button className="text-center py-2 bg-[#FF3811] text-white font-semibold text-lg rounded-xl hover:scale-105 duration-500 transition cursor-pointer w-full">
                Sign In
              </button>
            </div>
          </form>
          <div>
              <p className="text-center font-semibold text-[#FF3811] mt-6">Or Sign In With</p>
              <div className="flex justify-center gap-8 my-5">
                  <div className="border-2  w-fit p-3 text-xl rounded-full hover:scale-110 duration-500 cursor-pointer bg-blue-700">
                    <FaFacebookF className="text-white"></FaFacebookF>
                  </div>
                  <div className="border-2  w-fit p-3 text-xl rounded-full hover:scale-110 duration-500 cursor-pointer bg-[#0072b1]">
                    <FaLinkedinIn className="text-white"></FaLinkedinIn>
                  </div>
                  <div className="border-2 drop-shadow-lg w-fit p-3 text-xl rounded-full hover:scale-110 duration-500 cursor-pointer bg-zinc-100">
                    <FaGoogle className="text-[#FF3811]"></FaGoogle>
                  </div>
              </div>
          </div>
          <p className="text-center font-semibold">Alredy have an account? <span className="font-bold text-[#FF3811] cursor-pointer"><Link to="/signup">Sign Up</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
