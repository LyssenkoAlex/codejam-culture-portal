import React from 'react';
import { HOME, DIRECTORS, TEAM, WORK_LOG, STYLE, LANG } from '../../utils/utils';
import { changeLanguage } from '../../redux/actions/actions';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleIcon from '@material-ui/icons/People';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = ({ target }, id) => {
        setAnchorEl(null);
        if (target.tagName === 'LI') dispatch(changeLanguage(id));
    };

    const language = useSelector(state => state.language);
    const dispatch = useDispatch();



    return (
        <div className='header_content'>
            <BottomNavigation showLabels className='header_props' >
                <BottomNavigationAction label={HOME[language]} icon={<HomeIcon />} component={Link} to={HOME.path} />
                <BottomNavigationAction label={DIRECTORS[language]} icon={<SupervisorAccountIcon />} component={Link} to={DIRECTORS.path} />
                <BottomNavigationAction label={TEAM[language]} icon={<PeopleIcon />} component={Link} to={TEAM.path} />
                <BottomNavigationAction label={WORK_LOG[language]} icon={<FitnessCenterIcon />} component={Link} to={WORK_LOG.path} />
                <BottomNavigationAction label={STYLE[language]} icon={<FitnessCenterIcon />} component={Link} to={STYLE.path} />
            </BottomNavigation>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {language.toUpperCase()}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={(e) => handleClose(e, 'RU')}>{LANG.RU.TITLE}</MenuItem>
                <MenuItem onClick={(e) => handleClose(e, 'BY')}>{LANG.BY.TITLE}</MenuItem>
                <MenuItem onClick={(e) => handleClose(e, 'ENG')}>{LANG.ENG.TITLE}</MenuItem>
            </Menu>
        </div>
    );
}
