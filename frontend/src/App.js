import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./components.css";

const App = () => {
  const [addNewNote, setAddNewNote] = useState([]);
  const addNote = (note) => {
    setAddNewNote((prevNote) => {
      return [...prevNote, note];
    });
  };
  const deleteNote = (id) => {
    setAddNewNote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {addNewNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
