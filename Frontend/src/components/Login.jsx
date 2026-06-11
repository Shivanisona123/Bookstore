
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
         "https://bookstore-backend-mvmb.onrender.com/user/login",
        
        userInfo
      );

      console.log(res.data);

      // Save user in localStorage
      localStorage.setItem(
        "Users",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successfully");

     const modal = document.getElementById("my_modal_1");

    if (modal) {
             modal.close();
        }

setTimeout(() => {
  navigate("/");
}, 1000);
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box rounded-xl p-6">

          <h3 className="font-bold text-xl text-center mb-5">
            Login
          </h3>

          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full mt-1"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full mt-1"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn bg-[#895129] text-white w-full mt-2"
            >
              Login
            </button>

            {/* Signup Link */}
            <div className="text-sm text-center mt-3">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#895129] underline font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;