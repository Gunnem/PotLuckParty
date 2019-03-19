import axios from "axios";

export default {
  // Gets all potluck
  getPotluckitems: function() {
    return axios.get("/api/potluckitems");
  },
  // Gets the book with the given id
  getPotluckitem: function(id) {
    return axios.get("/api/potluckitems/" + id);
  },
  // Deletes the book with the given id
  deletePotluckitem: function(id) {
    return axios.delete("/api/potluckitems/" + id);
  },
  // Saves a book to the database
  savePotluckitem: function(potluckitemData) {
    return axios.post("/api/potluckitems", potluckitemData);
  }
};
