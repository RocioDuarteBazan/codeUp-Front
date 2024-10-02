import axios from "axios";

const apiUser = axios.create(
    {
        baseURL: "http://localhost:3000/api/user",
    }
)

const userQueries = {
    async login(data) {
        try {
            const response = await apiUser.post("/login", data)
            return response.data.res
        } catch (error) {
            if (error.response) {
                return error.response.data.statusMsg;
            } else if (error.request) {
                return "Error al hacer el conecte con el servidor";
            } else {
                return "Error desconocido";
            }
        }
    }
}

export default userQueries