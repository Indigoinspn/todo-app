import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  width: 85%;
  border: 2px solid ${theme.colors.tan};
  border-radius: 6px;
  font-size: ${theme.fonts.normal};
  font-weight: ${theme.weight.medium};
  color: ${theme.colors.honey};

  &::placeholder {
    color: ${theme.colors.tan};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;
