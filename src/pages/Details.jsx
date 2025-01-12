import React from "react";
import fetchDataById from "../hooks/fetchDataById";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = fetchDataById(id);
  return <div>{data?.data.name}</div>;
};

export default Details;
