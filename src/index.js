import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import notes from "./notes"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App notes={notes}/>);
