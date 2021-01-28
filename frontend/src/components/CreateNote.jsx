import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const updateNote = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          onChange={updateNote}
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={updateNote}
          type="text"
          name="content"
          placeholder="Take a note ..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
