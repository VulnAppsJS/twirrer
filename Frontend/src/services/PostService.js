import axios from 'axios';

export default {
    postsFirstFetch: async function () {
        try {
            const response = await axios.get("/postsFirstFetch");
            return response;
        } catch (error) {
            throw error;
        }
    },

    postsNextFetch: async function (lastKey) {
        try {
            const response = await axios.post("/postsNextFetch", lastKey);
            return response;
        } catch (error) {
            throw error;
        }
    },
}