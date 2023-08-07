import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrGenerator } from "../features/SortingSlice";
import QuickSortPivot from "./BodyParts/QuickSortPivot";
// import "./Body.css";
import ArrayVisualizer from "./BodyType/ArrayVisualizer";
import BodyStyle from "./BodyStyle";
function Body() {
  const dispatch = useDispatch();
  const { size, arr, speed, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  useEffect(() => {
    dispatch(arrGenerator());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
      <BodyStyle>
        <div className="body-controller-container">
          {/* {algo === 4 && <QuickSortPivot />} */}
          <QuickSortPivot isQuickSort={algo === 4} />
        </div>
        <div className="bars-container">
          <ArrayVisualizer arr={arr} size={size} speed={speed} />
        </div>
      </BodyStyle>
  );
}
export default Body;
