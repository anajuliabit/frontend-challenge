import { createGlobalStyle } from 'styled-components';

import { borderColor, grey } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

::-webkit-scrollbar, ::-webkit-scrollbar-track {
  width: 12px;
  background: white 0% 0% no-repeat padding-box;
    border-radius: 9px;
    opacity: 1;
}

::-webkit-scrollbar-thumb {
    background: ${borderColor} 0% 0% no-repeat padding-box;
    height: 54px;
    border-radius: 6px;
    opacity: 1;
}

::-webkit-scrollbar-thumb:hover {
  background: ${grey};
}
`;
