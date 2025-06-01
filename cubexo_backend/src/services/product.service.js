import Product from '../models/product.model';

export const getProduct = async () => {
    const data = await Product.find();
    return data;
}

export const addProduct = async (details) => {
    const data = await Product.create(details);
    return data;
}
export const getproductId = async (id) => {
    const data = await Product.findById({ _id: id });
    if (data != null) {
        return data;
    } else {
        throw new Error('Id is Not Correct or Note not exist')
    }
}