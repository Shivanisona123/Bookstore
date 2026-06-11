import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  price: String,
  description: String,
  image: String,
});
const Book=mongoose.model("Book",bookSchema);

export default Book;