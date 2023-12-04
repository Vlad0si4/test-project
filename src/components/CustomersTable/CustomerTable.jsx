import { useState } from "react";
import peopleJSON from "../../data/people.json";
import { SearchBar } from "../SearchBar/SearchBar";

export const CustomerTable = () => {
  const [showPeople, setShowPeople] = useState(8);

  return (
    <div>
      <h3>All Customers</h3>
      <p>Active Members</p>
      <SearchBar />
      <table>
        <thead>
          <tr>
            <th>Customer name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {peopleJSON.slice(0, showPeople).map((el) => (
            <tr key={el.phone}>
              <td>{el.name}</td>
              <td>{el.company}</td>
              <td>{el.phone}</td>
              <td>{el.email}</td>
              <td>{el.country}</td>
              <td>{el.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
