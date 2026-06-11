
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-8 py-10 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            We are delighted to have you here ♥︎
          </h1>
          <p>
            Welcome to our course! We're excited to have you join us on this
            learning journey.
          </p>

          <Link to="/">
            <button className="bg-[#895129] text-white px-4 py-2 rounded mt-4">
              Back
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;