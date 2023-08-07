import React from "react";
import Buttons from "./Buttons/Buttons";
import Sliders from "./Sliders/Sliders";
import ArrayInput from "./Input/ArrayInput";
import StyledSideBar from "./SidebarStyle";
import Row from "../../components/common/Row";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import { useDispatch } from "react-redux";
// import "./Sidebar.css";

const Options = [
  "Insertion Sort",
  "Bubble Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
];

const Sidebar = ({ Algorithm, setAlgorithm, setAlgo, theme }) => {

  const disp = useDispatch();

  const setSelectedAlgorithm = (index) => {
    setAlgorithm(Options[index]);
    disp(setAlgo(index));
  };

  return (
    <StyledSideBar >
      <div className="controller-container" >
        <div className="sort-btns-container">
          <Row justifyContent="center">
            <Dropdown
              selectedTile={Options.indexOf(Algorithm)}
              setSelectedTile={setSelectedAlgorithm}
              content={Options}
            ></Dropdown>
          </Row>
          <Buttons theme={theme}/>
        </div>
        <div>
          <ArrayInput theme={theme}/>
        </div>
        <div className="sliders-container">
          <Sliders />
        </div>
      </div>
    </StyledSideBar>
  );
};

export default Sidebar;
