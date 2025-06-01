import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/product";


export const addProduct = async (name, description, price) => {
    const data = {
        name: name,
        description: description,
        price: price
    };
    const res = await axios.post(`${baseUrl}/add`, data);
    return res;
}

export const getProduct = async () => {
    const res = await axios.get(`${baseUrl}/get`);
    return res;
}

export const getproductbyid = async (id) => {
    console.log(id)
    const res = await axios.get(`${baseUrl}/get/${id}`);
    return res;
}