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
    this.headerElement = React.createRef();
    this.nav = React.createRef();
    this.selectElement = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onClick({ target }) {
    const nav = this.nav.current;
    if (nav.classList.contains('d-flex')) {
      if (target.tagName === 'A') nav.classList.remove('d-flex');
    }
  }

  onMouseLeave() {
    const nav = this.nav.current;
    if (!nav.classList.contains('d-flex')) return;
    nav.classList.remove('d-flex');
  }

  onChangeLanguage() {
    const lang = this.selectElement.current.value.toUpperCase();
    const { changeLanguage } = this.props;
    changeLanguage(lang === 'EN' ? 'ENG' : lang);
  }

  render() {
    const { language } = this.props;
    const articles = NAV_PAGES.map(article => (
      <li key={article.ID}>
        <Link to={article.path}>{article[language]}</Link>
      </li>
    ));

    let languages = [];
    Object.keys(LANG).forEach((x) => languages.push(x));

    return (
      <header className="header" ref={this.headerElement}>
        <button className="header__btn" onClick={() => this.nav.current.classList.add('d-flex')}>B</button>
        <ul className="header__nav" onMouseLeave={this.onMouseLeave} onClick={this.onClick} ref={this.nav}>
          {articles}
        </ul>
        <select className="header__lang" onChange={this.onChangeLanguage} ref={this.selectElement}>
          {languages.map(langCode => <option key={LANG[langCode].CODE}>{LANG[langCode].CODE}</option>)}
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
