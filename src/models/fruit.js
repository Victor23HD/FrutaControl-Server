import mongoose from "mongoose";

const Fruit = mongoose.model("Fruit", {
    name: {
        type: String, 
        required: [true, "The Name field is required!"],
    },
    type: {
        type: String,
        required: [true, "The Type field is required!"],
    },
    quantity: {
        type: Int32Array,
        required: [true, "The Quantity field is required!"],
    },
    price: {
        type: Float32Array,
        required: [true, "The Price field is required!"],
    },
    supplier: {
        type: String,
        required: [true, "The Supplier field is required!"],
    },
    dueDate: {
        type: Date,
        required: [true, "The Due Date field is required!"],
    },
    weightPerUnit: {
        type: Int32Array,
        required: [true, "The Weight Per Unit field is required!"],
    },
    category: {
        type: String,
        required: [true, "The Category Per Unit field is required!"],
    }
})

export default Fruit;