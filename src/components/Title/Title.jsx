import React from 'react';
import { useSelector } from "react-redux";
import {TITLE} from './../../utils/utils'
import "./Title.scss"

export default function Title() {
    const lang = useSelector(state => state.language);
    
    return (
        <React.Fragment>
            <div className = "title">
                <h1>{TITLE[lang]}</h1>
                <div className = "title-description">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;В формировании белорусского профессионального театра большую роль сыграла театральная культура русского, украинского и польского народов. В белорусских городах действовали местные русские драматические труппы, а также гастролировали актеры столичных театров. Под воздействием выступлений профессиональных театров в белорусских городах и местечках образовывались любительские театральные коллективы, что способствовало становлению белорусского театра.
                    Портал посвящен известным деятелям театрального искусства, внесшим значительный вклад в развитие белорусского театра</p>
                </div>
            </div>
        </React.Fragment>
    )
}
