import axios from '../utils/axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('/api/endpoint'); // Backend endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
