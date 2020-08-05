// Import React hook and css file
import React, { useState } from "react";
import "./employeeTable.css";

// Compontent
function EmployeeTable(props) {
  // React hook - first value is variable, second value is a function sets the variable. useState takes a starting value
  const [input, setInput] = useState("");
  const [willSortByAge, setWillSortByAge] = useState(false);
  const storeInput = (e) => {
    // Passes in onKeyUp when function is called
    setInput(e.target.value);
  };

  // Passes in onChange when function is called and creates a check
  const radioAge = (e) => {
    setWillSortByAge(e.target.checked);
    console.log(e.target.checked);
  };

  // If both conditions exist, result comes back true, then copy will be placed into the array or an empty array
  let employees =
    props.employees && props.employees.results
      ? [...props.employees.results]
      : [];

  console.log(employees, props.employees.results);
  // When willSortByAge is true, compares age a to age b and storts by ascending order
  if (willSortByAge) {
    employees.sort(function (a, b) {
      return a.dob.age - b.dob.age;
    });
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4 header">
        <strong>Employee Directory <i class="fas fa-pencil-alt"></i></strong>
      </h1>
      <p className="lead">
       Employee Searching Made Easy!
      </p>
      <hr className="my-4" />
      <div>
      <div className="row">
        <input className="nameInput" placeholder="Search by Name" onKeyUp={storeInput}></input>
      </div>
      <div className="row age">
        <input className="radioAge"
          onChange={radioAge}
          type="checkbox"
          name="options"
          id="option1"
        />{" "}
        Age
      </div>
      </div>
      <div className="row">
        {console.log(props.employees)}
        {employees
          .filter((item) => {
            let fullName = item.name.first + " " + item.name.last;
            return fullName.toLowerCase().includes(input.toLowerCase());
          })
          // Map modifieds items
          .map((item) => {
            return (
              <div className="card employeeCard">
                <div className="card-body">
                  <img
                    src={item.picture.large}
                    class="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    {item.name.first} {item.name.last}
                  </h5>
                  <p className="card-text">Phone: {item.cell}</p>
                  <p className="card-text">Age: {item.dob.age}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// props.employees.results.map to loop through results and create HTML

export default EmployeeTable;
