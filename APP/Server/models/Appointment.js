const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  slotStart: Number,
  slot: String,
  date: Number,
  patientId: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  gender: String,
  address: String,
  contact: Number,
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
