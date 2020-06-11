import styled from 'styled-components';

import { Slider } from '@material-ui/core';
import { blue, green, white } from '../../assets/styles/colors';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
`;

export const SliderCustom = styled(Slider)`
  && {
    max-width: 400px;
    color: ${green};
    .track {
      height: 10px;
      background-color: ${green};
    }
    .thumb {
      background-color: ${white};
      height: 18px;
      width: 18px;
    }
    .rail {
      height: 10px;
      border-radius: 4px;
      background-color: #dbdbdb;
    }
  }
`;
