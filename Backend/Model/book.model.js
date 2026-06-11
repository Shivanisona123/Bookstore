import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    title:String,
    auther:String,
    price:Number,
    description:String,
    image:String
})
const Book=mongoose.model("Book",bookSchema);

export default Book;