import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/cart";

const token = localStorage.getItem('token');

const headers = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};

export const addCart = async (id) => {
    const data = await axios.post(`${baseUrl}/add/${id}`, null, headers);
    return data;
}

export const getCart = async () => {
    const res = await axios.get(`${baseUrl}/get`, headers);
    return res;
}