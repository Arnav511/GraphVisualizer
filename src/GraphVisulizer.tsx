import React, { ReactElement, useState } from 'react';
import Home from './components/Home/Home';
import { ThemeProvider } from 'styled-components';
import Theme from './models/Theme';
import Tutorial from './components/Tutorial/Tutorial';

interface GraphVisualizerProps {
  globalTheme: Theme;
  setGlobalTheme: Function;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = (props : GraphVisualizerProps): ReactElement => {
  const [isTutorialVisible, setIsTutorialVisible] = useState<boolean>(
    (localStorage.getItem('isFirstTime') ?? 'true') === 'true'
  );

  const onTutorialExit = () => {
    setIsTutorialVisible(false);
    localStorage.setItem('isFirstTime', 'false');
  };

  const onTutorialOpen = () => {
    setIsTutorialVisible(true);
  };

  return (
    <>
      <ThemeProvider theme={props.globalTheme}>
        <Home onHelpClick={onTutorialOpen} changeTheme={props.setGlobalTheme}></Home>
        <Tutorial onExit={onTutorialExit} isVisible={isTutorialVisible} />
      </ThemeProvider>
    </>
  );
};

export default GraphVisualizer;