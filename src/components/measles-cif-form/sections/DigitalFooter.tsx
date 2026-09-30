import { useMeaslesForm } from "../context/MeaslesFormContext";

import "../styles/digital-footer.css";

export default function DigitalFooter() {
  const { formData, setFormData } = useMeaslesForm();

  const digitalFooter = formData.digitalFooter;

  return (
    <footer className="measles-digital-footer">
      {/* LEFT SIDE */}
      <div className="measles-digital-footer-left">
        <div className="measles-digital-copy-note">
          This is a digital copy, no signature required
        </div>

        <div className="measles-digital-footer-field">
          <span className="measles-digital-footer-label">Printed by:</span>

          <span className="measles-digital-footer-value">
            {digitalFooter.printedBy}
          </span>
        </div>

        <div className="measles-digital-footer-field">
          <span className="measles-digital-footer-label">Status:</span>

          <input
            type="text"
            value={digitalFooter.status}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,

                digitalFooter: {
                  ...previous.digitalFooter,
                  status: event.target.value,
                },
              }))
            }
            aria-label="Form completion status"
            className="measles-digital-footer-status-input"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="measles-digital-footer-right">Supported by WHO</div>
    </footer>
  );
}
