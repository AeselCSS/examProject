const express = require("express");
const userRoutes = express.Router();
const fs = require("fs");

// datapath
const userDataPath = "./storage/users.json";

/* BASE FileSystem functions Syncronous*/
//Write user data to json file
const writeUserData = (data) => {
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFileSync(userDataPath, stringifyData);
  };
  //Read user data from json file
  const readUserData = () => {
    const jsonData = fs.readFileSync(userDataPath);
    return JSON.parse(jsonData);
  };
  
  /* CRUD OPERATORS */
  //CREATE - POST method
  userRoutes.post("/users/create", (req, res) => {
    // read existing user data
    const existingUsers = readUserData();
    // get the new user data from post request
    const userData = req.body;
   //create random userID
    userData.userId = Math.floor(100000 + Math.random() * 900000);
    // check if username is taken
    const findexistingUsers = existingUsers.find(
      (user) => user.username === userData.username
    );
    if (findexistingUsers) {
      return res
        .status(409)
        .send({ error: true, ErrorMessage: "username already exist" });
    }
    //append the user data
    existingUsers.push(userData);
    //save the new user data
    writeUserData(existingUsers);
    res.send({ success: true, Message: "User data added successfully" });
  });
  
  // READ - GET method
  userRoutes.get("/users/list", (req, res) => {
    const users = readUserData();
    res.send(users);
  });
  
  userRoutes.get("/users/:userId", (req, res) => {
    //get the userId from url
    const userId = req.params.userId;
    //get the existing user data
    const existingUsers = readUserData();
    //check if the userId exist or not
    const findexistingUsers = existingUsers.find((user) => user.userId == userId);
    if (!findexistingUsers) {
      return res.status(409).send({ error: true, message: "userId not exist" });
    }
    res.send(findexistingUsers);
  });
  
  /* Update - PUT method */
  userRoutes.put("/users/update/:username", (req, res) => {
    //get the userId from url
    const userId = req.params.userId;
    //get the update data
    const userData = req.body;
    //get the existing user data
    const existingUsers = readUserData();
    //check if the userId exist or not
    const findexistingUsers = existingUsers.find((user) => user.username == userId);
    if (!findexistingUsers) {
      return res.status(409).send({ error: true, message: "userId not exist" });
    }
    //filter the userdata
    const updateUser = existingUsers.filter((user) => user.userId != userId);
    //push the updated data
    updateUser.push(userData);
    //finally save it
    writeUserData(updateUser);
    res.send({
      success: true,
      message: `User with UserId ${userId} updated successfully`,
    });
  });
  /* Delete - Delete method */
  userRoutes.delete("/users/delete/:userId", (req, res) => {
    const userId = req.params.userId;
    //get the existing userdata
    const existingUsers = readUserData();
    //filter the userdata to remove it
    const filterUser = existingUsers.filter((user) => user.userId != userId);
    if (existingUsers.length === filterUser.length) {
      return res
        .status(409)
        .send({ error: true, message: "userId does not exist" });
    }
    //save the filtered data
    writeUserData(filterUser);
    res.send({
      success: true,
      message: `User with UserId ${userId} removed successfully`,
    });
  });

  module.exports = userRoutes;