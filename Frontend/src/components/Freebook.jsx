
import React, { useState, useEffect } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";

const Slider = SliderImport.default || SliderImport;

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-mvmb.onrender.com/book");
        console.log(res.data);

        // Show all books first
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Free Books</h1>
        <p className="mt-2 text-gray-600">
          Explore our collection of books
        </p>
      </div>

      <Slider {...settings}>
        {book.map((item) => (
          <div key={item._id} className="px-3">
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;