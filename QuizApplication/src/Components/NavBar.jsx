import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddNewQuestion from "./AddNewQuestion";
import ViewAllQuestion from "./ViewAllQuestion";
import StartExam from "./StartExam";
import ScheduleExam from "./ScheduleExam";
import Result from "./Result";

let NavBar = () => {
  let [list, setList] = useState([]);
  let handleCallback = (childData) => {
    setList(childData);
  };
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              Demo Quiz Application
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/add-new-question"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Add New Question
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/view-all-question"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    View All Question
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/schedule-exam"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Schedule Exam
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/start-exam"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Start Exam
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/result"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Result
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            path="add-new-question"
            element={<AddNewQuestion parentCallback={handleCallback} />}
          />
          <Route
            path="view-all-question"
            element={<ViewAllQuestion questionList={list} />}
          />
          <Route path="schedule-exam" element={<ScheduleExam />} />
          <Route path="start-exam" element={<StartExam />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavBar;
