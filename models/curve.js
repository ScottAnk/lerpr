const mongooose = require('mongoose')
const Schema = mongoose.Schema

const curveSchema = new Schema(
    {
        startPoint: {
            type: Mixed,
            required: true,
        },
        endPoint: {
            type: Mixed,
            required: true,
        },
        control1: {
            type: Mixed,
            required: true,
        },
        control2 : {
            type: Mixed,
            required: true
        },
        color: {
            type: Number,
            required: false
        }
    }
)

module.exports = curveSchema