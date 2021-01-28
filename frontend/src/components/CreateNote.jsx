import React, { useState } from "react";

function CreateNote(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function updateNote(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    function handleClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input onChange={updateNote} type="text" name="title" placeholder="Title" value={note.title} />
                <textarea onChange={updateNote} type="text" name="content" placeholder="Take a note ..." rows="3" value={note.content} />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;