import React, {Component} from 'react';
import {LANG, NAV_PAGES, THEATER_TITLE} from '../../utils/utils';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {changeLanguage} from '../../redux/actions/actions';


import './Header.scss';

class  Header extends Component {
    render()
    {
        const articles = NAV_PAGES.map(article => (
            <li key={article.ID}>
                <Link to={article.path}>{article[this.props.language]}</Link>
            </li>
        ));

        let languages = [];
        Object.keys(LANG).forEach((x) => languages.push(x));
        languages = languages.map(langCode => (
            <li key={LANG[langCode].CODE} onClick={() => this.props.changeLanguage(langCode)}>
                <span>{LANG[langCode].TITLE}</span>
            </li>
        ));


        return (
            <header className="header">
                <div className="header__top">
                    <h1>{THEATER_TITLE[this.props.language]}</h1>
                    <ul>
                        {languages}
                    </ul>
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

const mapDispatchToProps = {
    changeLanguage
};

const mapStateToProps = state => ({
    language: state.language
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
    language: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired
};
