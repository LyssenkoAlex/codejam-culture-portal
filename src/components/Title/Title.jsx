import React from 'react';
import { useSelector } from "react-redux";
import {TITLE, DESCRIPTION} from './../../utils/utils'
import "./Title.scss"

export default function Title() {
    const lang = useSelector(state => state.language);
    
    return (
        <React.Fragment>
            <div className = "title">
                <h1>{TITLE[lang]}</h1>
                <div className = "title-description">
                    <p>{DESCRIPTION[lang]}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
