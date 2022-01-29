import express from "express";
import { genPassword, createuser, getUserByName } from "../movieFunctions.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashepassword = await genPassword(password);
  const isUserExists = await getUserByName(username);
  if (isUserExists) {
    res.status(400).send({ message: "user already exists" });
    return;
  }
  if (
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)
  ) {
    res.status(400).send({ message: "password pattern does not match" });
    return;
  }
  const result = createuser(username, hashepassword);
  console.log(isUserExists);
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const isUserExists = await getUserByName(username);
  if (!isUserExists) {
    res.status(400).send({ message: "invalid  user" });
    return;
  }
  const storedpassword = isUserExists.hashepassword;
  const ispasswordmatch = await bcrypt.compare(password, storedpassword);
  if (!ispasswordmatch) {
    res.status(400).send({ message: "invalid  user" });
    return;
  }
  const token = Jwt.sign({id:isUserExists._id},process.env.SECRET_KEY)
  res.send({message:"Welcome", token:token});
});

export const userRoute = router;
