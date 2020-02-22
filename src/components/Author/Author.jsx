import React, { Component } from 'react';
import Biography from './Biography';
import Works from './Works';
import Slider from './Slider';
import Map from './Map';
import Video from './Video';
import './main.scss'

class Author extends Component {
  state = {
    isLoad: false,
    data: null
  }

  componentDidMount() {
    import('../../data/data.json')
      .then(res => {
        this.setState({ data: res.default })
      })
  }
  render() {
    const { data } = this.state
    let main;
    if (data) {
      const lang = 'ru';
      const { data: { directors } } = this.state;
      const { name, yearsOfLife, photo, biography, workList, images, video, map } = directors[0];
      main = (
        <>
          <div className="author">
            <h2 className="author__header">{name[lang]}</h2>
            <img className="author__img" src={photo} alt={name[lang]} />
            <p className="author__years">{yearsOfLife}</p>
          </div>
          <Biography biography={biography[lang]} />
          <Works header={'Works'} works={workList[lang]} />
          <Slider images={images} />
          <Video video={video} title={name} />
          <Map coordinates={map} />
        </>
      )
    } else {
      main = <h2>Loading . . .</h2>
    }

    return (
      <section className="main">
        {main}
      </section>
    )
  }
}

export default Author;