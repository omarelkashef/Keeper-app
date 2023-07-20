import React , {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [titleText , setTitleText] = useState("");
  const [contentText , setContentText] = useState("");
  const [showFullArea , setshowFullArea] = useState(false);

  function handleMouseClick(){
    setshowFullArea(true);
  }

  function handleTextChange(event){
    const {name , value} = event.target;
    if(name ==="title"){
        setTitleText(value);

    }else if(name === "content"){
        setContentText(value);
    }
  }
  function handleClick(event){
    props.addNote(titleText,contentText)
    setContentText("");
    setTitleText("");
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" value={titleText}
               onChange={handleTextChange} 
                onClick={handleMouseClick}
               />
            {showFullArea && <textarea name="content" placeholder="Take a note..." 
                rows= "3"
                value={contentText} onChange={handleTextChange} />
            }
        <Zoom in={showFullArea}>
            <Fab onClick={handleClick}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
