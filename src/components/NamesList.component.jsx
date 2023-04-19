import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameCard from "./NameCard.component";
import { GetNamesAction } from "../redux/actions";

const NamesList = () => {
  const { namesList } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // Only call the api when there are no names
    if (namesList?.names.length <= 0) {
      dispatch(GetNamesAction());
    }
  }, [dispatch]);

  const ui = namesList.loading ? (
    <h3>Loading...</h3>
  ) : (
    namesList?.names.map((name) => <NameCard key={name.id} name={name.Name} />)
  );

  return <>{ui}</>;
};

export default NamesList;
