import styled from 'styled-components';

import { greyLight, greyDark, blue } from '../../assets/styles/colors';

export const Container = styled.div`
    display: flex;
    margin: 5vh;

    .list {
        background-color: ${greyLight};
        border-radius: 20px;
        padding: 20px;
        width: 40vw;

        header {
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
            margin: 10px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
   }

`;
