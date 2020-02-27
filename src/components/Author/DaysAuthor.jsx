import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DAYSAUTHOR} from '../../utils/utils'

import './main.scss'
import ScrollToTop from "../Directors/ScrollToTop";

class daysAuthor extends Component {
    
    render() {
    let main;
      const {name, yearsOfLife, photo, description} = this.props.selectedDirector;
      const {language} = this.props;
      main = (
        <>
          <ScrollToTop />
          <div className="author">
            <img className="author__img" src={photo} alt={name[language]} />
            <h3 className="author__daysAuthor">{DAYSAUTHOR[language]}</h3>
            <h2 className="author__header">{name[language]}</h2>
            <p className="author__years">{yearsOfLife}</p>
            <p className="author__description">{description[language]}</p>
          </div>
        </>
      );
    return (
      <section className="main">
        {main}
      </section>
    )
  }
}

const mapStateToProps = state => ({
    selectedDirector: state.selectedDirector,
    language: state.language
});


export default connect(mapStateToProps, null)(daysAuthor);

daysAuthor.propTypes = {
    selectedDirector: PropTypes.objectOf(PropTypes.any).isRequired,
    language: PropTypes.string.isRequired,
    workList: PropTypes.objectOf(PropTypes.any),
};

