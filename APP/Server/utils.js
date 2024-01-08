const slotsList = [
  {
    slot: "10:00AM - 10:30AM",
    slotStart: 1000,
  },
  {
    slot: "10:30AM - 11:00AM",
    slotStart: 1030,
  },
  {
    slot: "11:00AM - 11:30AM",
    slotStart: 1100,
  },
  {
    slot: "11:30AM - 12:00PM",
    slotStart: 1130,
  },
  {
    slot: "12:00PM - 12:30PM",
    slotStart: 1200,
  },
  {
    slot: "12:30PM - 1:00PM",
    slotStart: 1230,
  },
  {
    slot: "2:00PM - 2:30PM",
    slotStart: 1400,
  },
  {
    slot: "2:30PM -  3:00PM",
    slotStart: 1430,
  },
  {
    slot: "3:00PM - 3:30PM",
    slotStart: 1500,
  },
  {
    slot: "3:30PM - 4:00PM",
    slotStart: 1530,
  },
  {
    slot: "4:00PM - 4:30PM",
    slotStart: 1600,
  },
  {
    slot: "4:30PM - 5:00PM",
    slotStart: 1630,
  },
  {
    slot: "5:00PM - 5:30PM",
    slotStart: 1700,
  },
  {
    slot: "5:30PM - 6:00PM",
    slotStart: 1730,
  },
  {
    slot: "6:00PM - 6:30PM",
    slotStart: 1800,
  },
  {
    slot: "6:30PM - 7:00PM",
    slotStart: 1830,
  },
];

const fake = [
  {
    _id: "606924abe2199d14d8aa0ab7",
    slot: "3:00PM - 3:30PM",
    date: 1617503152507,
    patientId: "6068b74f139ef03bb8135cda",
    name: "Shantanu Patil",
    age: 24,
    gender: "M",
    address: "Nashik",
    contact: 9028546165,
    __v: 0,
  },
  {
    _id: "606929be10dd3d2af834835e",
    slot: "10:00AM - 10:30AM",
    date: 1617503152507,
    patientId: "6068b74f139ef03bb8135cda",
    name: "Shantanu Patil",
    age: 24,
    gender: "M",
    address: "Nashik",
    contact: 9028546165,
    __v: 0,
  },
];

const getSlotsForPatients = (bookings) => {
  let timeSlots = [];
  for (let i = 0; i < slotsList.length; i++) {
    for (let j = 0; j < bookings.length; j++) {
      if (bookings[j].slot === slotsList[i].slot) {
        timeSlots.push({
          slot: slotsList[i].slot,
          slotStart: slotsList[i].slotStart,
          booked: true,
        });
      }
    }
    if (!timeSlots[i]) {
      timeSlots.push({
        slot: slotsList[i].slot,
        slotStart: slotsList[i].slotStart,
        booked: false,
      });
    }
  }
  for (let i = 0; i < timeSlots.length; i++) {}
  return timeSlots;
};

module.exports.getSlotsForPatients = getSlotsForPatients;
module.exports.slotsList = slotsList;
module.exports.fake = fake;
