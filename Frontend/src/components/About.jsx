import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#895129] mb-6">
          Welcome to Bookstore 📚
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bookstore is an online platform where book lovers can discover,
          purchase, and read books anytime, anywhere. We believe that knowledge
          should be accessible to everyone, which is why we offer both premium
          books and a collection of free books for our readers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <div className="text-5xl mb-4">📖</div>
          <h2 className="text-xl font-semibold mb-2">Read Online</h2>
          <p className="text-gray-600">
            Enjoy reading books directly from our platform without downloading.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold mb-2">Buy Books</h2>
          <p className="text-gray-600">
            Explore a wide collection of books and purchase your favorites.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <div className="text-5xl mb-4">🎁</div>
          <h2 className="text-xl font-semibold mb-2">Free Books</h2>
          <p className="text-gray-600">
            Access a growing library of free books available for all readers.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-[#f9f5f1] rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          Our mission is to make reading simple, affordable, and accessible.
          Whether you're looking to learn new skills, explore stories, or enjoy
          free reading resources, Book Haven is here to support your journey.
        </p>
      </div>
    </div>
  );
};

export default About;