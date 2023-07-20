import React , {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){    
    function handleClick(event){
        const index = event.target.id;
        props.deleteNote(index);
    }
    
    return <div className="note" index={props.index}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button id={props.index} onClick={handleClick}>
            <DeleteIcon />
        </button>
    </div>;
}

export default Note;