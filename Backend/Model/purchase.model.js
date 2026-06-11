import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  paymentMethod: String,
  courseTitle: String,
  price: Number,
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

export default Purchase;