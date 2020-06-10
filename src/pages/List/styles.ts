import styled from 'styled-components';

import { greyLight, greyDark, blue } from '../../assets/styles/colors';
import { device } from '../../assets/styles/devices';

export const Container = styled.div`
    display: flex;
    margin: 5vh;

    .list {
        background-color: ${greyLight};
        border-radius: 20px;
        padding: 20px 0;
        width: 40vw;
        height: 90vh;
        position: relative;

        @media ${device.desktop} {
            width: 45vw;
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
   }

`;
