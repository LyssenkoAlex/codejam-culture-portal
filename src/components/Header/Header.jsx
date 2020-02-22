import React, {Component} from 'react';
import {NAV_PAGES, THEATER_TITLE} from '../../utils/utils';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.scss';

class  Header extends Component {
    render()
    {
        const articles = NAV_PAGES.map(article => (
            <li key={article.ID}>
                <Link to={article.path}>{article[this.props.language]}</Link>
            </li>
        ));

        return (
            <header className="header">
                <div className="header__top">
                    <h1>{THEATER_TITLE[this.props.language]}</h1>
                    <button className="lang">Ru</button>
                </div>
                <nav className="header__nav">
                    <ul>
                        {articles}
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    language: state.language
});


export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
    language: PropTypes.string.isRequired,
};
