import React from "react";
import Heading from "./Header";
import InputArea from "./InputArea";
import Note from "./Note1";
import Footer from "./Footer";
import { useState } from "react/cjs/react.development";

function App()
{
    const [notes, setNotes] = useState([]);
    
    function addNote(newNotes)
    {
        setNotes(prevNotes => {
            return [...prevNotes, newNotes]
        })
    }

    function deleteNote(id)
    {
        setNotes(prevNotes => {
            return prevNotes.filter( (noteItems, index) => {
                return index !== id;
            })
        })
    }
    
    return (
        <div className="oyo">
            <Heading />
            <InputArea 
                onAdd = {addNote}
            />
            {notes.map((noteItems, index) => {
                return <Note 
                    key = {index}
                    id = {index}
                    title = {noteItems.title}
                    content = {noteItems.content}
                    onDelete = {deleteNote}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;

// codesandbox.io/s/keeper-app-part-1-starting-oplw1