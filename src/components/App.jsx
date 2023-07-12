import React from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(props){
    const notes = props.notes;
    return (
        <div>
         <Header />
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