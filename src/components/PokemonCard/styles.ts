import styled from 'styled-components';

import {
  white, grey, greyDark, purple
} from '../../assets/styles/colors';

export const Container = styled.div`
  background-color: ${white};
  border-box: 1px solid ${white};
  border-radius: 20px;
  padding: 10px;
  width: 240px;
  display: flex;
  margin: 10px 0;
  justify-content: space-between;

  div {
      display: flex;
  }
  
  section {
     margin-left: 15px;
     strong {
     color: ${greyDark};
     }
     p {
       font-size: 12px;
       color: ${grey};
       margin: 2px 0 10px 0;
     }
     .totalizer {
        display: flex;
        justify-content: center;
        background-color: ${purple};
        border-box: 1px solid ${purple};
        color: ${white};
        font-size: 14px;
        font-weight: bold;
        border-radius: 4px; 
        width: 54px;
        height: 19px;
        opacity: 1;
    }
  }

  p {
      font-size: 12px;
      color: ${grey};
  }
`;
