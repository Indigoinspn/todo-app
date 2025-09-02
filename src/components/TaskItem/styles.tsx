import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Item = styled.li<{ completed: boolean }>`
  display: flex;
  width: 94.5%;
  align-items: center;
  padding: 8px 0;
  margin-left: 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.coffee};
  background-color: ${({ completed }) => (completed ? theme.colors.mint : theme.colors.pink)};
  box-shadow: 10px 5px 8px 5px ${theme.colors.coffee};
`;

export const Text = styled.span<{ completed: boolean }>`
  flex: 1;
  font-weight: ${theme.weight.medium};
  color: ${({ completed }) => (completed ? theme.colors.khaki : theme.colors.coral)};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const DeleteButton = styled.button`
  color: ${theme.colors.honey};
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  transition-duration: 0.6s;

  &:hover {
    color: ${theme.colors.linen};
    background-color: ${theme.colors.honey};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: fill 0.2s;
    vertical-align: -0.125em;
  }
`;
