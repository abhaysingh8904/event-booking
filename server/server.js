const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/events", require("./routes/eventRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

require("./socket")(io, db);

server.listen(5000, () => console.log("Server running on 5000"));