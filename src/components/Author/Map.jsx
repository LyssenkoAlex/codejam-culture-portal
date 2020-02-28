import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2h0YXMiLCJhIjoiY2s2djY1NWIzMGc3ODNmbngyZnB3ajZheCJ9.ZA8olSlFkF9l6qLgyb0nvQ';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 6
    };
  }

  componentDidMount() {
    const { coordinates } = this.props;
    const coordinatesArr = coordinates.split(',');
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinatesArr[1], coordinatesArr[0]],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div className="map">
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }

}

Map.propTypes = {
  coordinates: PropTypes.string.isRequired
}

export default Map;