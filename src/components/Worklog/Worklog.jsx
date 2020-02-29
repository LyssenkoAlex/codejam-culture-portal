import React from 'react';
import './Worklog.css';

import
{
    studentsInfo, MIN, EXTRA, NORMAL, FINES
}
    from
        "./studentsInfo";
import {makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Checkbox} from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: '0.6fr',
        border: '2px solid #ffa600',
        opacity: '0.97',
        background: 'rgba(39, 26, 9, 0.75)',

    },
    checkBox: {
        color: green[600]
    }
});


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const taskData = [{data: MIN, title: 'Min scope'}, {data: NORMAL, title: 'Normal scope'}, {data: EXTRA, title: 'Extra scope'}, {data: FINES, title: 'Fines'}];

function Students() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Имя студента</TableCell>
                        <TableCell align="left">Задание</TableCell>
                        <TableCell align="left">Время</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {studentsInfo.map((row, id) => (
                        <TableRow key={`student_${id}`}>
                            <TableCell align="left">{row.student}</TableCell>
                            <TableCell align="left">{row.task}</TableCell>
                            <TableCell align="left">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Requirements() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            {taskData.map((block, blockId) => {
                return (
                    <div key={`block_${blockId}`}>
                        <Typography className={classes.title} variant="h6" id="tableTitle">
                            {block.title}
                        </Typography>
                        <Table className={classes.table} aria-label="simple table" key={`table_${blockId}`}>

                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">checked</TableCell>
                                    <TableCell align="left">id</TableCell>
                                    <TableCell align="left">score</TableCell>
                                    <TableCell align="left">description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {block.data.map((row, id) => {
                                    return (
                                        <TableRow key={`row_${id}`}>
                                            <TableCell padding='checkbox'>
                                                <GreenCheckbox checked={row.checked === '1'}/>
                                            </TableCell>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.score}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow>
                                    <TableCell rowSpan={3}/>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Total Score</TableCell>
                                    <TableCell
                                        align="right">{`Score is ${block.data.reduce((k, m) => k + m.achieved, 0)} out of 
                                        ${block.data.reduce((k, m) => k + m.score, 0)}
                                    `}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>)
            })}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Score</TableCell>
                            <TableCell align="left">Achieved</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskData.map((block, id) => (
                            <TableRow key={`student_${id}`}>
                                <TableCell align="left">{block.title}</TableCell>
                                <TableCell align="left">{block.data.reduce((k, m) => k + m.score, 0)}</TableCell>
                                <TableCell align="left">{block.data.reduce((k, m) => k + m.achieved, 0)}}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </TableContainer>
    );
}

function Worklog() {
    return (
        <React.Fragment>
            <Students/>
            <Requirements/>
        </React.Fragment>
    );
}

export default Worklog;

