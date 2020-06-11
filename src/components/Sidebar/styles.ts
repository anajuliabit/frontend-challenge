import styled from 'styled-components';

import { grey, blue, greyDark } from '../../assets/styles/colors';

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
  }
  .menu {
    width: 80%;
    heigth: 100%;
    margin: 60px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }
  .menuItem {
    display: flex;
    margin: 10px 0;

    p {
      color: ${grey};
      margin: 15px;
    }
    img {
      width: 30px;
    }
    p,
    img {
      :hover {
        color: ${blue};
        cursor: pointer;
      }
    }
  }
`;
