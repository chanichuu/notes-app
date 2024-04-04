import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete, onChange }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
            <button className="update-button" onClick={() => onChange(note.id)}>
                Edit
            </button>
        </div>
    );
}

export default Note