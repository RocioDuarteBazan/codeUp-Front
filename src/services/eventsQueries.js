import axios from "axios";

const eventQueries = {

    async getAll(){
        try {
            const response = await axios ('http://localhost:3000/api/event')
            console.log(response);
            return response.data.res
        } catch (error) {
            console.log(error);
            return
        }
    },

    async getById(id){
        try {
            const response = await axios ('http://localhost:3000/api/event/one/' + id)
            return response.data.res
        } catch (error) {
            console.log(error);
            return
        }
    }
}

export default eventQueries