import React from 'react';

import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { Type } from '../../shared/Type';

interface Props {
  types: Array<Type>;
  handleClick: any;
}

const CheckboxList: React.FC<Props> = ({ types, handleClick }) => (
  <FormGroup row>
    {Type.toArray().map((type: Type) => (
      <FormControlLabel
        label={type.label}
        key={type.key}
        control={
          <Checkbox
            checked={types.find((t: Type) => t.key === type.key)?.checked}
            onChange={handleClick}
            name={type.key}
            color="primary"
          />
        }
      />
    ))}
  </FormGroup>
);

export default CheckboxList;
