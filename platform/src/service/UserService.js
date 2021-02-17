import axios from 'axios';

const USER_BASE_URL = 'http://localhost:8080/users';

class UserService{
  createUser(user){
    return axios.post(USER_BASE_URL, user);
  }

  fetchUserByEmailANDPassword(user){
    return axios.post(USER_BASE_URL, user);
  }
}

export default UserService;



// https://velog.io/@jch9537/REST-API-LogIn-GET-vs-POST 나중에 읽어보자