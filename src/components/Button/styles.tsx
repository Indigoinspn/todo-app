import styled from 'styled-components';
import { css } from 'styled-components';
import { ButtonProps } from './Button';
import { theme } from '../../styles/theme';

export type ButtonVariant = 'primary' | 'secondary';

export const BaseButton = styled.button<ButtonProps>`
  padding: 12px 12px;
  line-height: 21px;
  border-radius: 6px;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  font-family: inherit;
  color: ${theme.colors.tan};
  transition-duration: 0.6s;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  ${(props) => getButtonStyle(props.variant, props.$active, props.filter)}

  &:focus,&:hover {
    color: ${theme.colors.linen};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.tan};
    }
  }
`;

export const PrimaryButtonStyles = () => css`
  &:hover {
    background: ${theme.colors.honey};
  }

  &:focus {
    background-color: ${theme.colors.orange};
  }
`;

export const SecondaryButtonStyles = ($active: boolean, filter?: string) => css`
  ${$active &&
  filter === 'all' &&
  css`
    background-color: ${theme.colors.orange};
    color: ${theme.colors.linen};
  `}

  ${filter === 'all' &&
  css`
    &:focus {
      background-color: ${theme.colors.orange};
    }

    &:hover {
      background: ${theme.colors.honey};
    }
  `}

  ${filter === 'active' &&
  css`
    &:focus {
      background-color: ${theme.colors.blush};
    }

    &:hover {
      background: ${theme.colors.rose};
    }
  `}

   ${$active &&
  filter === 'active' &&
  css`
    background-color: ${theme.colors.blush};
    color: ${theme.colors.linen};
  `}


  ${filter === 'completed' &&
  css`
    &:focus {
      background-color: ${theme.colors.steelBlue};
    }

    &:hover {
      background: ${theme.colors.steelBlue};
    }
  `}

  ${$active &&
  filter === 'completed' &&
  css`
    background-color: ${theme.colors.steelBlue};
    color: ${theme.colors.linen};
  `}
`;

export const getButtonStyle = (variant: ButtonVariant, $active: boolean, filter?: string) => {
  switch (variant) {
    case 'primary':
      return PrimaryButtonStyles;
    case 'secondary':
      return SecondaryButtonStyles($active, filter);
    default:
      return PrimaryButtonStyles;
  }
};
