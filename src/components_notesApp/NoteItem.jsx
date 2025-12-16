import React, { useState } from "react";

export default function NoteItem({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.text);
  const [editTag, setEditTag] = useState(note.tag);

  function save() {
    onUpdate(note.id, editText.trim(), editTag.trim());
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <input
            type="text"
            value={editTag}
            placeholder="Tag"
            onChange={(e) => setEditTag(e.target.value)}
          />
          <div className="note-buttons">
            <button onClick={save}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          {note.tag && <span className="tag">#{note.tag}</span>}
          <div className="note-buttons">
            <ul>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </ul></div>
        </>
      )}
    </div>
  );
}