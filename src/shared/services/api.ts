import axios from 'axios';

const Api = axios.create({ baseURL: 'https://tarefas.viniciuss.dev/api/tarefas' });

export default Api;
