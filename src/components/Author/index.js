import React, { Component } from 'react';

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
         <h1>{name}</h1>
         <img src={photo} alt={name} width="100"/>
         <p>{lifeYears}</p>
         <div>
           <h2>Biography</h2>
           <p style={{textAlign: 'left'}}>{biography}</p>
         </div>
         <ul style={{textAlign: 'left'}}>
          {works.map(work => <li key={work}>{work}</li>)}
         </ul>
         <div>{map}</div>
        </>
      )
    } else {
      main = <h1>Loading . . .</h1>
    }
    
    return(
      <main style={{background: 'white', color: 'gray', textAlign: 'center'}}>
        {main}
      </main>
    )
  }
}

export default Author;