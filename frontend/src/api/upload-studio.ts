import axios from 'axios';
import Studio from '../types/studio';

const uploadStudioApi = async (newStudio: Studio): Promise<number | undefined> => {
    const requestBody = newStudio;

    const response = await axios
        .post(`${process.env.VITE_STUDIOS_API}/`, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return response?.status;
};

export default uploadStudioApi;
