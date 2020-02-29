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
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Checkbox} from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: '0.6fr',
        border: '2px solid #ffa600',

    },
    row:{
        backgroundColor: 'transparent',
        color:'white',

    },
    cell:{
        color: 'white',
        'font-size': 'inherit',
        border: '2px solid #ffa600',
    },

    checkBox: {
        color: green[600]
    },
    header: {
        backgroundColor: '#ffa600',
        border: '2px solid #ffa600',
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
        <div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" className={classes.header}>Имя студента</TableCell>
                        <TableCell align="left" className={classes.header}>Задание</TableCell>
                        <TableCell align="left" className={classes.header}>Время</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {studentsInfo.map((row, id) => (
                        <TableRow key={`student_${id}`} className={classes.row}>
                            <TableCell align="left" className={classes.cell}>{row.student}</TableCell>
                            <TableCell align="left" className={classes.cell}>{row.task}</TableCell>
                            <TableCell align="left" className={classes.cell}>{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

function Requirements() {
    const classes = useStyles();
    return (
        <div>
            {taskData.map((block, blockId) => {
                return (
                    <div key={`block_${blockId}`}>
                        <Typography className={classes.title} variant="h6" id="tableTitle">
                            {block.title}
                        </Typography>
                        <Table className={classes.table} aria-label="simple table" key={`table_${blockId}`}>

                            <TableHead>
                                <TableRow className={classes.row}>
                                    <TableCell align="left" className={classes.header}>Checked</TableCell>
                                    <TableCell align="left" className={classes.header}>Id</TableCell>
                                    <TableCell align="left" className={classes.header}>Score</TableCell>
                                    <TableCell align="left" className={classes.header}>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {block.data.map((row, id) => {
                                    return (
                                        <TableRow key={`row_${id}`} className={classes.row}>
                                            <TableCell padding='checkbox' className={classes.cell}>
                                                <GreenCheckbox checked={row.checked === '1'}/>
                                            </TableCell>
                                            <TableCell align="left" className={classes.cell}>{row.id}</TableCell>
                                            <TableCell align="left" className={classes.cell}>{row.score}</TableCell>
                                            <TableCell align="left" className={classes.cell}>{row.description}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow className={classes.row}>
                                    <TableCell rowSpan={3} className={classes.cell}/>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <TableCell colSpan={2} className={classes.cell}>Total Score</TableCell>
                                    <TableCell className={classes.cell}
                                        align="right">{`Score is ${block.data.reduce((k, m) => k + m.achieved, 0)} out of 
                                        ${block.data.reduce((k, m) => k + m.score, 0)}
                                    `}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>)
            })}
            <div>
                <Typography className={classes.title} variant="h6" id="tableTitle">
                    Totals
                </Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" className={classes.header}>Category</TableCell>
                            <TableCell align="left" className={classes.header}>Score</TableCell>
                            <TableCell align="left" className={classes.header}>Achieved</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskData.map((block, id) => (
                            <TableRow key={`student_${id}`} className={classes.row}>
                                <TableCell align="left" className={classes.cell}>{block.title}</TableCell>
                                <TableCell align="left" className={classes.cell}>{block.data.reduce((k, m) => k + m.score, 0)}</TableCell>
                                <TableCell align="left" className={classes.cell}>{block.data.reduce((k, m) => k + m.achieved, 0)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
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

