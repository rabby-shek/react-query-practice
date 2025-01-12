import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("http://localhost:5000/users");
};
const RQpage = () => {
  const onSuccess = () => {
    console.log("data fetched successfully.");
  };
  const { data, isLoading, isFetching } = useQuery("usersData", fetchUsers, {
    onSuccess: onSuccess,
    select: (data) => {
      return data.data.filter((user) => user.city === "dhaka");
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(isFetching);
  return (
    <div>
      {data?.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RQpage;
