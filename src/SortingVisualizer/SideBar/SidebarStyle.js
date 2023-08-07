import styled from 'styled-components';

const StyledSideBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justifyContent : space-between;
  width: 45vh;
  z-index: 998;
  background-color: ${(props) => props.theme.sidebar.background};
  transition-duration: 0.3s;
  transition-property: background-color, left;
  
  .controller-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;
  }
  
  .sliders-container {
    margin: 5% auto;
    width: fit-content;
  }

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

export default StyledSideBar;
