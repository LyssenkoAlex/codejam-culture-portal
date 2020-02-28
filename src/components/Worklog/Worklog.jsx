import React from 'react';
import './Worklog.css';
import {studentsInfo} from "./studentsInfo";
import {MIN} from "./studentsInfo";
import {NORMAL} from "./studentsInfo";
import {EXTRA} from "./studentsInfo";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
        minWidth: '0.8fr',
    },
});



function createDataStudent( student, task, time) {
    return {  student, task, time };
}

const rows = studentsInfo.map(el => (
    createDataStudent(el.student, el.task, el.time )
));



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
                    {rows.map((row, i) => (
                        <TableRow key={i}>
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

  function groups(i) {
    return i.map(el => (
      <tr key={el.id}>
        <td>
          {(el.checked === '1') ?
            <input type="checkbox" checked readOnly disabled/> :
            <input type="checkbox" readOnly disabled/>}
        </td>
        <td>{el.score}</td>
        <td>{el.description}</td>
      </tr>
    ));
  }

  const MIN_LIST = groups(MIN);
  const NORMAL_LIST = groups(NORMAL);
  const EXTRA_LIST = groups(EXTRA);

  return (
  <React.Fragment>
      <table className="requirements-table">
          <tbody>
        <tr className="head">
          <td colSpan="3">Min scope (50)</td>
        </tr>
        {MIN_LIST}

        <tr className="head">
          <td colSpan="3">Normal scope (140)</td>
        </tr>
        {NORMAL_LIST}

        <tr className="head">
          <td colSpan="3">Extra scope (70)</td>
        </tr>
        {EXTRA_LIST}
        <tr className="head">
          <td colSpan="3">Total: 240 points</td>
        </tr>
          </tbody>
      </table>
  </React.Fragment>
  );
}



function Worklog() {
  return (
  <React.Fragment>
   <Students />
   <Requirements />
  </React.Fragment>
  );
}



export default Worklog;
