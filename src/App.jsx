import React from 'react';
import Author from './components/Author/Author';
import Directors from "./components/Directors/Directors.jsx";
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Team from './components/Team/Team';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Author />
        <Directors />
        <Team />
      </Main>
    </React.Fragment>
  );
}

export default App;
