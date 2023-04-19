import React, { useEffect, useState } from "react";
import NameCard from "./NameCard.component";
import { axiosInstance } from "../utils/http";

const NamesList = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("names")
      .then((res) => setNames(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      {names.map((name) => (
        <NameCard key={name.id} name={name.Name} />
      ))}
    </>
  );
};

export default NamesList;
