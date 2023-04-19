import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'http://localhost:8080/api/comment/';

class CommentService {

    getComments(issueId) {
        return axios.get(API_URL + 'get', {params: {issueId: issueId}, headers: authHeader()})
    }

    addComment(text, issueId, userId) {
        return axios.post(API_URL + 'add',
            {
                text: text,
                issueId: issueId,
                userId: userId
            }, {headers: authHeader()});
    }
    //
    // deleteIssue(issueId) {
    //     return axios.post(API_URL + 'delete', {}, {params: {issueId: issueId}, headers: authHeader()})
    // }
    //
    // updateIssue(id, title, summary, description, type, status) {
    //     return axios.post(API_URL + 'update', {
    //         id: id,
    //         title: title,
    //         summary: summary,
    //         description: description,
    //         type: type,
    //         status: status,
    //     }, {headers: authHeader()})
    // }
}

export default new CommentService();