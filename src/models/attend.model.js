const { Schema, model } = require("mongoose");

const attendSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  inTime: {
    type: Date,
    required: true,
  },
  //   outTime: {
  //     type: Date,
  //   },
});

module.exports = model("Attend", attendSchema);
