import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [username, setUsername] = useState("User");
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [state, setState] = useState("create");
    const [noteId, setNoteId] = useState(-1);

    useEffect(() => {
        getUser();
        getNotes();
    }, []);

    const getUser = () => {
        api
            .get("/api/user/current/")
            .then((res) => res.data)
            .then((data) => {
                setUsername(data[0].username);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const updateNote = (e) => {
        api
            .put(`/api/notes/update/${noteId}/`, { content, title })
            .then((res) => {
                if (res.status === 200) alert("Note updated!");
                else alert("Failed to update note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const handleCancel = () => {
        setState("create");
    };

    let heading = state === "create" ? "Create a Note" : "Edit Note";
    let onSubmit = state === "create" ? createNote : updateNote;

    return (
        <div>
            <div>
                <h1>Manage your Notes</h1>
                <h2>{username}'s Notes:</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} onChange={setState} setNoteId={setNoteId} setTitle={setTitle} setContent={setContent} key={note.id} />
                ))}
            </div>
            <div className="home-container">
                <h2>{heading}</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        id="content"
                        name="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Submit"></input>
                    {state === "edit" && <button className="cancel-button" onClick={handleCancel}>Cancel</button>}
                </form>
            </div>
        </div>
    );
}

export default Home;