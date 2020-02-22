import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Directors.scss';
import {showDirector} from '../../redux/actions/actions';


class Directors extends Component {
    render() {
        const directors = this.props.directors.map(item => (
            <img key={item.id} src={item.photo}>
            </img>
        ));

        return (
            <nav className='container_dir'>
                    {directors}
            </nav>
        )
    }
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

