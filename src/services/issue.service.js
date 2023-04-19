import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'http://localhost:8080/api/issue/';

class IssueService {

    getIssue(issueId) {
        return axios.get(API_URL + 'getIssue', {params: {issueId: issueId}, headers: authHeader()})
    }

    getIssues(projectId) {
        return axios.get(API_URL + 'get', {params: {projectId: projectId}, headers: authHeader()})
    }

    addIssue(title, summary, description, type, status, projectId, assignedUserId) {
        return axios.post(API_URL + 'add',
            {
                title: title,
                summary: summary,
                description: description,
                type: type,
                status: status,
                projectId: projectId,
                assignedUserId: assignedUserId
            }, {headers: authHeader()});
    }

    deleteIssue(issueId) {
        return axios.post(API_URL + 'delete', {}, {params: {issueId: issueId}, headers: authHeader()})
    }

    updateIssue(id, title, summary, description, type, status) {
        return axios.post(API_URL + 'update', {
            id: id,
            title: title,
            summary: summary,
            description: description,
            type: type,
            status: status,
        }, {headers: authHeader()})
    }
}

export default new IssueService();