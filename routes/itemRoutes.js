const express = require("express");
const formData = require("express-form-data");
const itemRoutes = express.Router();
const fs = require("fs");

// uploads
itemRoutes.use("/uploads", express.static("uploads"));
const options = {
  uploadDir: "./uploads",
};


// datapath
const itemDataPath = "./storage/items.json";

/* BASE FileSystem functions Syncronous*/
//Write item data to json file
const writeItemData = (data) => {
  const stringifyData = JSON.stringify(data, null, 2);
  fs.writeFileSync(itemDataPath, stringifyData);
};
//Read item item from json file
const readItemData = () => {
  const jsonData = fs.readFileSync(itemDataPath);
  return JSON.parse(jsonData);
};

/* ITEM CRUD OPERATORS */
//CREATE - POST method
itemRoutes.post("/items/create", formData.parse(options), (req, res) => {
  // read existing item data
  const existingItems = readItemData();
  // get the new item data from post request
  const itemData = req.body;
  //create random item id
  itemData.itemId = Math.floor(1000 + Math.random() * 9000);
  //add uploaded item
  itemData.image = req.files.image.path.replace("\\", "/");
  //append the item data
  existingItems.push(itemData);
  //save the new user data
  writeItemData(existingItems);
  res.send({ success: true, Message: "item data added successfully" });
});

// READ ITEM - GET method
itemRoutes.get("/items/list", (req, res) => {
  const items = readItemData();
  res.send(items);
});

// READ ITEM BY ID- GET method
itemRoutes.get("/items/:itemId", (req, res) => {
  //get the itemname from url
  const itemId = req.params.itemId;
  //get the existing user data
  const existingItems = readItemData();
  //check if the itemId exist or not
  const findExistingItem = existingItems.find((item) => item.itemId == itemId);
  if (!findExistingItem) {
    return res
      .status(409)
      .send({ error: true, message: "Item ID does not exist" });
  }
  res.send(findExistingItem);
});

/* Update - PUT method */
itemRoutes.put("/items/update/:itemId", formData.parse(options), (req, res) => {
  //get the itemname from url
  const itemId = req.params.itemId;
  //get the update data
  const itemData = req.body;
  //add uploaded item
  itemData.image = req.files.image.path.replace("\\", "/");
  //get the existing user data
  const existingItems = readItemData();
  //check if the itemname exist or not
  const findExistingItem = existingItems.find((item) => item.itemId == itemId);
  if (!findExistingItem) {
    return res
      .status(409)
      .send({ error: true, message: "Item ID does not exist" });
  }
  //filter the itemdata
   const updateItem = existingItems.filter((item) => item.itemId != itemId);
   
  //push the updated data
  updateItem.push(itemData);
  console.log(updateItem);
  //finally save it
  writeItemData(updateItem);
  res.send({
    success: true,
    message: `ItemId updated successfully`,
  });
});
/* Delete - Delete method */
itemRoutes.delete("/items/delete/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  //get the existing userdata
  const existingItems = readItemData();
  //filter the userdata to remove it
  const filterItem = existingItems.filter((item) => item.itemId != itemId);
  if (existingItems.length === filterItem.length) {
    return res
      .status(409)
      .send({ error: true, message: "itemId does not exist" });
  }
  //save the filtered data
  writeItemData(filterItem);
  res.send({
    success: true,
    message: `Item removed successfully`,
  });
});

module.exports = itemRoutes;
