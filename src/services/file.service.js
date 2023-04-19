import axios from "axios";
import authHeader, {authBearer} from "@/services/auth-header";
import {FormData} from "formdata-node";

const API_URL = 'http://localhost:8080/api/file/';

class FileService {

    // getFile() {
    //     return axios.get(API_URL + 'getIssue', {params: {issueId: issueId}, headers: authHeader()})
    // }

    getIssues(projectId) {
        return axios.get(API_URL + 'get', {params: {projectId: projectId}, headers: authHeader()})
    }

    uploadFile(file) {
        // eslint-disable-next-line no-unused-vars
        // let test = authBearer();
        // let formData = new FormData();
        // formData.append("file", file);
        let formData = new FormData();
        formData.append("file", file)
        return axios.post(API_URL + 'upload', formData, {
            params: {file: file},
            headers: {
                "Authorization": authBearer(),
                // "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            }
        });
        // return axios.post(API_URL + 'upload', {"file": file}, {headers: authHeader()})
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

export default new FileService();