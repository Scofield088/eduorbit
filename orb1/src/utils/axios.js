import axios from 'axios';

// Set the base URL for all Axios requests
axios.defaults.baseURL = 'http://localhost:4000'; // Your backend's base URL

// Optional: Add default headers or interceptors here
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
