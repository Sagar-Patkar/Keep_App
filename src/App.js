import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
      <main>
        <Container>
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
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
