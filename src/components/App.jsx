import React , {useState} from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputNote from "./InputNote";

function App(props){
    const [notes , setNotes] = useState(props.notes);

    return (
        <div>
         <Header />
         <InputNote notes={notes} addNote={setNotes}/>
         {notes.map(x => (
             <Note 
                key={x.key}
                title={x.title} 
                content={x.content} 
            />
            ))}   
         <Footer />
        </div>
    );   
}

export default App;