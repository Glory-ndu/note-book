import React, { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");

  function handleAdd() {
    if (!text.trim()) return;      
    onAdd(text.trim(), tag.trim());
    setText("");
    setTag("");
  }

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tag (optional)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}