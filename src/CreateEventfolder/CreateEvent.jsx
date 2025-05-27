import React from "react";

function CreateEvent() {
  function CreateEvent() {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let venue = document.getElementById("venue").value.trim();
    let organizer = document.getElementById("organizer").value.trim();

    if (title.length < 3) {
      alert("Title must be at least 3 characters.");
      return false;
    }

    if (description.length < 10) {
      alert("Description must be at least 10 characters.");
      return false;
    }

    let today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("Event date must be today or in the future.");
      return false;
    }

    if (!time) {
      alert("Please enter a valid time.");
      return false;
    }

    if (!venue || !organizer) {
      alert("Venue and Organizer are required.");
      return false;
    }
  }
  return (
    <script></script>
  );
}

export default CreateEvent;
