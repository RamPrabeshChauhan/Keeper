import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Zoom from "@mui/material/Zoom"

function InputArea(props)
{
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event)
    {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote, 
                [name]: value
            }
        })
    }

    function submitNote(event)
    {
        props.onAdd(note);

        setNote({
            title: "",
            content: ""
        })
        
        event.preventDefault();
    }

    function expand()
    {
        setExpanded(true);
    }
    
    return (
        <div>
            <form className="inputArea">
                <input 
                    onChange={handleChange} 
                    onClick={expand}
                    value={note.title} 
                    name="title" 
                    className="title-input" 
                    type="text" 
                    placeholder="Title of note" 
                />

                {isExpanded ? <textarea 
                    onChange={handleChange} 
                    value={note.content} 
                    name="content" 
                    className="content-input" 
                    id="" placeholder="Take a note" 
                    cols="30" 
                    rows="4"
                    wrap="hard">
                </textarea> : null}

                {isExpanded ? <Zoom in={isExpanded}>
                    <button 
                        onClick={submitNote} 
                        className="add-button"
                    >
                        <AddCircleOutlineIcon style={{ fontSize: 48}}/>
                    </button>
                </Zoom> : null}
            </form>
        </div>
    )
}

export default InputArea;