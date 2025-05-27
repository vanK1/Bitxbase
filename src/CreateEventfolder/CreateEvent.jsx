import React, { useState } from "react";

function CreateEvent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim();
    if (fullName.length < 3) {
      alert("Full name must be at least 3 characters.");
      return;
    }
    if (description.trim().length < 10) {
      alert("Description must be at least 10 characters.");
      return;
    }
    let today = new Date().toISOString().split("T")[0];
    if (!date || date < today) {
      alert("Event date must be today or in the future.");
      return;
    }
    if (!time) {
      alert("Please enter a valid time.");
      return;
    }
    if (!venue.trim()) {
      alert("Venue is required.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 11) {
      alert("Phone must be at least 11 digits.");
      return;
    }
    alert("Event created successfully!");
    // You can add your event creation logic here
  }

  return (
    <div className="h-[100vh] bg-[#161616]">
      <div className="h-screen grid grid-cols-[37%_63%]">
        <div className="bg-red-500"></div>
        <div className="bg-[#161616] h-screen sticky top-0 overflow-y-auto flex flex-col justify-between ">
          <div className="h-screen bg-[#ffffff62] overflow-y-auto ">
            <h1 className="text-black font-bold text-[20px] h-[50px]">Event registration</h1>
            <div className="h-[50px] ">
              <p className="font-bold text-[20px]">Register right now while places are available</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="h-[30vh] grid  ">
                <div className="h-[100px] grid grid-cols-2 gap-[20px] ">
                  <section>
                    <span className="flex font-bold">First Name</span>
                    <input
                      type="text"
                      className="h-[50px] w-[100%] border-[2px] border-black"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </section>
                  <section>
                    <span className="flex font-bold">Last Name</span>
                    <input
                      type="text"
                      className="h-[50px] w-[100%] border-[2px] border-black"
                      required
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </section>
                </div>
                <div className="h-[100px] grid grid-cols-2 gap-[20px]">
                  <section>
                    <span className="flex font-bold">Description:</span>
                    <textarea
                      className="h-[50px] w-[100%] border-[2px] border-black"
                      required
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    ></textarea>
                  </section>
                  <section>
                    <span className="flex font-bold">Phone</span>
                    <input
                      type="number"
                      className="h-[50px] w-[100%] border-[2px] border-black"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </section>
                </div>
              </div>
              <div className="h-[50px]">
                <section>
                  <span className="flex font-bold">Date</span>
                  <input
                    type="date"
                    className="w-[100%] h-[50px] border-[2px] border-black"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </section>
              </div>
              <div className="h-[100px] mt-10 grid grid-cols-2 gap-[20px]">
                <div>
                  <section>
                    <span className="flex font-bold">Time</span>
                    <input
                      type="time"
                      className="w-[100%] h-[50px] border-[2px] border-black"
                      required
                      value={time}
                      onChange={e => setTime(e.target.value)}
                    />
                  </section>
                </div>
                <div>
                  <section>
                    <span className="flex font-bold">Venue</span>
                    <input
                      type="text"
                      className="w-[100%] h-[50px] border-[2px] border-black"
                      required
                      value={venue}
                      onChange={e => setVenue(e.target.value)}
                    />
                  </section>
                </div>
              </div>
              <button
                type="submit"
                className="h-[50px] w-[100%] bg-blue-700 rounded-[10px] flex justify-center items-center text-white mt-4"
              >
                <h1>Create Event</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
