interface PrintableTextFieldProps {
  value: string;
  onChange: (value: string) => void;

  name?: string;
  ariaLabel?: string;

  className?: string;

  placeholder?: string;
  disabled?: boolean;

  maxLength?: number;
}

export default function PrintableTextField({
  value,
  onChange,
  name,
  ariaLabel,
  className = "",
  placeholder,
  disabled = false,
  maxLength,
}: PrintableTextFieldProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      aria-label={ariaLabel}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      autoComplete="off"
      className={`measles-printable-text-field ${className}`.trim()}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
