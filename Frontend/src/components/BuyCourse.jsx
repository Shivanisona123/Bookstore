import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BuyCourse = () => {
  

const navigate = useNavigate();
const location = useLocation();
const course = location.state;

  const { register, handleSubmit } = useForm();

 const onSubmit = async (data) => {
  try {
   await axios.post(
  "http://localhost:4001/purchase/buy",
  {
    ...data,
    courseTitle: course?.title,
    price: course?.price,
  }
);

    toast.success("Purchase Successful");

    setTimeout(() => {
      navigate("/");
    }, 1000);

  } catch (error) {
    toast.error("Purchase Failed");
    console.log(error);
  }
};
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[500px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Buy Course
        </h1>

        <div className="mb-5 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-lg">
            {course?.title}
          </h2>

          <p className="text-[#895129] font-bold">
            ₹{course?.price}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <select
            {...register("paymentMethod")}
            className="w-full border p-3 rounded-lg"
          >
            <option>UPI</option>
            <option>Card</option>
            <option>Net Banking</option>
          </select>

          <button
          
            type="submit"
            className="w-full bg-[#895129] text-white py-3 rounded-lg"
          >
            Complete Purchase
          </button>
        </form>

      </div>
    </div>
  );
};

export default BuyCourse;