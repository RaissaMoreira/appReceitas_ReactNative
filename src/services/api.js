import axios from 'axios';

// Rodar com IPVA: 
// json-server --watch -d 180 --host 192.168.1.5 db.json

const api = axios.create({
  baseURL: 'http://192.168.1.5:3000'
})

export default api;