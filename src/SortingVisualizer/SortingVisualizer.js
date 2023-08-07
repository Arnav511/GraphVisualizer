import React, { useState } from 'react'
import Body from "./Body/Body";
import "./SortingVisualizer.css";
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import Sidebar from './SideBar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDisabled, arrGenerator, setArr, setAlgo } from './features/SortingSlice';
import Insertion_sort from './Algorithms/insertion_sort';
import Bubble_sort from './Algorithms/Bubble_sort';
import Selection_sort from './Algorithms/selection';
import Merge_sort from './Algorithms/merge_sort';
import Quick_sort from './Algorithms/quick_sort';
import VisualizeButton from '../components/VisualizeButton/VisualizeButton';

const options = [
  "Insertion Sort",
  "Bubble Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
];

function SortingVisualizer({ globalTheme, setGlobalTheme }) {

  const [algorithmOptions, setAlgorithmOptions] = useState(options[4]);
  const [isVisualizing, setIsVisualizing] = useState(false);

  const dispatch = useDispatch();
  const { arr, speed, isDisabled, pivot, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const setDisabled = (val) => {
    dispatch(setIsDisabled(val));
  };
  const handleClick = async () => {
    setIsVisualizing(true);
    setDisabled(true);
    algo === 0 && (await Insertion_sort([...arr], speed, setDisabled));
    algo === 1 && (await Bubble_sort([...arr], speed, setDisabled));
    algo === 2 && (await Selection_sort([...arr], speed, setDisabled));
    algo === 3 && (await Merge_sort([...arr], speed, setDisabled));
    algo === 4 && (await Quick_sort([...arr], speed, setDisabled, pivot));
    let arrCopy = [...arr];
    let tempArr = [];
    arrCopy.forEach((element) => {
      tempArr.push(element.value);
    });
    tempArr.sort();
    console.log(tempArr);
    dispatch(setArr(tempArr));
    setIsVisualizing(false);
  };

  const handleMenuItemClick = (event, index) => {
    dispatch(setAlgo(index));
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <div className="main-container">
        <div>
          <Navbar changeTheme={setGlobalTheme} />
        </div>
        <div className="sidebar-body-container">
          <Sidebar 
            Algorithm={algorithmOptions}
            setAlgorithm={setAlgorithmOptions}
            setAlgo={setAlgo}
            theme={globalTheme}
          />
          <Body />
        </div>
        <VisualizeButton onClick={handleClick} isVisualizing={isVisualizing}/>
      </div>
    </ThemeProvider>
  )
}

export default SortingVisualizer
