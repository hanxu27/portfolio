import styled from "styled-components";
import image from "./splash.jpg";

const background = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: -1;
  min-height: 94.4vh;
`;

export default background;
