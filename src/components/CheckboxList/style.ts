import styled from 'styled-components';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

import { blue, borderColor, greyDark, grey } from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  & > span {
    color: ${grey};
    font-size: 14px;
  }
`;

export const FormGroupCustom = styled(FormGroup)`
  && {
    display: flex;
    height: 240px;
    width: 100%;
    align-items: space-between;
    justify-content: flex-start;
    align-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const FormControlLabelCustom = styled(FormControlLabel)<{ checked: boolean }>`
  && {
    color: ${(props) => (props.checked ? blue : greyDark)};
    margin-right: 10%;
  }
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
      border: 2px solid ${blue};
      border-radius: 6px;
      box-shadow: 0px 0px 6px #00C1FD99;
      background-color: white;
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
