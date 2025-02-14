import React, { useState } from "react";

const AddNewQuestion = () => {
  let [ques, setQues] = useState({
    id: 0,
    question: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    ans: 0,
  });

  let [list, setList] = useState([]);

  let saveQuestion = () => {
    setQues((prevState) => {
      return {
        ...prevState,
        id: ques.id + 1,
      };
    });

    setList([...list, ques]);
    alert(list.length);
  };

  let uniHandler = (e) => {
    setQues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="container p-5 bg-primary">
        <div className="mb-3">
          <input
            type="text"
            name="question"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="What is java?"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="op1"
            value={ques.op1}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Option 1"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="op2"
            value={ques.op2}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Option 2"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="op3"
            value={ques.op3}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Option 3"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="op4"
            value={ques.op4}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Option 4"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="ans"
            value={ques.ans}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Answer"
            onChange={(e) => uniHandler(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="button"
            className="form-control btn btn-success"
            id="exampleFormControlInput1"
            value="Add New Question"
            onClick={saveQuestion}
          />
        </div>
      </div>
    </>
  );
};

export default AddNewQuestion;
