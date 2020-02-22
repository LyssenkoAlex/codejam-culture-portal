import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Director extends Component {
    render() {
        const director  = this.props.selectedDirector[0];
        console.log('director', director);
        return (
                <span>
                    {director.name[this.props.language]}
                </span>
        )

    }
}

const mapStateToProps = state => ({
    directors: state.directors,
    language: state.language,
    selectedDirector:state.selectedDirector
});
export default connect(mapStateToProps)(Director);

Director.propTypes = {
    directors: PropTypes.arrayOf(PropTypes.any).isRequired,
    language: PropTypes.string.isRequired,
    selectedDirector: PropTypes.arrayOf(PropTypes.any).isRequired,

};

