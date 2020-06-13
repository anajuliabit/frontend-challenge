import styled from 'styled-components';

import { grey, blue, greyDark } from '../../assets/styles/colors';
import { device } from '../../assets/styles/devices';

export const Container = styled.div`
  width: 15vw;
  margin: 5vh 0;
  header {
    display: flex;
    section {
      margin: 5px 10px;
    }
    strong {
      color: ${greyDark};
    }
    p {
      font-size: 12px;
      color: ${grey};
      margin-right: 4px;
    }

    img {
      height: 32px;
      width: 32px;

      @media ${device.laptopL} {
        height: 52px;
        width: 52px;
      }
    }
  }
  .menu {
    width: 80%;
    heigth: 100%;
    margin: 60px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  margin: ${(props) => (props.active ? '10px 0px 10px -10px' : '10px 0')};

  :hover {
    .icon {
      filter: ${(props) => (!props.active ? 'invert(47%) sepia(19%) saturate(5842%) hue-rotate(174deg) brightness(103%) contrast(103%)' : null)};
      cursor: pointer;
    }
    p {
      color: ${blue};
      cursor: pointer;
    }
  }

  p {
    color: ${(props) => (props?.active ? blue : grey)};
    margin: 15px;
    text-shadow: ${(props) => (props.active ? '0px 0px 6px #00c1fd80' : 'none')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  }
`;
