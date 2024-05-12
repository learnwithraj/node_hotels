const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("Item saved..");
    res.status(200).json(response);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched..");
    res.status(200).json(data);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const response = await MenuItem.find({ taste: tasteType });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Taste Not found" });
    }
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedMenuData = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    console.log("menu updated");
    res.status(200).json(response);
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    console.log("menu updated");
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//comments added
module.exports = router;
