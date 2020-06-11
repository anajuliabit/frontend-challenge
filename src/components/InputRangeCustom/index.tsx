import React from 'react';
import InputRange from 'react-input-range';

interface Props {
  maxValue: number;
  minValue: number;
  value: number;
  onChange: any;
}

const InputRangeCustom: React.FC<Props> = ({ maxValue, minValue, value, onChange }) => (
  <InputRange maxValue={maxValue} minValue={minValue} value={value} onChange={onChange} />
);

export default InputRange;
