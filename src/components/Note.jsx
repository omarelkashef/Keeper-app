import React , {useState} from 'react';

function Note(props){
    const [mouse , setMouse] = useState(false);
    
    function handleMouseOver(){
        setMouse(true);
    }
    
    function handleMouseOut(){
        setMouse(false);
    }
    return <div onMouseOver={handleMouseOver} onMouseOut= {handleMouseOut}
                className="note"
                style={{backgroundColor: mouse ? "#f5ba13" : null}}
            >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>;
}

export default Note;