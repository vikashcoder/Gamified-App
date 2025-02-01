import axios from 'axios';

 const API_URL = '/Uw5CrX'

const fetchQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        throw error;
    }
};

export default fetchQuizData;