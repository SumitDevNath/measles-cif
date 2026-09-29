import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { Sex } from "../types/measlesForm.types";

import "../styles/patient-identification.css";

export default function PatientIdentificationSection() {
  const { formData, updateSectionField, setFormData } = useMeaslesForm();

  const patient = formData.patientIdentification;

  const updateCaseId = (field: keyof typeof patient.caseId, value: string) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        caseId: {
          ...previous.patientIdentification.caseId,
          [field]: value,
        },
      },
    }));
  };

  const updateRuralField = (
    field: keyof typeof patient.rural,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        rural: {
          ...previous.patientIdentification.rural,
          [field]: value,
        },
      },
    }));
  };

  const updateUrbanField = (
    field: keyof typeof patient.urban,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        urban: {
          ...previous.patientIdentification.urban,
          [field]: value,
        },
      },
    }));
  };

  const updateSex = (value: Sex) => {
    updateSectionField("patientIdentification", "sex", value);
  };

  return (
    <section className="measles-patient-section">
      {/* =========================
          SECTION TITLE + CASE ID
         ========================= */}

      <div className="measles-patient-heading-row">
        <h2 className="measles-section-heading">PATIENT IDENTIFICATION</h2>

        <div className="measles-case-id-row">
          <span className="measles-case-id-label">
            CASE ID NUMBER: MSL BAN-
          </span>

          <div className="measles-id-segment">
            <PrintableLineField
              value={patient.caseId.districtCode}
              onChange={(value) => updateCaseId("districtCode", value)}
              ariaLabel="Case district code"
              className="measles-id-input measles-case-id-district"
            />

            <span className="measles-id-caption">District Code</span>
          </div>

          <span className="measles-id-separator">-</span>

          <div className="measles-id-segment">
            <PrintableLineField
              value={patient.caseId.upazilaMunicipalityCode}
              onChange={(value) =>
                updateCaseId("upazilaMunicipalityCode", value)
              }
              ariaLabel="Case Upazila, City Corporation or Municipality code"
              className="measles-id-input measles-case-id-upazila"
            />

            <span className="measles-id-caption">Upz/CC/Mun Code</span>
          </div>

          <span className="measles-id-separator">-</span>

          <div className="measles-id-segment">
            <PrintableLineField
              value={patient.caseId.onsetYear}
              onChange={(value) => updateCaseId("onsetYear", value)}
              ariaLabel="Case onset year"
              className="measles-id-input measles-case-id-year"
            />

            <span className="measles-id-caption">Onset Year</span>
          </div>

          <span className="measles-id-separator">-</span>

          <div className="measles-id-segment">
            <PrintableLineField
              value={patient.caseId.caseNumber}
              onChange={(value) => updateCaseId("caseNumber", value)}
              ariaLabel="Case number"
              className="measles-id-input measles-case-id-number"
            />

            <span className="measles-id-caption">Case #</span>
          </div>
        </div>
      </div>

      {/* =========================
          NAME / GUARDIAN / CONTACT
         ========================= */}

      <div className="measles-patient-row measles-patient-name-row">
        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Patient&apos;s Name:</span>

          <PrintableLineField
            value={patient.patientName}
            onChange={(value) =>
              updateSectionField("patientIdentification", "patientName", value)
            }
            ariaLabel="Patient name"
            className="measles-flex-line-field measles-patient-name-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">
            Father&apos;s/Guardian&apos;s Name:
          </span>

          <PrintableLineField
            value={patient.fatherGuardianName}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "fatherGuardianName",
                value,
              )
            }
            ariaLabel="Father or guardian name"
            className="measles-flex-line-field measles-guardian-name-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Contact Number:</span>

          <PrintableLineField
            value={patient.contactNumber}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "contactNumber",
                value,
              )
            }
            ariaLabel="Contact number"
            className="measles-flex-line-field measles-contact-input"
          />
        </div>
      </div>

      {/* =========================
          DOB / AGE / SEX / RELIGION
         ========================= */}

      <div className="measles-patient-row measles-demographic-row">
        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Date of Birth:</span>

          <PrintableDateField
            value={patient.dateOfBirth}
            onChange={(value) =>
              updateSectionField("patientIdentification", "dateOfBirth", value)
            }
            ariaLabel="Date of birth"
            className="measles-patient-dob"
          />

          <span className="measles-patient-or">OR</span>

          <span className="measles-inline-label">Age:</span>

          <PrintableLineField
            value={patient.age}
            onChange={(value) =>
              updateSectionField("patientIdentification", "age", value)
            }
            ariaLabel="Age"
            className="measles-age-input"
          />
        </div>

        <div className="measles-sex-group">
          <span className="measles-inline-label">Sex:</span>

          <label className="measles-checkbox-wrapper">
            <span className="measles-checkbox-label">M</span>

            <input
              type="radio"
              name="patient-sex"
              checked={patient.sex === "male"}
              className="measles-printable-checkbox-input"
              onChange={() => updateSex("male")}
            />

            <span className="measles-printable-checkbox" aria-hidden="true" />
          </label>

          <label className="measles-checkbox-wrapper">
            <span className="measles-checkbox-label">F</span>

            <input
              type="radio"
              name="patient-sex"
              checked={patient.sex === "female"}
              className="measles-printable-checkbox-input"
              onChange={() => updateSex("female")}
            />

            <span className="measles-printable-checkbox" aria-hidden="true" />
          </label>
        </div>

        <div className="measles-inline-field-group measles-religion-group">
          <span className="measles-inline-label">Religion:</span>

          <PrintableLineField
            value={patient.religion}
            onChange={(value) =>
              updateSectionField("patientIdentification", "religion", value)
            }
            ariaLabel="Religion"
            className="measles-religion-input"
          />
        </div>

        <div className="measles-inline-field-group measles-address-group">
          <span className="measles-inline-label">
            House &amp; Street Address:
          </span>

          <PrintableLineField
            value={patient.houseStreetAddress}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "houseStreetAddress",
                value,
              )
            }
            ariaLabel="House and street address"
            className="measles-flex-line-field measles-house-address-input"
          />
        </div>
      </div>

      {/* =========================
          RURAL
         ========================= */}

      <div className="measles-patient-row measles-location-row">
        <span className="measles-location-prefix">If Rural;</span>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Village:</span>

          <PrintableLineField
            value={patient.rural.village}
            onChange={(value) => updateRuralField("village", value)}
            ariaLabel="Rural village"
            className="measles-location-input measles-village-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Union:</span>

          <PrintableLineField
            value={patient.rural.union}
            onChange={(value) => updateRuralField("union", value)}
            ariaLabel="Rural union"
            className="measles-location-input measles-union-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Upazila:</span>

          <PrintableLineField
            value={patient.rural.upazila}
            onChange={(value) => updateRuralField("upazila", value)}
            ariaLabel="Rural upazila"
            className="measles-location-input measles-upazila-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">District:</span>

          <PrintableLineField
            value={patient.rural.district}
            onChange={(value) => updateRuralField("district", value)}
            ariaLabel="Rural district"
            className="measles-location-input measles-rural-district-input"
          />
        </div>
      </div>

      {/* =========================
          URBAN
         ========================= */}

      <div className="measles-patient-row measles-location-row measles-urban-row">
        <span className="measles-location-prefix">If Urban;</span>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Mahalla:</span>

          <PrintableLineField
            value={patient.urban.mahalla}
            onChange={(value) => updateUrbanField("mahalla", value)}
            ariaLabel="Urban mahalla"
            className="measles-location-input measles-mahalla-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Ward #:</span>

          <PrintableLineField
            value={patient.urban.wardNumber}
            onChange={(value) => updateUrbanField("wardNumber", value)}
            ariaLabel="Urban ward number"
            className="measles-ward-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Zone:</span>

          <PrintableLineField
            value={patient.urban.zone}
            onChange={(value) => updateUrbanField("zone", value)}
            ariaLabel="Urban zone"
            className="measles-zone-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">Municipality/CC:</span>

          <PrintableLineField
            value={patient.urban.municipalityCityCorporation}
            onChange={(value) =>
              updateUrbanField("municipalityCityCorporation", value)
            }
            ariaLabel="Municipality or City Corporation"
            className="measles-municipality-input"
          />
        </div>

        <div className="measles-inline-field-group">
          <span className="measles-inline-label">District:</span>

          <PrintableLineField
            value={patient.urban.district}
            onChange={(value) => updateUrbanField("district", value)}
            ariaLabel="Urban district"
            className="measles-urban-district-input"
          />
        </div>
      </div>
    </section>
  );
}
