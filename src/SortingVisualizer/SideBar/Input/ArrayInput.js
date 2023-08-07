import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./ArrayInput.css";
import { useDispatch, useSelector } from "react-redux";
import { setArr } from "../../features/SortingSlice";
import themes from "../../../themes";
const ArrayInput = ({ theme }) => {
  const dispatch = useDispatch();
  let { arr, isDisabled } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const [inputArr, setinputArr] = useState("");
  useEffect(() => {
    let tempIntputArr = "";
    arr.forEach((element) => {
      tempIntputArr += `${element.value},`;
    });
    setinputArr(tempIntputArr);
  }, [arr]);
  const inputChangeHandler = (e) => {
    setinputArr(e.target.value);
  };
  const inputChangeBtnHandler = () => {
    let tempArr = inputArr.slice(0, inputArr.length).split(",");
    tempArr = tempArr.filter((element) => {
      console.log(
        element,
        Number.isInteger(parseInt(element)),
        parseInt(element)
      );
      return Number.isInteger(parseInt(element));
    });
    tempArr.map((element, index) => {
      return (tempArr[index] = parseInt(element));
    });
    console.log(tempArr);
    dispatch(setArr(tempArr));
  };
  return (
    <div className="array-input-container">
      <span className="array-input-label" htmlFor="array-input" style={{ color: theme === themes.dark ? "black" : "white" }}>
        Custom Array
      </span>
      <textarea
        rows="2"
        value={inputArr}
        placeholder="Custom Array"
        id="array-input"
        className="array-input"
        onChange={inputChangeHandler}
        style={{ backgroundColor: theme === themes.dark ? themes.light.navbar.background : themes.dark.navbar.background, color : "white" }}
      />
      <Button
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white", backgroundColor: theme === themes.dark ? themes.light.navbar.background : themes.dark.navbar.background }}
        onClick={inputChangeBtnHandler}
        className="input-array-btn"
        variant="contained"
      >
        Generate
      </Button>
    </div>
  );
};

export default ArrayInput;
