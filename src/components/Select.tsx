import styled from "styled-components";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  options: Option[];
  onChange?: (value: string) => void;
  value?: string;
};

export default function Select({ label, options, onChange, value }: Props) {
  return (
    <div>
      <Label>{label}</Label>
      <StyledSelect
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
      >
        <option value="">Seçiniz</option>
        {options.map(({ value: optValue, label }) => (
          <option key={optValue} value={optValue}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

const StyledSelect = styled.select`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 45px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;
