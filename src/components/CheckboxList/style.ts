import styled from 'styled-components';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import { blue, borderColor, greyDark } from '../../assets/styles/colors';

export const FormControlLabelCustom = styled(FormControlLabel)<{ checked: boolean }>`
  color: ${(props) => (props.checked ? blue : greyDark)};
`;

export const CheckboxCustom = styled(Checkbox)`
  && {
    .checked {
        border: 3px solid ${borderColor};
        display: block,
        opacity: 1;
        width: 20px;
        height: 20px;
        border-radius: 6px;
    }

    .checked-icon {
      border: 3px solid ${blue};
      border-radius: 6px;
      box-shadow: 0px 0px 6px #00C1FD99;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {

          box-shadow: 0px 0px 6px #00C1FD99;
          border-box: 1px solid ${blue};
          width: 16px;
          height: 16px;
          color: ${blue};
          padding: 2px;
          top: 2px;
      }
    }

  }
`;
