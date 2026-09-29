interface PrintableCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;

  label?: string;
  name?: string;

  disabled?: boolean;

  className?: string;
}

export default function PrintableCheckbox({
  checked,
  onChange,
  label,
  name,
  disabled = false,
  className = "",
}: PrintableCheckboxProps) {
  return (
    <label className={`measles-checkbox-wrapper ${className}`.trim()}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        className="measles-printable-checkbox-input"
        onChange={(event) => onChange(event.target.checked)}
      />

      <span className="measles-printable-checkbox" aria-hidden="true" />

      {label && <span className="measles-checkbox-label">{label}</span>}
    </label>
  );
}
