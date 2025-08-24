import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const subjects = [
    { title: "DSA Notes", desc: "Basics of arrays, stacks, queues, linked lists." },
    { title: "DBMS Notes", desc: "Database design, SQL queries, normalization, ER diagrams." },
    { title: "OS Notes", desc: "Processes, scheduling, memory management, file systems." },
    { title: "Computer Networks Notes", desc: "OSI model, TCP/IP, routing, switching, protocols." },
    { title: "VLSI Notes", desc: "CMOS logic, fabrication, circuit design, logic styles." },
    { title: "DSP Notes", desc: "Fourier transforms, filters, z-transforms, signal processing." },
    { title: "Digital Communication Notes", desc: "Modulation, coding techniques, error detection, channel capacity." },
    { title: "DSDV Notes", desc: "Digital System Design & Verification, FSMs, Verilog basics." },
    { title: "AI Notes", desc: "Artificial Intelligence basics, search algorithms, expert systems." },
    { title: "ML Notes", desc: "Machine learning models, regression, classification, clustering." },
    { title: "Web Development Notes", desc: "HTML, CSS, JavaScript, React basics for frontend development." },
    { title: "IoT Notes", desc: "IoT architectures, ESP32, sensors, real-time applications." },
    { title: "Data Security Notes", desc: "Cryptography, authentication, access control, hashing." },
  ];

  // Filtered subjects based on search
  const filteredSubjects = subjects.filter((sub) =>
    sub.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2 className="home-title">Uploaded Notes</h2>

      {/* 🔍 Search + Filter */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />
        <button onClick={() => setSearch("")} className="filter-reset">
          Reset
        </button>
      </div>

      {/* Notes Grid */}
      <div className="notes-grid">
        {filteredSubjects.map((sub, index) => (
          <div className="note-card" key={index}>
            <h3 className="note-title">{sub.title}</h3>
            <p className="note-description">{sub.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;