import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 40px;
  border-radius: 40px;
  background: ${theme.colors.linen};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;
