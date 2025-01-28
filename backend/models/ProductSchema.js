    import mongoose from "mongoose";

    const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    images: [
        {
        url: {
            type: String,
        },
        alt: {
            type: String,
            value:'https://picsum.photos/200/306?random=7'
        },
        },
    ],
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        name: {
            type: String,
            // required: true,
        },
        rating: {
            type: Number,
            // required: true,
            min: 0,
            max: 5,
        },
        comment: {
            type: String,
            // required: true,
        },
        },
    ],
    });

    const Product = mongoose.model('Product', productSchema);

    export default Product
