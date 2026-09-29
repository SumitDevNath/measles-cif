import PrintableDateField from "../fields/PrintableDateField";
import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { YesNo } from "../types/measlesForm.types";

import "../styles/clinical-information.css";

export default function ClinicalInformationSection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const clinical = formData.clinicalInformation;

  const updateFever = (value: YesNo) => {
    updateSectionField("clinicalInformation", "fever", value);
  };

  const updateRash = (value: YesNo) => {
    updateSectionField(
      "clinicalInformation",
      "generalizedMaculopapularRash",
      value,
    );
  };

  return (
    <section className="measles-clinical-section">
      <h2 className="measles-section-heading measles-clinical-heading">
        CLINICAL INFORMATION
      </h2>

      <table className="measles-clinical-table">
        <tbody>
          {/* =========================================
              ROW 1 — FEVER
             ========================================= */}
          <tr>
            <td className="measles-clinical-main-cell">
              <div className="measles-clinical-question-group">
                <span className="measles-clinical-question">1. Fever?</span>

                <PrintableYesNo
                  name="clinical-fever"
                  value={clinical.fever}
                  onChange={(value) => updateFever(value as YesNo)}
                />
              </div>
            </td>

            <td className="measles-clinical-date-cell">
              <div className="measles-clinical-date-group">
                <span className="measles-clinical-date-label">
                  Date of onset of fever:
                </span>

                <PrintableDateField
                  value={clinical.feverOnsetDate}
                  onChange={(value) =>
                    updateSectionField(
                      "clinicalInformation",
                      "feverOnsetDate",
                      value,
                    )
                  }
                  ariaLabel="Date of onset of fever"
                  className="measles-clinical-date-input"
                />
              </div>
            </td>
          </tr>

          {/* =========================================
              ROW 2 — RASH
             ========================================= */}
          <tr>
            <td className="measles-clinical-main-cell">
              <div className="measles-clinical-question-group">
                <span className="measles-clinical-question">
                  2. Generalized maculopapular rash?
                </span>

                <PrintableYesNo
                  name="clinical-generalized-rash"
                  value={clinical.generalizedMaculopapularRash}
                  onChange={(value) => updateRash(value as YesNo)}
                />
              </div>
            </td>

            <td className="measles-clinical-date-cell">
              <div className="measles-clinical-date-group">
                <span className="measles-clinical-date-label">
                  Date of onset of rash:
                </span>

                <PrintableDateField
                  value={clinical.rashOnsetDate}
                  onChange={(value) =>
                    updateSectionField(
                      "clinicalInformation",
                      "rashOnsetDate",
                      value,
                    )
                  }
                  ariaLabel="Date of onset of rash"
                  className="measles-clinical-date-input"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
