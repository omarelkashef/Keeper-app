import React , {useState} from 'react';

function Note(props){    
    function handleClick(event){
        const index = event.target.id;
        props.deleteNote(index);
    }
    
    return <div className="note" index={props.index}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button id={props.index} onClick={handleClick}>DELETE</button>
    </div>;
}

export default Note;