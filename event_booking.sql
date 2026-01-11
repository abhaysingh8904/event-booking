CREATE DATABASE event_booking;
USE event_booking;

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  date DATETIME,
  total_seats INT,
  available_seats INT,
  price DECIMAL(10,2),
  img VARCHAR(255)
);

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT,
  name VARCHAR(100),
  email VARCHAR(100),
  mobile VARCHAR(15),
  quantity INT,
  total_amount DECIMAL(10,2),
  booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  status ENUM('confirmed','cancelled'),
  FOREIGN KEY (event_id) REFERENCES events(id)
);