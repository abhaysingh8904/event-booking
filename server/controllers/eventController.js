const db = require("../config/db");
exports.getEvents = (req, res) => {
  db.query("SELECT * FROM events", (err, result) => res.json(result));
};
exports.getEventById = (req, res) => {
  db.query("SELECT * FROM events WHERE id=?", [req.params.id], (err, result) => res.json(result[0]));
};
exports.createEvent = (req, res) => {
  db.query("INSERT INTO events SET ?", req.body, () => res.json({ message: "Event Created" }));
};