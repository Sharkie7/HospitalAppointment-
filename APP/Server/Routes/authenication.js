const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Patient = require("../models/Patient");

router.post("/login/patient", (req, res) => {
  Patient.find({ email: req.body.email, password: req.body.password })
    .exec()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response[0]);
      } else {
        res.status(400).json({
          message: "Invalid Credentials",
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/login/hospital", (req, res) => {
  if (req.body.email === "hospital@email.com" && req.body.password === "test@123") {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({
      message: "Invalid Credentials",
    });
  }
});

router.post("/signup/patient", (req, res) => {
  const patientDetails = new Patient({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  Patient.find({ email: req.body.email })
    .exec()
    .then((doc) => {
      if (doc.length === 0) {
        patientDetails
          .save()
          .then((result) => {
            console.log(result);
            res.status(200).json(result);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
          });
      } else {
        res.status(400).json({
          message: "Account Already Exists",
        });
      }
    });
});

router.get("/", (req, res) => {
  Patient.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
