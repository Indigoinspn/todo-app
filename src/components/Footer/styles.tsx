import styled from 'styled-components';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';

export interface CounterProps {
  $active: boolean;
  filter: 'all' | 'active' | 'completed';
}

export const CountersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

export const Counter = styled.span<CounterProps>`
  color: ${theme.colors.tan};
  font-weight: bold;

  ${(props) =>
    props.$active &&
    props.filter === 'all' &&
    css`
      color: ${theme.colors.honey};
    `};

  ${(props) =>
    props.$active &&
    props.filter === 'active' &&
    css`
      color: ${theme.colors.rose};
    `};

  ${(props) =>
    props.$active &&
    props.filter === 'completed' &&
    css`
      color: ${theme.colors.steelBlue};
    `};
`;
