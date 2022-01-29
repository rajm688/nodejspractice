import { client } from "./index.js";
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb";
export function deletingMovies(id) {
  return client
    .db("FirstDB")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id)});
}
export function findingById(id) {
  return client
    .db("FirstDB")
    .collection("movies")
    .findOne({ _id: ObjectId(id)});
}
export function insertingMovies(newMovies) {
  return client
    .db("FirstDB")
    .collection("movies")
    .insertMany(newMovies);
}
export function searchingMovies(req) {
  return client
    .db("FirstDB")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export function updatingMovie(id, updateMovie){
  return client
  .db("FirstDB")
  .collection("movies")
  .updateOne( {_id: ObjectId(id)},{$set:updateMovie});
}
export async function genPassword(password){
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password,salt)
  console.log(salt,hashedpassword)
  return hashedpassword
}

export function createuser(username,hashepassword) {
  return client
    .db("FirstDB")
    .collection("users")
    .insertOne({username:username,hashepassword:hashepassword});
}
export async function getUserByName(username) {
  return client
    .db("FirstDB")
    .collection("users")
    .findOne({username:username });
}