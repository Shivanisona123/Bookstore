// controller/contact.controller.js

import Contact from "../Model/contact.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      message: "Message send successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to store message",
    });
  }
};