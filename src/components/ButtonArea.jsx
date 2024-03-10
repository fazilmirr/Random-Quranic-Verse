import { useDispatch, useSelector } from "react-redux";
import { AyahSliceActions } from "../store/AyahSlice";
import FetchData from "../store/FetchData";
import { useEffect, useState } from "react";
const ButtonArea = () => {
  const dispatch = useDispatch();
  function HandleOnClick() {
    dispatch(FetchData());
  }
  const { fetching } = useSelector((store) => store.AyahData);
  return (
    <div className="bg-danger Height d-flex justify-content-center align-items-center">
      <button className="btn btn-light btn-lg fs-3" onClick={HandleOnClick}>
        Random verse
      </button>
    </div>
  );
};
export default ButtonArea;
