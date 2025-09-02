import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ListContainer = styled.div`
  background-color: ${theme.colors.sandstone};
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 10px 0px 30px 0px;
  overflow: hidden;
  max-height: 60vh;
  min-height: 60vh;
  overflow-y: scroll;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${theme.colors.tan};
  margin: 100px 30px 40px;
  min-height: 60vh;
`;
