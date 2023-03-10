const mongoose = require('mongoose')
const curveSchema = require('./curve')
const Schema = mongoose.Schema

const sandboxSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    curves: [
      curveSchema
    ]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Sandbox', sandboxSchema)
