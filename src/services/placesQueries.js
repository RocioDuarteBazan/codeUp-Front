import axios from "axios";

const placesQueries = {

    async getAll(){
        try {
            const response = await axios ('http://localhost:3000/api/place')
            console.log(response);
            return response.data.res
        } catch (error) {
            console.log(error);
            return
        }
    },
}

export default placesQueries