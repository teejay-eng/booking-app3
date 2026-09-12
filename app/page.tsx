
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [room, setRoom] = useState("Standard Room");
  const [message, setMessage] = useState("");

  function handleBooking(e) {
    e.preventDefault();
    alert(`Booking successful! ${name}, your ${room} is booked for ${date} for ${guests} guest(s).`
    );

    setMessage(
      `Booking successful! ${name}, your ${room} is booked for ${date} for ${guests} guest(s).`
    );
  }

  return (
    <main>
      <h1>Hotel Booking App</h1>

      <form onSubmit={handleBooking}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Booking Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Room Type</label>
        <select
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="Standard Room">Standard Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Executive Suite">Executive Suite</option>
        </select>

        <label>Number of Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <button type="submit">Book Now</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}

