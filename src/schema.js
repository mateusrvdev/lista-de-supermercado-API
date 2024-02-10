const mongoose = require("mongoose");

const itemListSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

const listItem = mongoose.model("list_item", itemListSchema);

module.exports = listItem;
