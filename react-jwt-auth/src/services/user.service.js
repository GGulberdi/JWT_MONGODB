import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/auth';
const STAFF_URL = 'http://localhost:8000/api/staff';


class UserService {
  getPublicContent() {
    return axios.get(STAFF_URL);
  }

  getUserBoard() {
    // return axios.get(API_URL + 'user', { headers: authHeader() });
    return axios.get(API_URL + 'user', { headers: authHeader() });

  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();