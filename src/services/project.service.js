import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'http://localhost:8080/api/project/';

class ProjectService {
    getProjects(user) {
        return axios.get(API_URL + 'get', {params: {userId: user.id}, headers: authHeader()})
    }

    getProject(projectId) {
        return axios.get(API_URL + 'getByProjectId', {params: {projectId: projectId}, headers: authHeader()})
    }

    addProject(title, description) {
        return axios.post(API_URL + 'add', {title: title, description: description}, {headers: authHeader()});
    }

    deleteProject(projectId) {
        return axios.post(API_URL + 'delete', {}, {params: {projectId: projectId}, headers: authHeader()})
    }

    addUserToProject(projectId, username, permission) {
        return axios.post(API_URL + 'addUserToProject', {}, {
            params: {
                projectId: projectId,
                username: username,
                permission: permission
            },
            headers: authHeader()
        })
    }

    updateProject(projectId, title, description) {
        return axios.post(API_URL + 'update', {
            id: projectId,
            title: title,
            description: description
        }, {headers: authHeader()})
    }

    getProjectPermissions(projectId) {
        return axios.get(API_URL + 'permissions', {params: {projectId: projectId}, headers: authHeader()})
    }
}

export default new ProjectService();