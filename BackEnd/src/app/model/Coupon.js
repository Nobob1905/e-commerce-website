const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coupon = new Schema({
    coupon_name: {type: String},
    description: {type: String},
    code: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 5,
        trim: true,
        match: /^[a-zA-Z0-9]{5}$/  // Chỉ cho phép chữ cái (A-Z, a-z) và số (0-9), đúng 5 ký tự
    },
    discount: {type: Number},
    maxUsage: { type: Number, required: true },
    usedCount: { type: Number, default: 0 },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Coupon', Coupon, 'coupon');