import React from "react";
import "./Upload.css";

function Upload() {
  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Your Notes</h2>
      <form className="upload-form">
        <input type="text" placeholder="Title of Notes" required />
        <textarea placeholder="Short description..." rows="4" required></textarea>
        <input type="file" accept=".pdf,.doc,.ppt,.txt" required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;