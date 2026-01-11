const db = require("../config/db");
exports.bookTicket = (req, res) => {
  const { event_id, quantity } = req.body;
  db.query("UPDATE events SET available_seats = available_seats - ? WHERE id=?", [quantity, event_id]);
  db.query("INSERT INTO bookings SET ?", req.body, () => res.json({ message: "Booked" }));
};