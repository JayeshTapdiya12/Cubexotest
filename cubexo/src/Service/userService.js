import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/users";

export const Userlogin = async (email, password) => {
    const data = {
        email: email,
        password: password
    }

    const res = await axios.post(`${baseUrl}/login`, data);
    return res;

}

export const UserSing = async (name, email, password, seller) => {
    const data = {
        name: name,
        email: email,
        password: password,
        isSeller: seller
    };
    const res = await axios.post(`${baseUrl}`, data);
    return res;
}