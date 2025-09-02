import styled from 'styled-components';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';

export interface CounterProps {
  active: boolean;
}

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const CountersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

export const Counter = styled.span<CounterProps>`
  color: ${theme.colors.tan};
  font-weight: bold;

  ${(props) =>
    props.active &&
    css`
      color: ${theme.colors.steelBlue};
    `};
`;
