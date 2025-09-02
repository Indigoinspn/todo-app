import React from 'react';
import { CheckboxContainer, HiddenCheckbox, Checkmark, CheckIcon } from './styles';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleChange} disabled={disabled} />
      <Checkmark>
        <CheckIcon viewBox='0 0 12 12'>
          <polyline points='1,6 5,10 11,2' />
        </CheckIcon>
      </Checkmark>
    </CheckboxContainer>
  );
};

export default Checkbox;
