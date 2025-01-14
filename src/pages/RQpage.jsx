import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQpage = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await axios.get("http://localhost:8000/users");
    },
  });

  console.log(data);

  return <div>aas</div>;
};

export default RQpage;
