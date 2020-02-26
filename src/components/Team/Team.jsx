import React from "react";
import { teamInfo } from "./teamInfo";
import './team.scss';
import gitImg from '../../images/icons/github.svg';
import linkedInImg from '../../images/icons/linkedin.svg';
import { useSelector } from "react-redux";
import { TEAM } from '../../utils/utils';
export default function Team() {
  const lang = useSelector(state => state.language);
  const teamList = teamInfo.map(el => (
    <div className="card-wrapper" key={el.id}>
      <div className="team-card">
        <img className="team-card__img" src={el.photo} alt={el.name[lang]} />
        <div className="team-card__name">{el.name[lang]}</div>
        <div className="team-card__role">{el.role[lang]}</div>
        <div className="team-card__social">
          <a href={el.git} target="_blank" rel='noreferrer noopener'>
            <img src={gitImg} alt="github" />
          </a>
          {el.linkedIn ? <a href={el.linkedIn} target="_blank" rel='noreferrer noopener'><img src={linkedInImg} alt="linkedIn" /></a> : null}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="team">
      <h2 className="team__header">{TEAM[lang]}</h2>
      <div className="team__list">{teamList}</div>
    </section>
  );

}
