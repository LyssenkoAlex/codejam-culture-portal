import React from 'react';
import Header from './components/Header/Header';
import Main from "./components/Main/Main.jsx";
import './style/style.scss';

function App() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='header'>
                    <Header/>
                </div>
                <div className='left-side'/>
                <div className='content'>
                    <Main/>
                </div>
                <div className='aside'/>
                <div className='footer'/>
            </div>
        </React.Fragment>
    );
}

export default App;
