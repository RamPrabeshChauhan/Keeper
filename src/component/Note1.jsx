import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) 
{
    function handleClick()
    {
        props.onDelete(props.id)
    }
    
    return (
        <div className="note">
            <h1 className="title-output">{props.title}</h1>
            <p className="content-output">{props.content}</p>
            <button onClick={handleClick} className="delete-button">
                <DeleteIcon />
            </button>
        </div>
  );
}

export default Note;
