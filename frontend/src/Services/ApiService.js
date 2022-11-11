export class ApiService {

    static apiAddr() { return import.meta.env.VITE_API_ADDR };

    static GetTasks() {
        return fetch(this.apiAddr() + '/tasks');
    }
}