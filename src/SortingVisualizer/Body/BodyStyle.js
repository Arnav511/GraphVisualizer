import styled from 'styled-components';


const BodyStyle = styled.div`
  height: calc(100vh - 50px);
  width: auto;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 70%;
  justify-content: flex-start;
  position: relative;
  margin-left: 45vh;
  background-color: ${(props) => props.theme.canvas.background};
  transition-duration: 0.3s;
  transition-property: background-color;

  .body-controller-container {
    
  }

  .bars-container {
    margin-top: 10vh;
    align-self: flex-end;
    padding-left: 7vh;
  }
  .container {
    position: relative;
    align-self: flex-start;
    width: 600px;
    bottom: 5vh;
  }
  .bar {
    height: 100px;
    background-color: ${(props) => props.theme.canvas.background};
    font-size: 2rem;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
    position: absolute;
    border: 1px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.theme.edge.background};
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    box-sizing: border-box;
    background-color: ${(props) =>
      props.isActive
        ? props.theme.nodeActive.background
        : props.theme.nodeInactive.background};
  
    color: ${(props) =>
      props.isActive
        ? props.theme.nodeActive.foreground
        : props.theme.nodeInactive.foreground};

    transition-duration: 0.3s;
    transition-property: background-color, border;
  }
  .barcount {
    color: white;
  }
  
  .blue {
    background-color: rgb(0, 174, 255);
  }
  
  .green {
    background-color: green;
  }
  
  .red {
    background-color: #ff0000;
  }
  
  .yellow {
    background-color: rgb(255, 165, 0);
  }
  
  .purple {
    background-color: purple;
  }

  @media (max-width: 550px) {
    height: calc(100vh - 90px);
  }
`;

export default BodyStyle;