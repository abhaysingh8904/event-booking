import { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => { api.get("/events").then(r => setEvents(r.data)); }, []);
  return <div>{events.map(e => <EventCard key={e.id} event={e} />)}</div>;
}