

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
  const res = await axios.post(
    "https://bookstore-backend-mvmb.onrender.com/contact/send",
    data
  );

      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to send message"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-[#895129] text-white p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us 📚
          </h1>

          <p className="text-gray-200 mb-6">
            Have questions about our books or services? We'd love to hear from you.
          </p>

          <div className="space-y-4">
            <p>📧 support@bookstore.com</p>
            <p>📞 +91 00000000</p>
            <p>📍 XYZ, India</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Send Message
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#895129]"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#895129]"
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

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#895129]"
                {...register("message", {
                  required: "Message is required",
                })}
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#895129] text-white py-3 rounded-lg font-semibold hover:bg-[#6e3f1f] transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;