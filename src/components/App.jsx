import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
import "../components/components.css";

function App() {
    const [addNewNote, setAddNewNote] = useState([])
    function addNote(note){
        setAddNewNote(prevNote => {
            return [...prevNote,note];
        });
    }
    function deleteNote(id){
        setAddNewNote(prevNote => {
          return  prevNote.filter((noteItem,index) => {
                return (index !== id);
            })
        });
    }
    return (
        <div>
            <Header />
            <CreateNote onAdd={addNote}/>
            {addNewNote.map((noteItem,index) => {
                return (<Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/> );
            })}
            <Footer />
        </div>
    );
}

export default App;