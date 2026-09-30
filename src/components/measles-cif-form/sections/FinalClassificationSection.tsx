import { useMeaslesForm } from "../context/MeaslesFormContext";

import type {
  FinalClassification,
  SourceOfInfection,
} from "../types/measlesForm.types";

import "../styles/final-classification.css";

/* =========================================================
   FINAL CLASSIFICATION OPTION CONFIG
   ========================================================= */

interface FinalClassificationOption {
  key: keyof FinalClassification;
  label: string;
}

const finalClassificationOptions: FinalClassificationOption[] = [
  {
    key: "clinicallyCompatibleMeasles",
    label: "Clinically compatible Measles",
  },
  {
    key: "laboratoryConfirmedMeasles",
    label: "Laboratory confirmed Measles",
  },
  {
    key: "epidemiologicallyLinkedMeasles",
    label: "Epidemiologically linked Measles",
  },
  {
    key: "clinicallyCompatibleRubella",
    label: "Clinically compatible Rubella",
  },
  {
    key: "laboratoryConfirmedRubella",
    label: "Laboratory confirmed Rubella",
  },
  {
    key: "epidemiologicallyLinkedRubella",
    label: "Epidemiologically linked Rubella",
  },
  {
    key: "discarded",
    label: "Discarded",
  },
];

/* =========================================================
   SOURCE OF INFECTION OPTION CONFIG
   ========================================================= */

interface SourceOfInfectionOption {
  key: keyof SourceOfInfection;
  label: string;
}

const sourceOfInfectionOptions: SourceOfInfectionOption[] = [
  {
    key: "endemic",
    label: "Endemic",
  },
  {
    key: "imported",
    label: "Imported",
  },
  {
    key: "importRelated",
    label: "Import related",
  },
  {
    key: "unknown",
    label: "Unknown",
  },
];

export default function FinalClassificationSection() {
  const { formData, setFormData } = useMeaslesForm();

  /* =========================================================
     UPDATE FINAL CLASSIFICATION
     ========================================================= */

  const updateFinalClassification = (
    key: keyof FinalClassification,
    checked: boolean,
  ) => {
    setFormData((previous) => ({
      ...previous,

      finalClassification: {
        ...previous.finalClassification,

        [key]: checked,
      },
    }));
  };

  /* =========================================================
     UPDATE SOURCE OF INFECTION
     ========================================================= */

  const updateSourceOfInfection = (
    key: keyof SourceOfInfection,
    checked: boolean,
  ) => {
    setFormData((previous) => ({
      ...previous,

      sourceOfInfection: {
        ...previous.sourceOfInfection,

        [key]: checked,
      },
    }));
  };

  return (
    <section className="measles-final-classification-section">
      {/* =====================================================
          FINAL CLASSIFICATION
         ===================================================== */}

      <div className="measles-final-classification-block">
        <h2 className="measles-section-heading measles-final-classification-heading">
          FINAL CLASSIFICATION
        </h2>

        <div className="measles-final-classification-options">
          {finalClassificationOptions.map((option) => (
            <label key={option.key} className="measles-classification-option">
              <input
                type="checkbox"
                checked={formData.finalClassification[option.key]}
                onChange={(event) =>
                  updateFinalClassification(option.key, event.target.checked)
                }
                className="measles-classification-checkbox-input"
              />

              <span className="measles-classification-box" />

              <span className="measles-classification-label">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* =====================================================
          SOURCE OF INFECTION
         ===================================================== */}

      <div className="measles-source-infection-block">
        <h2 className="measles-section-heading measles-source-infection-heading">
          SOURCE OF INFECTION
        </h2>

        <div className="measles-source-infection-options">
          {sourceOfInfectionOptions.map((option) => (
            <label key={option.key} className="measles-classification-option">
              <input
                type="checkbox"
                checked={formData.sourceOfInfection[option.key]}
                onChange={(event) =>
                  updateSourceOfInfection(option.key, event.target.checked)
                }
                className="measles-classification-checkbox-input"
              />

              <span className="measles-classification-box" />

              <span className="measles-classification-label">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
