import React from 'react';
import Header from './components/Header/Header.jsx';
import Main from "./components/Main/Main.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <MainPage/>
        </React.Fragment>
    );
}

export default App;
