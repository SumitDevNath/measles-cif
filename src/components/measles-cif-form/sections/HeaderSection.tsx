import epiLogo from "../../../assets/epi-logo.png";

import PrintableLineField from "../fields/PrintableLineField";
import { useMeaslesForm } from "../context/MeaslesFormContext";

import "../styles/header-section.css";

export default function HeaderSection() {
  const { formData, setFormData } = useMeaslesForm();

  const { outbreakId } = formData.backgroundInformation;

  const updateOutbreakId = (field: keyof typeof outbreakId, value: string) => {
    setFormData((previous) => ({
      ...previous,
      backgroundInformation: {
        ...previous.backgroundInformation,
        outbreakId: {
          ...previous.backgroundInformation.outbreakId,
          [field]: value,
        },
      },
    }));
  };

  return (
    <header className="measles-header">
      <div className="measles-header-top">
        <div className="measles-header-logo-column">
          <img
            src={epiLogo}
            alt="Expanded Programme on Immunization"
            className="measles-header-logo"
          />
        </div>

        <div className="measles-header-title-column">
          <div className="measles-programme-title">
            EXPANDED PROGRAMME ON IMMUNIZATION
          </div>

          <h1 className="measles-form-title">
            SUSPECTED MEASLES CASE INVESTIGATION FORM
          </h1>

          <div className="measles-form-instruction">
            (Please complete every item and use dates according to the English
            system)
          </div>

          <div className="measles-outbreak-row">
            <span className="measles-outbreak-label">
              OUTBREAK ID: MSL BAN-
            </span>

            <div className="measles-id-segment">
              <PrintableLineField
                value={outbreakId.districtCode}
                onChange={(value) => updateOutbreakId("districtCode", value)}
                ariaLabel="Outbreak district code"
                className="measles-id-input measles-id-district"
              />

              <span className="measles-id-caption">District Code</span>
            </div>

            <span className="measles-id-separator">-</span>

            <div className="measles-id-segment">
              <PrintableLineField
                value={outbreakId.upazilaMunicipalityCode}
                onChange={(value) =>
                  updateOutbreakId("upazilaMunicipalityCode", value)
                }
                ariaLabel="Outbreak Upazila, City Corporation or Municipality code"
                className="measles-id-input measles-id-upazila"
              />

              <span className="measles-id-caption">Upz/CC/Mun Code</span>
            </div>

            <span className="measles-id-separator">-</span>

            <div className="measles-id-segment">
              <PrintableLineField
                value={outbreakId.onsetYear}
                onChange={(value) => updateOutbreakId("onsetYear", value)}
                ariaLabel="Outbreak onset year"
                className="measles-id-input measles-id-year"
              />

              <span className="measles-id-caption">Onset Year</span>
            </div>

            <span className="measles-id-separator">-</span>

            <div className="measles-id-segment">
              <PrintableLineField
                value={outbreakId.outbreakNumber}
                onChange={(value) => updateOutbreakId("outbreakNumber", value)}
                ariaLabel="Outbreak number"
                className="measles-id-input measles-id-number"
              />

              <span className="measles-id-caption">Outbreak #</span>
            </div>
          </div>
        </div>
        <div className="measles-header-balance-column" aria-hidden="true" />
      </div>
    </header>
  );
}
