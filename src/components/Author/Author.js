import React, { Component } from 'react';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import Slider from './Slider';
import Map from './Map';
import './main.scss'

class Author extends Component {
  state = {
    isLoad: false,
    data: null
  }

  componentDidMount() {
    import('../../data/data.json')
    .then(res => {
      this.setState({data: res.default})
    })
  }
  render() {
    const { data } = this.state
    let main;
    if (data) {
      const lang = 'ru';
      const { data:{ directors } } = this.state;
      const {name, yearsOfLife, photo, biography, workList, images, video, map} = directors[0];
      main = (
        <>
         <div className="author">
          <h2 className="author__header">{name[lang]}</h2>
          <img className="author__img" src={photo} alt={name[lang]} />
          <p className="author__years">{yearsOfLife}</p>
         </div>
         <div className="biography">
          <h3 className="biography__header">Biography</h3>
          <Timeline lineColor={'#cdf'}>
            {biography[lang].map( el => (
              <TimelineItem 
                key={el}
                dateText={el.date}
                style={{ color: '#ddd' }}
                dateInnerStyle={{ background: '#900', color: '#fff' }}
                bodyContainerStyle={{
                  background: '#ddd',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                { el.event }
              </TimelineItem>
            ))}
          </Timeline>
         </div>
         <div className="works">
            <h3 className="works__header">Work List</h3>
            <ul className="works__work-list">
            {workList[lang].map((work, index )=> (
              <li className="works__item" key={index}>
                <span className="works__item-date">{work.date}</span>
                <span className="works__item-event">{work.event}</span>
              </li>
            ))}
            </ul>
         </div>
         <div className="gallery">
            <Slider images={images}/>
         </div>
         <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src={video} 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullscreen
              title={name}
            ></iframe>
         </div>
         <Map coordinates={map}/>
        </>
      )
    } else {
      main = <h2>Loading . . .</h2>
    }
    
    return(
      <main className="main">
        {main}
      </main>
    )
  }
}

export default Author;