import axios from "axios";

export default {
  // Gets random categories
  getCategories: function(offset) {
    return axios.get("http://jservice.io/api/categories?count=6&offset=" + offset)
  },
  getQuestions: function(id) {
    return axios.get("http://jservice.io/api/category?id=" + id)
  },
  getRandomQuestion: function() {
    return axios.get("http://jservice.io/api/random")
  },

  ///////////////////////////////////////
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
