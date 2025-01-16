import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchUsers = async () => {
  const response = await axios.get("");
  return response.data;
};
const RQpage = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  console.log(data.data);
  return (
    <div>
    
    </div>
  );
};

export default RQpage;
