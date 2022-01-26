import { client } from "./index.js";

export function deletingMovies(id) {
  return client
    .db("FirstDB")
    .collection("movies")
    .deleteOne({ id: id });
}
export function findingById(id) {
  return client
    .db("FirstDB")
    .collection("movies")
    .findOne({ id: id });
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
  .updateOne({id:id},{$set:updateMovie});
}