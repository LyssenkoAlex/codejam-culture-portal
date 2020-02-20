import React, { Component } from 'react';
import './main.scss'

class Author extends Component {
  state = {
    isLoad: false,
    data: null
  }

  componentDidMount() {
    import('./temporary.json')
    .then(res => {
      this.setState({data: res.default})
    })
  }
  render() {
    const { data } = this.state
    let main;
    if (data) {
      const {name, lifeYears, photo, biography, works, map} = this.state.data;
      main = (
        <>
         <div className="author">
          <h2 className="author__header">{name}</h2>
          <img className="author__img" src={photo} alt={name} width="120"/>
          <p className="author__years">{lifeYears}</p>
         </div>
         <div className="biography">
           <h3 className="biography__header">Biography</h3>
           <p className="biography__text" >{biography}</p>
         </div>
         <ul style={{textAlign: 'left'}}>
          {works.map(work => <li key={work}>{work}</li>)}
         </ul>
         <div>{map}</div>
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