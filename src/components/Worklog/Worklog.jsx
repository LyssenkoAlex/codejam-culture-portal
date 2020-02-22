import React from 'react';
import './Worklog.css';
import {studentsInfo} from "./studentsInfo";
import {MIN} from "./studentsInfo";
import {NORMAL} from "./studentsInfo";
import {EXTRA} from "./studentsInfo";



function Students() {
  const studentsList = studentsInfo.map(el => (
    <tr key={el.id}>
      <td>{el.student}</td>
      <td>{el.task}</td>
      <td>{el.time}</td>
    </tr>
  ));

  return (
  <React.Fragment>
  <h1>Students</h1>
    <table>
      <tr className="head">
        <td>Student</td>
        <td>Task</td>
        <td>Total time</td>
      </tr>
      {studentsList}
    </table>
  </React.Fragment>
  );
}



function Requirements() {

  function groups(i) {
    return i.map(el => (
      <tr key={el.id}>
        <td>
          {(el.checked === '1') ?
            <input type="checkbox" checked readOnly disabled></input> :
            <input type="checkbox" readOnly disabled></input>}
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
