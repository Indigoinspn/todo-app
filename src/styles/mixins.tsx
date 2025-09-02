import { css } from 'styled-components';

export const flexCenter = (direction = 'row') => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${direction};
`;

export const textEllipsis = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
