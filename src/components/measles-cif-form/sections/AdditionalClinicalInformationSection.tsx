import PrintableLineField from "../fields/PrintableLineField";
import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { YesNo, YesNoUnknown } from "../types/measlesForm.types";

import "../styles/additional-clinical-information.css";

export default function AdditionalClinicalInformationSection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const additional = formData.additionalClinicalInformation;

  return (
    <section className="measles-additional-clinical-section">
      <h2 className="measles-section-heading measles-additional-clinical-heading">
        ADDITIONAL CLINICAL INFORMATION
      </h2>

      <div className="measles-additional-clinical-grid">
        {/* =====================================================
            ROW 1 — 3 EQUAL COLUMNS
           ===================================================== */}

        <div className="measles-additional-row measles-additional-row-three">
          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                1. Cough?
              </span>

              <PrintableYesNo
                name="additional-cough"
                value={additional.cough}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "cough",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>

          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                2. Coryza?
              </span>

              <PrintableYesNo
                name="additional-coryza"
                value={additional.coryza}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "coryza",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>

          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                3. Conjunctivitis?
              </span>

              <PrintableYesNo
                name="additional-conjunctivitis"
                value={additional.conjunctivitis}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "conjunctivitis",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            ROW 2 — ONE FULL-WIDTH COLUMN
           ===================================================== */}

        <div className="measles-additional-row measles-additional-row-one">
          <div className="measles-additional-cell">
            <div className="measles-additional-row-two-content">
              <div className="measles-additional-question-row measles-additional-joint-question">
                <span className="measles-additional-question-text">
                  4. Joint pain (arthralgia or arthritis)?
                </span>

                <PrintableYesNo
                  name="additional-joint-pain"
                  value={additional.jointPain}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "jointPain",
                      value as YesNo,
                    )
                  }
                />
              </div>

              <div className="measles-additional-inline-field measles-additional-joint-details">
                <span>
                  4a. If <strong>YES</strong>, which joint/s (note all):
                </span>

                <PrintableLineField
                  value={additional.jointsAffected}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "jointsAffected",
                      value,
                    )
                  }
                  ariaLabel="Joints affected"
                  className="measles-additional-joints-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ROW 3 — ONE FULL-WIDTH COLUMN
           ===================================================== */}

        <div className="measles-additional-row measles-additional-row-one">
          <div className="measles-additional-cell">
            <div className="measles-additional-row-three-content">
              <div className="measles-additional-question-row measles-additional-lymph-question">
                <span className="measles-additional-question-text">
                  5. Lymph node swelling (lymphadenopathe)?
                </span>

                <PrintableYesNo
                  name="additional-lymph-node-swelling"
                  value={additional.lymphNodeSwelling}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "lymphNodeSwelling",
                      value as YesNo,
                    )
                  }
                />
              </div>

              <div className="measles-additional-lymph-instruction">
                If <strong>YES</strong>, where{" "}
                <strong>
                  <em>(mark all that apply)?</em>
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ROW 4 — 3 EQUAL COLUMNS
           ===================================================== */}

        <div className="measles-additional-row measles-additional-row-three">
          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                5a. Sub-occipital?
              </span>

              <PrintableYesNo
                name="additional-sub-occipital"
                value={additional.subOccipital}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "subOccipital",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>

          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                5b. Post auricular?
              </span>

              <PrintableYesNo
                name="additional-post-auricular"
                value={additional.postAuricular}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "postAuricular",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>

          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                5c. Cervical?
              </span>

              <PrintableYesNo
                name="additional-cervical"
                value={additional.cervical}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "cervical",
                    value as YesNo,
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            ROW 5 — 2 EQUAL COLUMNS
           ===================================================== */}

        <div className="measles-additional-row measles-additional-row-two">
          <div className="measles-additional-cell">
            <div className="measles-additional-question-row">
              <span className="measles-additional-question-text">
                6. Pregnant (when applicable)?
              </span>

              <PrintableYesNo
                name="additional-pregnant"
                value={additional.pregnant}
                includeUnknown
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "pregnant",
                    value as YesNoUnknown,
                  )
                }
              />
            </div>
          </div>

          <div className="measles-additional-cell">
            <div className="measles-additional-inline-field">
              <span>
                6a. If <strong>YES</strong>, duration in weeks
              </span>

              <PrintableLineField
                value={additional.pregnancyDurationWeeks}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "pregnancyDurationWeeks",
                    value,
                  )
                }
                ariaLabel="Pregnancy duration in weeks"
                className="measles-additional-pregnancy-weeks-input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
