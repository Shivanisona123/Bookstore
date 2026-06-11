import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import purchaseRoute from "./route/purchase.route.js";
import contactRoute from "./route/contact.route.js";
import userRoute from "./route/user.route.js"
const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// define routes
// define routes
app.use("/book", bookRoute);

app.use("/user", userRoute);
//contact router
app.use("/contact", contactRoute);
//payment
app.use("/purchase", purchaseRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});