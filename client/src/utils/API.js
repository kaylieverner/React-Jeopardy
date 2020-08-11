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
  savePlayersScores: function(playerData) {
    return axios.post("/api/playersScores/", playerData)
  },

  getPlayersScores: function() {
    return axios.get("/api/playersScores/")
  },

  ///API routes for AUTH///
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
};
