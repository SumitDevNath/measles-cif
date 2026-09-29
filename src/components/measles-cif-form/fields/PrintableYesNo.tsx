import type { YesNo, YesNoUnknown } from "../types/measlesForm.types";

interface PrintableYesNoProps {
  value: YesNo | YesNoUnknown;

  onChange: (value: YesNo | YesNoUnknown) => void;

  name: string;

  includeUnknown?: boolean;

  className?: string;

  yesLabel?: string;
  noLabel?: string;
  unknownLabel?: string;
}

export default function PrintableYesNo({
  value,
  onChange,
  name,
  includeUnknown = false,
  className = "",
  yesLabel = "Yes",
  noLabel = "No",
  unknownLabel = "Unknown",
}: PrintableYesNoProps) {
  return (
    <div
      className={`measles-yes-no-group ${className}`.trim()}
      role="radiogroup"
    >
      <label className="measles-checkbox-wrapper">
        <input
          type="radio"
          name={name}
          value="yes"
          checked={value === "yes"}
          className="measles-printable-checkbox-input"
          onChange={() => onChange("yes")}
        />

        <span className="measles-printable-checkbox" aria-hidden="true" />

        <span className="measles-checkbox-label">{yesLabel}</span>
      </label>

      <label className="measles-checkbox-wrapper">
        <input
          type="radio"
          name={name}
          value="no"
          checked={value === "no"}
          className="measles-printable-checkbox-input"
          onChange={() => onChange("no")}
        />

        <span className="measles-printable-checkbox" aria-hidden="true" />

        <span className="measles-checkbox-label">{noLabel}</span>
      </label>

      {includeUnknown && (
        <label className="measles-checkbox-wrapper">
          <input
            type="radio"
            name={name}
            value="unknown"
            checked={value === "unknown"}
            className="measles-printable-checkbox-input"
            onChange={() => onChange("unknown")}
          />

          <span className="measles-printable-checkbox" aria-hidden="true" />

          <span className="measles-checkbox-label">{unknownLabel}</span>
        </label>
      )}
    </div>
  );
}
