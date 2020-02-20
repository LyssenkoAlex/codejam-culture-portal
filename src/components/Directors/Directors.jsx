import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Directors.scss'

class Directors extends Component {
    render () {
        console.log('ddd')

        const authors = this.props.directors.map(item => (
            <li key={item.id}>
                    <span>
                        {item.name.ru}
                    </span>
            </li>
        ));
        return (
            <nav className='nav'>
            <ul>
                {authors}
            </ul>
            </nav>
        )

    }
}

const mapStateToProps = state => ({
    directors: state.directors,
});
export default connect(mapStateToProps)(Directors);

Directors.propTypes = {
    directors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

