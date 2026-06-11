import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  price: String,
  description: String,
  coverImage: String,
});
const Book=mongoose.model("Book",bookSchema);

export default Book;