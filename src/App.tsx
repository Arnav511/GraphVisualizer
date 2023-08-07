import React, { ReactElement, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GraphVisualizer from './GraphVisulizer';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Theme from './models/Theme';
import themes from './themes';

const App: React.FC<{}> = (): ReactElement => {

  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);

  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path='/graph' element = {<GraphVisualizer globalTheme = {globalTheme} setGlobalTheme={setGlobalTheme}/>}/>
        <Route path='/sorting' element = {<SortingVisualizer globalTheme = {globalTheme} setGlobalTheme={setGlobalTheme}/>}/>
      </Routes>
    </>
  );
};

export default App;
