import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;
const getToken = async () => {
    return localStorage.getItem('ACCESS_TOKEN');
}

class Server {
    methods = ['get', 'post', 'put', 'delete']
    constructor() {
        this.axios = (token) => axios.create({
            baseURL: baseUrl,
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token || ''}`
            }
        });

        this.methods.forEach(method => {
            Server.prototype[method] = async (url, data = {}) => {
                const token = await getToken();
                return this.axios(token)[method](url, data);
            }
        })
    }



}
export default new Server();