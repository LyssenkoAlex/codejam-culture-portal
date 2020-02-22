import React from 'react';
import './Worklog.css';



function Students() {
  return (
  <React.Fragment>
  <h1>Students</h1>
      <table>
        <tr class="head">
          <td>Student</td>
          <td>Task</td>
          <td>Total time</td>
        </tr>
        <tr>
          <td>Alexandr Lyssenko</td>
          <td>Test</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Himzheuski Vitali</td>
          <td>
            <ul>
              <li>testtesttesttesttesttesttesttesttesttesttesttest</li>
              <li>testtesttesttesttesttesttesttesttesttesttesttest</li>
              <li>testtesttesttesttesttesttesttesttesttesttesttest</li>
            </ul>
          </td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Alexey Kostsevich</td>
          <td>Test</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Aleksandr Serikov</td>
          <td>Test</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Stanislav Iosifov</td>
          <td>Test</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Siarhei Karukhin</td>
          <td>Test</td>
          <td>24 hours</td>
        </tr>
      </table>
  </React.Fragment>
  );
}



function Requirements() {
  return (
  <React.Fragment>
      <table class="requirements-table">

        <tr class="head">
          <td colspan="3">Min scope (50)</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>10</td>
          <td>Main page + page with a list of authors + author's page (only pages with content without widgets)</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Page with team members + page with worklog</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Page with list of authors contains search widget</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>20</td>
          <td>Portal has two languages</td>
        </tr>


        <tr class="head">
          <td colspan="3">Normal scope (140)</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>20</td>
          <td>Portal has page with styleguide</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Mobile version is okey</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Ipad/tablet version is okey</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Author's page contains timeline</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>10</td>
          <td>Author's page contains video overlay</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>20</td>
          <td>Author's page contains photo gallery</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Author's page contains map (geowidget)</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>20</td>
          <td>Design (typography, icons, colors, links + buttons + input are styled)</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>20</td>
          <td>Material-ui / bootstrap is used</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Portal has third language</td>
        </tr>


        <tr class="head">
          <td colspan="3">Extra scope (70)</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>10</td>
          <td>Confidence of the project presentation</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Project is made using gatsbyjs</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>10</td>
          <td>Contentful / netlify cms is used for content management</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>20</td>
          <td>Animations / special effects like paralax</td>
        </tr>
        <tr>
          <td><input type="checkbox" readonly disabled></input></td>
          <td>20</td>
          <td>Outstanding design</td>
        </tr>
        <tr>
          <td><input type="checkbox" checked readonly disabled></input></td>
          <td>20</td>
          <td>Storybook/styleguidist/other react styleguide tool usage for the page with styles</td>
        </tr>
        <tr class="head">
          <td colspan="3">Total: 240</td>
        </tr>
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
