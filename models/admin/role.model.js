const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: String,
    permission: {
        type: Array,
        ref: "Permission"
    }
}, {
    timestamps: true,
})

module.exports = {
    Role: mongoose.model('Role', roleSchema)
}
