import styled from "styled-components";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({ placeholder, onChange, value }: Props) {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 45px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
`;
