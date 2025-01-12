import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("http://localhost:5000/users");
};
const useUsersData = () => {
  return  useQuery("users", fetchUsers);
};

export default useUsersData;
