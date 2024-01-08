import axios from "axios";
import { SERVER_URL } from "../constants";

export const getSlotsList = (date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + "/appointments/patient/slots/" + date)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const bookAppointment = (details) => {
  return new Promise((resolve, reject) => {
    axios
      .post(SERVER_URL + "/appointment/patient", details)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAppointments = (date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + "/appointments/hospital/" + date)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPatientAppointment = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + "/appointments/patient/" + data.patientId + "/" + data.date)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const cancelAppointment = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(SERVER_URL + "/appointments/patient/" + data.appointmentId + "/" + data.patientId + "/" + data.date)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
