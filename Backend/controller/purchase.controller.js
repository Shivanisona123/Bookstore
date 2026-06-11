import Purchase from "../Model/purchase.model.js";

export const buyCourse = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);

    await purchase.save();

    res.status(201).json({
      message: "Course Purchased Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Purchase Failed",
    });
  }
};