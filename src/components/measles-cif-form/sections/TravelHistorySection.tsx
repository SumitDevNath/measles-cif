import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";
import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { YesNoUnknown } from "../types/measlesForm.types";

import "../styles/travel-history.css";

export default function TravelHistorySection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const travel = formData.travelHistory;

  return (
    <section className="measles-travel-section">
      <h2 className="measles-section-heading measles-travel-heading">
        TRAVEL HISTORY
      </h2>

      <div className="measles-travel-flow">
        <span>
          Did the case travel outside his/her village/ mahalla during the 30
          days before or within 7 days after rash onset OR any person visited
          the house/village/community of the case under investigation from an
          area/community of recent measles/rubella transmission during 30 days
          prior to rash onset?
        </span>

        <PrintableYesNo
          name="travel-history-response"
          value={travel.traveledOrReceivedVisitor}
          includeUnknown
          yesLabel="YES"
          noLabel="NO"
          unknownLabel="Unknown"
          onChange={(value) =>
            updateSectionField(
              "travelHistory",
              "traveledOrReceivedVisitor",
              value as YesNoUnknown,
            )
          }
        />

        <span className="measles-travel-bold-label">
          If YES, period of travel:
        </span>

        <PrintableDateField
          value={travel.travelStartDate}
          onChange={(value) =>
            updateSectionField("travelHistory", "travelStartDate", value)
          }
          ariaLabel="Travel start date"
          className="measles-travel-date-input"
        />

        <span>to</span>

        <PrintableDateField
          value={travel.travelEndDate}
          onChange={(value) =>
            updateSectionField("travelHistory", "travelEndDate", value)
          }
          ariaLabel="Travel end date"
          className="measles-travel-date-input"
        />

        <span>Place to/from travel:</span>

        <PrintableLineField
          value={travel.placeToFromTravel}
          onChange={(value) =>
            updateSectionField("travelHistory", "placeToFromTravel", value)
          }
          ariaLabel="Place to or from travel"
          className="measles-travel-place-input"
        />

        <span>House and Street Address:</span>

        <PrintableLineField
          value={travel.houseStreetAddress}
          onChange={(value) =>
            updateSectionField("travelHistory", "houseStreetAddress", value)
          }
          ariaLabel="Travel house and street address"
          className="measles-travel-street-input"
        />

        <span>Village/Mahalla:</span>

        <PrintableLineField
          value={travel.villageMahalla}
          onChange={(value) =>
            updateSectionField("travelHistory", "villageMahalla", value)
          }
          ariaLabel="Travel village or mahalla"
          className="measles-travel-village-input"
        />

        <span>Union/Ward:</span>

        <PrintableLineField
          value={travel.unionWard}
          onChange={(value) =>
            updateSectionField("travelHistory", "unionWard", value)
          }
          ariaLabel="Travel union or ward"
          className="measles-travel-union-input"
        />

        <span>Upazila/Muni/CC:</span>

        <PrintableLineField
          value={travel.upazilaMunicipalityCityCorporation}
          onChange={(value) =>
            updateSectionField(
              "travelHistory",
              "upazilaMunicipalityCityCorporation",
              value,
            )
          }
          ariaLabel="Travel Upazila Municipality or City Corporation"
          className="measles-travel-upazila-input"
        />

        <span>District:</span>

        <PrintableLineField
          value={travel.district}
          onChange={(value) =>
            updateSectionField("travelHistory", "district", value)
          }
          ariaLabel="Travel district"
          className="measles-travel-district-input"
        />
      </div>
    </section>
  );
}
