import styled from 'styled-components';

import { white, grey, greyDark, blue } from '../../assets/styles/colors';

export const Container = styled('div')<{ color?: string }>`
  background-color: ${white};
  border-box: 1px solid ${white};
  border-radius: 20px;
  padding: 10px;
  width: 240px;
  height: 95px;
  display: flex;
  margin: 10px 5px;
  justify-content: space-between;

  section {
    display: flex;

    .image {
      border: 1px solid #dbdbdb;
      border-radius: 14px;
      opacity: 1;
      padding: 4px;
    }

    img {
      width: 64px;
      height: 64px;
    }

    div {
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
        align-items: center;
        background-color: ${(props) => (props.color ? props.color : blue)};
        color: ${white};
        font-size: 14px;
        font-weight: bold;
        border-radius: 4px;
        width: 54px;
        height: 19px;
        opacity: 1;
      }
    }
  }

  p {
    font-size: 12px;
    color: ${grey};
  }
`;
