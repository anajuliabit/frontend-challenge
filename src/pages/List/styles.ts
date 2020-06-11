import styled from 'styled-components';

import { greyLight, greyDark, blue } from '../../assets/styles/colors';
import { device } from '../../assets/styles/devices';

export const Container = styled.div`
  display: flex;
  margin: 5vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled('section')<{
  height?: string;
  width?: string;
  widthDesktop?: string;
}>`
  background-color: ${greyLight};
  border-radius: 20px;
  padding: 20px 0;
  margin: 0 20px;
  width: ${(props) => (props.width ? props.width : '40vw')};
  height: ${(props) => (props.height ? props.height : '90vh')};
  position: relative;

  @media ${device.desktop} {
    width: ${(props) => (props.widthDesktop ? props.widthDesktop : '45vw')};
  }
  header {
    margin-left: 5%;
    h1 {
      color: ${greyDark};
      font-size: 35px;
    }
    strong {
      font-size: 14px;
      color: ${blue};
    }
  }

  .items {
    height: 85%;
    width: 100%;
    overflow: scroll;
    display: flex;
    margin: 20px 0;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media ${device.desktop} {
      height: 90%;
    }
  }

  .loader {
    position: absolute;
    top: 45%;
    left: 45%;
  }
`;
