import { logout } from "../utils/tokenHandler";
import { httpAuthClient } from "../http-client/httpClient";

class NotesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getNotes() {
        return this.apiCall(() => this.httpClient.get('/api/notes'));
    }

    async getNote(noteId) {
        return this.apiCall(() => this.httpClient.get(`/api/notes/${noteId}`));
    }

    async addNote() {
        return this.apiCall(() => this.httpClient.post('/api/notes', note));
    }

    async editNote() {
        return this.apiCall(() => this.httpClient.put(`/api/notes/${note.id}`, note));
    }

    async deleteNote() {
        return this.apiCall(() => this.httpClient.delete(`/api/notes/${noteId}`));
    }

    async apiCall(callback) {
        try {
            return await callback();
        } catch (error) {
            console.log(error.message);
            if(error.status === 401) {
                logout();
            }
            return error;
        }
    }
}

export default new NotesService(httpAuthClient);