import axios from 'axios';
import authHeader from '@/services/auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all', {headers: authHeader()});
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {headers: authHeader()});
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', {headers: authHeader()});
    }

    getProjectUsers(projectId) {
        return axios.get('http://localhost:8080/api/user/get',
            {params: {projectId: projectId}, headers: authHeader()})
    }

}

export default new UserService();