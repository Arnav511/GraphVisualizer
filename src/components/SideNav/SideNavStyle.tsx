import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const StyledSideNav = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justifyContent : space-between;
  width: 45vh;
  z-index: 998;
  left: ${(props) => (props.isVisible ? 0 : '-45vh')};
  background-color: ${(props) => props.theme.sidebar.background};
  overflow-x: hidden;
  transition-duration: 0.3s;
  transition-property: background-color, left;

  scrollbar-color: white transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export default StyledSideNav;
