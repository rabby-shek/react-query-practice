import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useUsersData from "../hooks/useUsersData";
import { NavLink } from "react-router-dom";

const RQpage = () => {
  const { data, isLoading, isFetching } = useUsersData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(isFetching);
  return (
    <div>

      {data?.data.map((user) => {
        return (
          <div key={user.id}>
            <NavLink to={`/details/${user.id}`}>{user.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default RQpage;
