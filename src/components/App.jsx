import React , {useState} from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(props){
    const [notes , setNotes] = useState(props.notes);
    function addNote(title , content){
        setNotes(prev => [...prev , {title: title, content: content}]);
    }
    function deleteNote(index){
        setNotes(prev => prev.filter((x , id)=> index != id));
    }
    return (
        <div>
         <Header />
         <CreateArea notes={notes} addNote={addNote}/>
         {notes.map((x , index) => (
             <Note 
                key={x.key}
                title={x.title} 
                content={x.content} 
                id={index}
                deleteNote={deleteNote}
            />
            ))}   
         <Footer />
        </div>
    );   
}

export default App;