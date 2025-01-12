import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = ({ queryKey }) => {
    const  id  = queryKey[1];
  return axios.get(`http://localhost:5000/users/${id}`);
};
const fetchDataById = (id) => {
  return useQuery(['user', id],  fetchUsers);
};

export default fetchDataById;
