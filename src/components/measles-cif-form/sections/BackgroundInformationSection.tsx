import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";
import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { HealthFacilityType, YesNo } from "../types/measlesForm.types";

import "../styles/background-information.css";

export default function BackgroundInformationSection() {
  const {
    formData,
    updateSectionField,
    // setFormData,
  } = useMeaslesForm();

  const background = formData.backgroundInformation;

  const updateFacilityType = (value: HealthFacilityType) => {
    updateSectionField("backgroundInformation", "healthFacilityType", value);
  };

  const updateIndexCase = (value: YesNo) => {
    updateSectionField("backgroundInformation", "isIndexCase", value);
  };

  return (
    <section className="measles-background-section">
      <div className="measles-section-heading-row">
        <h2 className="measles-section-heading">BACKGROUND INFORMATION</h2>

        <div className="measles-index-case">
          <span className="measles-index-label">Is this INDEX case?</span>

          <PrintableYesNo
            name="is-index-case"
            value={background.isIndexCase}
            onChange={(value) => updateIndexCase(value as YesNo)}
          />
        </div>
      </div>

      <div className="measles-background-row measles-background-row-two">
        <div className="measles-inline-field-group">
          <span className="measles-inline-label">
            DATE FOCAL PERSON WAS NOTIFIED:
          </span>

          <PrintableDateField
            value={background.focalPersonNotifiedDate}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "focalPersonNotifiedDate",
                value,
              )
            }
            ariaLabel="Date focal person was notified"
            className="measles-background-date"
          />
        </div>

        <div className="measles-inline-field-group measles-notifier-field">
          <span className="measles-inline-label">
            NAME OF PERSON NOTIFYING:
          </span>

          <PrintableLineField
            value={background.personNotifyingName}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "personNotifyingName",
                value,
              )
            }
            ariaLabel="Name of person notifying"
            className="measles-flex-line-field"
          />
        </div>
      </div>

      <div className="measles-background-row measles-background-row-two">
        <div className="measles-inline-field-group">
          <span className="measles-inline-label">DATE OF INVESTIGATION:</span>

          <PrintableDateField
            value={background.investigationDate}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "investigationDate",
                value,
              )
            }
            ariaLabel="Date of investigation"
            className="measles-background-date"
          />
        </div>

        <div className="measles-inline-field-group measles-designation-field">
          <span className="measles-inline-label">Designation/Address:</span>

          <PrintableLineField
            value={background.designationAddress}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "designationAddress",
                value,
              )
            }
            ariaLabel="Designation and address"
            className="measles-flex-line-field"
          />
        </div>
      </div>

      <div className="measles-background-row measles-facility-row">
        <div className="measles-inline-field-group measles-facility-name">
          <span className="measles-inline-label">Name of health facility:</span>

          <PrintableLineField
            value={background.healthFacilityName}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "healthFacilityName",
                value,
              )
            }
            ariaLabel="Name of health facility"
            className="measles-flex-line-field measles-health-facility-input"
          />
        </div>

        <div className="measles-facility-type">
          <span className="measles-inline-label">Type of health facility:</span>

          <label className="measles-checkbox-wrapper">
            <input
              type="radio"
              name="health-facility-type"
              checked={background.healthFacilityType === "gob"}
              className="measles-printable-checkbox-input"
              onChange={() => updateFacilityType("gob")}
            />

            <span className="measles-printable-checkbox" aria-hidden="true" />

            <span className="measles-checkbox-label">GOB</span>
          </label>

          <label className="measles-checkbox-wrapper">
            <input
              type="radio"
              name="health-facility-type"
              checked={background.healthFacilityType === "non-gob"}
              className="measles-printable-checkbox-input"
              onChange={() => updateFacilityType("non-gob")}
            />

            <span className="measles-printable-checkbox" aria-hidden="true" />

            <span className="measles-checkbox-label">Non GOB</span>
          </label>
        </div>
      </div>

      <div className="measles-background-row measles-final-background-row">
        <div className="measles-inline-field-group">
          <span className="measles-inline-label">
            Date of Visit / Admission:
          </span>

          <PrintableDateField
            value={background.visitAdmissionDate}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "visitAdmissionDate",
                value,
              )
            }
            ariaLabel="Date of visit or admission"
            className="measles-background-date"
          />
        </div>

        <div className="measles-inline-field-group measles-record-field">
          <span className="measles-inline-label">Medical Record #:</span>

          <PrintableLineField
            value={background.medicalRecordNumber}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "medicalRecordNumber",
                value,
              )
            }
            ariaLabel="Medical record number"
            className="measles-flex-line-field"
          />
        </div>
      </div>
    </section>
  );
}
