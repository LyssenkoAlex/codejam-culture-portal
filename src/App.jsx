import React from 'react';
import Header from './components/Header/Header';
import Main from "./components/Main/Main.jsx";
import Title from "./components/Title/Title.jsx"
import './style/style.scss';

function App() {
    return (
        <React.Fragment>
            <div className='container' >
                <div className='background'>
                </div>
                <div className='header'>
                    <Header/>
                </div>
                
                <div className='content'>
                    <Title/>
                    <Main/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
