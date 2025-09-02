import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  gap: 8px;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
  outline: none;
`;

export const Checkmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${theme.colors.linen};
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 0px 10px;
  transition-duration: 0.6s;

  ${HiddenCheckbox}:checked + & {
    background: ${theme.colors.teal};
  }
`;

export const CheckIcon = styled.svg`
  opacity: 0;
  width: 12px;
  height: 12px;
  fill: none;
  stroke: ${theme.colors.forestGreen};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition-duration: 0.6s;

  ${HiddenCheckbox}:checked + ${Checkmark} & {
    opacity: 1;
  }

  ${HiddenCheckbox}:hover + ${Checkmark} & {
    opacity: 1;
    stroke: ${theme.colors.teal};
  }
`;
