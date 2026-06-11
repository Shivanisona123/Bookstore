import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
try {
  const res = await axios.post(
    "http://localhost:4001/user/signup",
    userInfo
  );
  console.log(res.data);
  toast.success("Signup Successfully");
  localStorage.setItem("Users",JSON.stringify(res.data.user));
  navigate("/");
} catch (err) {
  console.log(err);
  alert(
   toast.error( 
    err.response?.data?.message || "Signup Failed")
  );
}
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f0e6] via-[#e8d6c3] to-[#caa27a]">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded"
              {...register("fullname", {
                required: "Name is required",
              })}
            />

            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full border px-3 py-2 rounded pr-20"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-sm text-gray-600 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#895129] text-white py-2 rounded hover:bg-[#6f3f21] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-[#895129] font-bold underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
