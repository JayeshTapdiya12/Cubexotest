import Product from '../models/product.model';
import Cart from '../models/cart.model';


export const addcart = async (userId, productId) => {


    const product = await Product.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    let userCart = await Cart.findOne({ cartBy: userId });

    if (userCart) {
        const productInCart = userCart.product.find(
            (cartProduct) => cartProduct.name === product.name
        );
        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            userCart.product.push({
                description: product.description,
                price: product.price,
                productName: product.name,
                quantity: 1,

            });
        }
    } else {
        userCart = new Cart({
            cartBy: userId,
            product: [
                {
                    description: product.description,
                    price: product.discountPrice,
                    name: product.name,
                    quantity: 1,
                    price: product.price,
                }
            ]
        });
    }

    userCart.cartTotal = userCart.product.reduce((total, p) => {
        const priceToUse = p.price;
        return total + priceToUse * p.quantity;
    }, 0);

    await userCart.save();
    return userCart;



}

export const getcart = async (userId) => {
    const data = await Cart.findOne({ cartBy: userId });
    if (!data) {
        throw new Error("Cart is note tehre")
    }
    return data;

}