import React from 'react';
import Author from './components/Author/Author';
import Directors from "./components/Directors/Directors.jsx";


function App() {
  return (
    <React.Fragment>
      <h1>Cultural Portal start</h1>
      <Author />
      <Directors />
    </React.Fragment>
  );
}

export default App;
