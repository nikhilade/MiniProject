import React from "react";
import { NavLink } from "react-router-dom";

const ViewAllQuestion = (props) => {
  return (
    <>
      <div className="container mt-3 p-5 bg-primary">
        {
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Answer</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {props.questionList.map((e, index) => (
                <tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.question}</td>
                  <td>{e.op1}</td>
                  <td>{e.op2}</td>
                  <td>{e.op3}</td>
                  <td>{e.op4}</td>
                  <td>{e.ans}</td>
                  <td>
                    <NavLink>Delete</NavLink>
                  </td>
                  <td>
                    <NavLink>Update</NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
};

export default ViewAllQuestion;
