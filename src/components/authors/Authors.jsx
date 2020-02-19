import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './author.scss'

class Authors extends Component {
    render () {
        console.log('ddd')

        const authors = this.props.authors.map(item => (
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
    authors: state.authors,
});
export default connect(mapStateToProps)(Authors);

Authors.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

