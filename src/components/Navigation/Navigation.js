import React, {Component} from 'react';
import {NAV_PAGES, LANG} from '../../utils/utils';
import {Link} from 'react-router-dom'
import {changeLanguage} from '../../redux/actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navigation extends Component {


    render() {
        const articles = NAV_PAGES.map(article => (
            <li key={article.ID}>
                <Link to={article.path}>{article['ru']}</Link>
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
            <div>
                <ul>
                    {languages}
                </ul>
                <ul>
                    {articles}
                </ul>
            </div>

        )
    }
}


const mapDispatchToProps = {
    changeLanguage
};

export default connect(null, mapDispatchToProps)(Navigation);

Navigation.propTypes = {
    changeLanguage: PropTypes.func.isRequired
};
