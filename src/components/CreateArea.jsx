import React , {useState} from "react";

function CreateArea(props) {

  const [titleText , setTitleText] = useState("");
  const [contentText , setContentText] = useState("");
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
      <form>
        <input name="title" placeholder="Title" value={titleText}
               onChange={handleTextChange} />
        <textarea name="content" placeholder="Take a note..." rows="3"
                  value={contentText} onChange={handleTextChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
