import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Biography from './Biography';
import Works from './Works';
import Slider from './Slider';
import Map from './Map';
import Video from './Video';
import './main.scss'
import {WORKS, BIOGRAPHY} from "../../utils/utils";
import ScrollToTop from "../Directors/ScrollToTop";

class Author extends Component {

  render() {
    let main;
      const {name, yearsOfLife, photo, images, video, map, biography , workList} = this.props.selectedDirector;
      const {language} = this.props;
      main = (
        <>
          <ScrollToTop />
          <div className="author">
            <h2 className="author__header">{name[language]}</h2>
            <img className="author__img" src={photo} alt={name[language]} />
            <p className="author__years">{yearsOfLife}</p>
          </div>
          <Biography header={BIOGRAPHY[language]} biography={biography[language]} />
          <Works header={WORKS[language]} works={workList[language]} />
          <Slider images={images} />
          { video ? <Video video={video} title={name[language]} /> : null }
          <Map coordinates={map} />
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


export default connect(mapStateToProps, null)(Author);

Author.propTypes = {
    selectedDirector: PropTypes.objectOf(PropTypes.any).isRequired,
    language: PropTypes.string.isRequired,
    workList: PropTypes.objectOf(PropTypes.any),
};

