import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    return response.data;
};
