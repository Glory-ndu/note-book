import React, { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./components_notesApp/NoteForm";
import SearchBar from "./components_notesApp/SearchBar";
import NoteList from "./components_notesApp/NoteList";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote= () => {

  };
  

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  }

  const updateNote = (id, newText, newTag) => {
    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, text: newText, tag: newTag } : n
      )
    );
  }

  const filtered = notes.filter(
    (n) =>
      n.text.toLowerCase().includes(search.toLowerCase()) ||
      n.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Notes App</h1>

      <NoteForm onAdd={addNote} />

      <SearchBar value={search} onChange={setSearch} />

      <NoteList
        notes={filtered}
        onDelete={deleteNote}
        onUpdate={updateNote}
      />
    </div>
  );
}