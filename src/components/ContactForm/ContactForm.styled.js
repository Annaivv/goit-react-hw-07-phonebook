import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px;
  max-width: 300px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 4px;
  font: inherit;
  margin-bottom: 8px;
`;
