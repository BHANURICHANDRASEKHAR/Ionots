import axios from "axios";
import { errorfunction, successfunction } from "../../../toast";

export default async function getManagerLogs(setLoading, setData, role) {
    console.log(role._id)
  if (role.role === 'manager') {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/getPerticularmnglogs", {
        params: { _id: role._id }
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
      errorfunction('An error occurred while fetching employee logs');
    } finally {
      setLoading(false);
    }
  } else {
    errorfunction('You are not a manager');
  }
}
