import React from "react";
import Collapsible from "../components/Collapsible";
import "../styles/Note.css"

function Note({ note, onDelete, onChange, setNoteId, setTitle, setContent }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <Collapsible closed title={note.title}>
                <p className="note-content">{note.content}</p>
                <p className="note-date">{formattedDate}</p>
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
                <button className="update-button" onClick={() => { onChange("edit"); setNoteId(note.id); setTitle(note.title); setContent(note.content)}}>
                    Edit
                </button>
            </Collapsible>
        </div>
    );
}

export default Note