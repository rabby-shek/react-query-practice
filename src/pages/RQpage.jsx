import { useQuery } from "react-query";
import axios from "axios";
const RQpage = () => {
  const fetchUsers = () => {
    console.log("fetching");
    return axios.get("http://localhost:5000/users");
  };
  const { isLoading, data, isError, error } = useQuery("users", fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(isError && error.message);
  return (
    <div>
      <h1>Users</h1>
      {data?.data.map((users) => {
        return (
          <div key={users.id}>
            <h4>{users.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RQpage;
