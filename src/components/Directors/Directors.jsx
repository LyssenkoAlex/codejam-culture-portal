import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Directors.scss';
import {showDirector} from '../../redux/actions/actions';


class Directors extends Component {
    render() {
        const directors = this.props.directors.map(item => (
            <li key={item.id}>
                    <span onClick={() => this.props.showDirector(item.id)}>
                        <Link to={`/directorList/${item.id}`}> {item.name[this.props.language]}</Link>
                    </span>
            </li>

        ));
        return (
            <nav className='nav'>
                <ul>
                    {directors}
                </ul>
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

