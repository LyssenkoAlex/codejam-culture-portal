import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Directors.css';
import {Link} from 'react-router-dom'
import {showDirector} from '../../redux/actions/actions';
import {HOME} from '../../utils/utils';
//import {Route} from "react-router-dom";

function Directors(props) {

  let [value, setValue] = useState('')

  const searchDirector = (e) => {
    if (e.currentTarget.value) {
      let newValue = e.currentTarget.value
      setValue(() => newValue.toLowerCase())
    } else {
      setValue(() => '')
    }
  }

  let authors = value ? props.directors.filter(d => (d.name[props.language].toLowerCase()).includes(value)) : props.directors

  let elements = authors.map((item, index) =>

    <li key={index} className = 'block_director'>
      <Link to={HOME.path}>
        {() => props.showDirector(item.id)}
        <img src={item.photo}/>
        <p>{item.name[props.language]}</p>
      </Link>
    </li>
  )

  return (
    <div className = 'main_directors'>
      <input onChange={searchDirector}/>
      <ul className = 'block_directors'>
        {elements}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  showDirector
};


const mapStateToProps = state => ({
  directors: state.directors,
  language: state.language
});
export default connect(mapStateToProps, mapDispatchToProps)(Directors);

Directors.propTypes = {
  directors: PropTypes.arrayOf(PropTypes.any).isRequired,
  language: PropTypes.string.isRequired,
  showDirector: PropTypes.func.isRequired
};

