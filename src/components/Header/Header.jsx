import React, { Component } from 'react';
import { LANG, NAV_PAGES } from '../../utils/utils';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeLanguage } from '../../redux/actions/actions';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.select = React.createRef();
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChangeLanguage() {
    const lang = this.select.current.value.toUpperCase();
    const {changeLanguage} = this.props;
    changeLanguage( lang === 'EN' ? 'ENG' : lang);
  }

  render() {
    const {language} = this.props;
    const articles = NAV_PAGES.map(article => (
      <li key={article.ID}>
        <Link to={article.path}>{article[language]}</Link>
      </li>
    ));

    let languages = [];
    Object.keys(LANG).forEach((x) => languages.push(x));

    return (
      <header className="header">
        <nav className="header__nav">
          <ul>
            {articles}
          </ul>
        </nav>
        <select className="lang" onChange={this.onChangeLanguage} ref={this.select}>
          {languages.map(langCode=><option key={LANG[langCode].CODE}>{LANG[langCode].CODE}</option>)}
        </select>
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
