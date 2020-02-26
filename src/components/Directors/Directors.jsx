import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './Directors.css';
import {Link} from 'react-router-dom'
import {showDirector} from '../../redux/actions/actions';
import {DETAILS, HOME, DIRECTOR_SEARCH} from '../../utils/utils';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 450,
        width:'auto',

    },
});

export default function Directors() {
    const classes = useStyles();

    let [value, setValue] = useState('');
    const directors = useSelector(state => state.directors);
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();

    const searchDirector = (e) => {
        if (e.currentTarget.value) {
            let newValue = e.currentTarget.value;
            setValue(() => newValue.toLowerCase())
        } else {
            setValue(() => '')
        }
    };

    const setIdDirectors = (id) => {
        dispatch(showDirector(id))
    };

    let arrayAuthorsName = value ? directors.filter(d => (d.name[language].toLowerCase()).includes(value)) : directors;
    let arrayAuthorsPlaceOfBirth = value ? directors.filter(d => (d.placeOfBirth[language].toLowerCase()).includes(value)) : [];
    let authors = arrayAuthorsName.concat(arrayAuthorsPlaceOfBirth)

    let elements = authors.map((item, index) =>

        <Card className={classes.root} key={index}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.photo}
                    title={item.name[language]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name[language]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.yearsOfLife}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => setIdDirectors(item.id)} to={HOME.path} component={Link}>
                    {DETAILS[language]}
                </Button>
            </CardActions>
        </Card>
    );

    return (
        <div className='container_dir'>
            <div>&nbsp;</div>
            <TextField id="filled-search" label={DIRECTOR_SEARCH[language]} type="search" variant="filled" onChange={searchDirector}/>
            <div>&nbsp;</div>
          {elements}
        </div>
    )
}

