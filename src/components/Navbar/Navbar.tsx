import React, {ReactElement} from 'react';
import Container from './Container';
import Row from '../common/Row';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import HelpIcon from './HelpIcon';

interface NavbarProps {
  changeTheme: Function;
  onHelpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {

  return (
    <Container>
      <Row justifyContent="center" style={{ margin : "auto", fontFamily : "monospace", fontSize : "30px" }}>
        Algo Visualizer
      </Row>

      <Row justifyContent="space-evenly" margin="0 18px">
        <ThemeSwitch changeTheme={props.changeTheme}></ThemeSwitch>
        <HelpIcon onClick={() => props.onHelpClick()}></HelpIcon>
      </Row>
    </Container>
  );
};

export default Navbar;
