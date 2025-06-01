import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    cartBy: {
        type: String
    },
    product: [{
        name: {
            type: String,
        },
        description: {
            type: String
        },
        price: {
            type: String
        },
        quantity: {
            type: String
        },
    }],

    cartTotal: {
        type: String
    }
}, {
    timestamps: true
}
)


export default model('Cart', cartSchema);
