import React, { useState, useEffect, useRef } from "react";
import "./Table.css";

const UserTable = () => {

  return (
    <div className={`table-container`}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Telephone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Christian</td>
            <td>Doe</td>
            <td>john.doe@example.com</td>
            <td>123-456-7890</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>098-765-4321</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>098-765-4321</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>098-765-4321</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>098-765-4321</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
