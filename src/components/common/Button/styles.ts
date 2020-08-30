import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;

  &::placeholder {
    color: #666360;
  }

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
