import React from 'react';

import { FaCheck } from 'react-icons/fa';
import { Type } from '../../shared/Type';
import { CheckboxCustom, FormControlLabelCustom, FormGroupCustom, Container } from './style';

interface Props {
  types: Array<Type>;
  handleClick: any;
}

const CheckboxList: React.FC<Props> = ({ types, handleClick }) => (
  <Container>
    <span>Types</span>
    <FormGroupCustom row>
      {Type.toArray().map((type: Type) => (
        <FormControlLabelCustom
          checked={types.find((t: Type) => t.key === type.key)?.checked || false}
          label={type.label}
          key={type.key}
          control={
            <CheckboxCustom
              checked={types.find((t: Type) => t.key === type.key)?.checked}
              onChange={handleClick}
              checkedIcon={
                <div className="checked-icon">
                  <FaCheck className="icon" />
                </div>
              }
              icon={<div className="checked" />}
              name={type.key}
              color="primary"
            />
          }
        />
      ))}
    </FormGroupCustom>
  </Container>
);

export default CheckboxList;
