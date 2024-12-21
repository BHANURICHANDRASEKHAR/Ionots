import React, { useState, useContext, useEffect } from "react";
import Input from "../../Login/Input";
import submissionForm, { getEmp_data } from "./formsubmit.js";
import { Context } from "../../Context/UserContext.jsx";
import { DatePicker } from "antd";
import dayjs from "dayjs";
export default function Form() {
  const [empData, setEmpData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getEmp_data(setEmpData, setloading);
  }, []);

  const [data, setdata] = useState({
    assignedTo: "",
    title: "",
    description: "",
    deadline: "",
  });

  const { role } = useContext(Context);
  const onHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  function submit() {
   
    submissionForm(setloading, data, role, setdata);
  }
  return (
    <div className="Auth-form-container mt-5">
      <h1 className="login-name m-4">Project Assign Form</h1>
      <div className="Auth-form-content">
        <Input
          label="title"
          placeholder="Enter Title of the Project..."
          type="text"
          handler={onHandler}
          value={data.title}
          name="title"
        />
        <Input
          label="Description"
          placeholder="Enter Description"
          type="text"
          handler={onHandler}
          value={data.description}
          name="description"
        />
        <MapStateToProps
          label="Select Employee to assign "
          data={empData}
          handler={onHandler}
          value={data.assignedTo}
          name="assignedTo"
        />
        <App fun={setdata} data={data} />
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary w-50 mt-3"
            disabled={loading}
            onClick={submit}
          >
            {loading ? "Loading ..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
const MapStateToProps = React.memo(({ label, handler, value, data, name }) => {
  return (
    <div className="form-group mt-2 w-100">
      <label>{label} </label>
      <select
        value={value}
        onChange={handler}
        name={name}
        className="form-select mt-2 form-select-lg bg-light mb-3"
      >
        <option value="" disabled>
          -- Select --
        </option>
        {data.map((val, index) => (
          <option key={index} value={val._id} className="text-dark">
            {val.username}
          </option>
        ))}
      </select>
    </div>
  );
});

const App = ({ fun, data }) => {
  const handleChange = (date, dateString) => {
    fun({ ...data, deadline: dateString });
  };
  const disabledDate = (current) => {
    
    return current && current < dayjs().startOf("day");
  };
  return (
    <div className="w-100">
      <label>Dead Line of The Project</label>&ensp;&ensp;
      <DatePicker
        onChange={handleChange}
        needConfirm
        className="w-100 p-2 mt-3"
        disabledDate={disabledDate}
      />
    </div>
  );
};
