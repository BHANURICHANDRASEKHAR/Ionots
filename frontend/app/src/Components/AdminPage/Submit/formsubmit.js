import axios from "axios";
import { errorfunction, successfunction } from "../../../toast";
import { api } from "../../../App";
export default async function submissionForm(setLoading, data, role, setData) {
  const flag = check(data);
 
  if (flag) {
    const de = {
      assignedTo: "",
      title: "",
      description: "",
      deadline: "",
    };
    data.assignedBy = role._id;
    data.Adminusername = role.username;
    setLoading(true);

    try {
      const response = await axios.post(`${api}/submitform`, data);
      if (response.data.status) {
        successfunction(response.data.msg);
        setData(de);
      } else {
        errorfunction(response.data.msg);
      }
    } catch (error) {
      errorfunction("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  }
}
function check(data) {
  if (
    data.deadline.trim().length == 0 ||
    data.assignedTo.trim().length == 0 ||
    data.description.trim().length == 0 ||
    data.title.trim().length == 0
  ) {
    errorfunction("All Fields are required");
    return false;
  }
  return true;
}
export async function getEmp_data(SetData, setLoading) {
  setLoading(true);
  try {
    const response = await axios.get(`${api}/getEmployees`);
    if (response.data.status == true) {
      SetData(response.data.data);
     
    }
  } catch (error) {
    console.log(error.message);
    errorfunction("An error occurred while fetching employee data");
  } finally {
    setLoading(false);
  }
}
