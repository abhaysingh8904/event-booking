export default function EventCard({ event }) {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.location}</p>
      <p>Seats: {event.available_seats}</p>
    </div>
  );
}