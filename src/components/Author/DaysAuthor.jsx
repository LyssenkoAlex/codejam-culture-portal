import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {showDirector} from '../../redux/actions/actions';
import {DAYSAUTHOR, AUTHOR} from '../../utils/utils'
import {Link} from 'react-router-dom'
import Title from "./../Title/Title"

import './main.scss'

export default function DaysAuthor()  {
      useEffect(() => {
        window.scrollTo(0, 0);
      });
        
      const daysDirector = useSelector(state => state.directorsOfTheDay);
      const {id, name, yearsOfLife, photo, description} = daysDirector;
      const language = useSelector(state => state.language);
      const dispatch = useDispatch();
      
      const setIdDirectors = (id) => {
        dispatch(showDirector(id))
      };  

      let main = (
        <>
          <Title />
          <div className="author">
            <Link to={AUTHOR.path}>
              <img className="author__img" src={photo} alt={name[language]} onClick={() => setIdDirectors(id)} />
            </Link>
            <h3 className="author__daysAuthor">{DAYSAUTHOR[language]}</h3>
            <h2 className="author__header">{name[language]}</h2>
            <p className="author__years">{yearsOfLife}</p>
            <p className="author__description">{description[language]}</p>
          </div>
        </>
      );
      
    return (
      <React.Fragment>
        <section className="main">
          {main}
        </section>
      </React.Fragment>
    )
}
