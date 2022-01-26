// importing express
import express from "express"

//importing movie functions
import { searchingMovies, insertingMovies, findingById, deletingMovies,updatingMovie } from "../movieFunctions.js";

// getting router from express
const router = express.Router()

//serching movie data
router.get("/", async (req, res) => {
    // const {rating,name,language} = req.query; // object destructuring and seperating all necessery searching conditions
    // const request = req.query; // object destructuring and seperating all necessery searching conditions
  
    console.log(req.query);
    if (req.query.rating) {
      // since we get rating in string we need to convert to integer
      req.query.rating = +req.query.rating;
    }
    const movies = await searchingMovies(req); // use dot array for converting MongoDB cursor to array
    // let filteredMovies = movies // copying movies in a another variable
    // if(rating){
    //  filteredMovies = filteredMovies.filter(mv=>mv.rating=== +rating)
    // }
    // if(language){
    //      filteredMovies = filteredMovies.filter(mv=>mv.language===language)
    //     }
    // if(name){
    //      filteredMovies = filteredMovies.filter(mv=>mv.name===name)
  
    // }
    res.send(movies);
});
  
//inserting movies
router.post("/", async (req, res) => {
    const newMovies = req.body;
    console.log(newMovies);
    const movies = await insertingMovies(newMovies);
    res.send(movies);
});
  
//updating Movies
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updateMovie = req.body
    const movie = await updatingMovie(id ,updateMovie);
    movie
      ? res.send(movie)
      : res.status(404).send({ message: "No movies found" });
});
  
  
//finding movie by id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const movie = await findingById(id);
    movie
      ? res.send(movie)
      : res.status(404).send({ message: "No movies found" });
});
  
  //deleting movies by id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const movie = await deletingMovies(id);
    res.send(movie);
});

export const movieRouter = router