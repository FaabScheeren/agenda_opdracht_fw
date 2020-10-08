const moment = require("moment");

const academyEvents = [
  {
    date: moment("2020-07-21"),
    category: "training",
    duration: "1 dag / 2 sessies",
    location: "Utrecht",
    name: "Contentmapping",
    summary: "Verleng het bereik en de levensduur van je content",
    totalPlaces: 10,
    placesBooked: 3,
    placesAvailable: function () {
      return this.totalPlaces - this.placesBooked;
    },
    opLocatie: true,
  },
  {
    date: moment("2020-07-22"),
    category: "training",
    duration: "2 dagen / 4 SESSIES",
    location: "Amsterdam",
    name: "Video & vloggen voor bedrijven",
    summary:
      "Professionele video's en vlog maken met je smartphone of vlogcamera",
    totalPlaces: 10,
    placesBooked: 8,
    placesAvailable: function () {
      return this.totalPlaces - this.placesBooked;
    },
    opLocatie: true,
  },
  {
    date: moment("2020-07-28"),
    category: "Online training",
    duration: "1 dag",
    location: "VIRTUAL CLASSROOM",
    name: "Facebook & Instagram advertising",
    summary: "Succesvol adverteren op social media: haal meer uit je budget",
    totalPlaces: 10,
    placesBooked: 3,
    placesAvailable: function () {
      return this.totalPlaces - this.placesBooked;
    },
    opLocatie: false,
  },
  {
    date: moment("2020-07-28"),
    category: "Online training",
    duration: "1 dag",
    location: "VIRTUAL CLASSROOM",
    name: "Contentstrategie",
    summary: "Succesvol adverteren op social media: haal meer uit je budget",
    totalPlaces: 10,
    placesBooked: 3,
    placesAvailable: function () {
      return this.totalPlaces - this.placesBooked;
    },
  },
  {
    date: moment("2020-07-29"),
    category: "Training",
    duration: "1 dag",
    location: "Amsterdam",
    name: "Contentstrategie",
    summary: "Succesvol adverteren op social media: haal meer uit je budget",
    totalPlaces: 10,
    placesBooked: 7,
    placesAvailable: function () {
      return this.totalPlaces - this.placesBooked;
    },
    opLocatie: false,
  },
];

module.exports = academyEvents;
