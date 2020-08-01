import axios from "axios";

export default {
 signUpPost: () =>{
   return axios.post('/api/signupuser')
 },

 loginUser: () =>{
   return axios.get('/api/loginUser')
 }

};
