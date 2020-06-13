import styled from 'styled-components';

import { Slider } from '@material-ui/core';
import { green, borderColor, grey } from '../../assets/styles/colors';

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  & > span {
    color: ${grey};
    font-size: 14px;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 70px;
    height: 30px;
    border: 2px solid ${borderColor};
    border-radius: 10px;
    opacity: 1;
    font-weight: bold;
    background-color: transparent;
    padding: 0 10px;
    font-size: 16px;
    text-align: center;
  }
`;

export const SliderCustom = styled(Slider)`
  && {
    margin-bottom: 10px;
    color: ${green};
    .track {
      height: 10px;
      background-color: ${green};
    }
    .thumb {
      background-color: white;
      height: 18px;
      width: 18px;
    }
    .rail {
      height: 10px;
      border-radius: 4px;
      background-color: ${borderColor};
    }
  }
`;
