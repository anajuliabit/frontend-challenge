import styled from 'styled-components';

import { greyLigth, greyDark, blue } from '../../assets/styles/colors';

export const Container = styled.div`
    display: flex;
    margin: 10vh 5vh;

    .list {
        background-color: ${greyLigth};
        border-box: 1px solid ${greyLigth};
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
