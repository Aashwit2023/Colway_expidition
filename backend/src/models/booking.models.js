import mongoose from "mongoose";
const participantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    emergencyContact: {
        type: Number
    },
    address: {
        type: String
    },
    gender: {
        type: String
    }
})
const bookingSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    trekName: {
        type: String,
        required: true
    },
    trekDate: {
        type: String,
        required: true
    },
    participants: [participantsSchema],
    totalMembers: {
        type: Number,
        required: true,
        default: 0
    },
    baseCost: {
        type: Number,
        required: true
    },
    additionalItems: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalCost: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Booking = mongoose.model('Booking', bookingSchema);