interface PrintableDateFieldProps {
  value: string;
  onChange: (value: string) => void;

  name?: string;
  ariaLabel?: string;

  className?: string;
  disabled?: boolean;
}

function formatDateInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export default function PrintableDateField({
  value,
  onChange,
  name,
  ariaLabel,
  className = "",
  disabled = false,
}: PrintableDateFieldProps) {
  return (
    <input
      type="text"
      inputMode="numeric"
      name={name}
      value={value}
      aria-label={ariaLabel}
      disabled={disabled}
      maxLength={10}
      autoComplete="off"
      placeholder=""
      className={`measles-printable-date-field ${className}`.trim()}
      onChange={(event) => {
        onChange(formatDateInput(event.target.value));
      }}
    />
  );
}
