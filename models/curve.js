const mongoose = require('mongoose')
const Schema = mongoose.Schema

const curveSchema = new Schema({
  startPoint: {
    type: Schema.Types.Mixed,
    required: false,
  },
  endPoint: {
    type: Schema.Types.Mixed,
    required: true,
  },
  control1: {
    type: Schema.Types.Mixed,
    required: true,
  },
  control2: {
    type: Schema.Types.Mixed,
    required: true,
  },
  color: {
    type: Number,
    required: false,
  },
})

module.exports = curveSchema
