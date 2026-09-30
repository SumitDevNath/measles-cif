import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";
import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { FollowUpInformation, YesNo } from "../types/measlesForm.types";

import "../styles/follow-up-information.css";

/* =========================================================
   TYPE HELPERS
   ========================================================= */

type ComplicationKey = keyof FollowUpInformation["complications"];

type Outcome = FollowUpInformation["outcome"];

/* =========================================================
   COMPLICATION OPTIONS
   ========================================================= */

const complicationOptions: {
  key: ComplicationKey;
  label: string;
}[] = [
  {
    key: "ari",
    label: "ARI",
  },
  {
    key: "diarrhoea",
    label: "Diarrhoea",
  },
  {
    key: "otitisMedia",
    label: "Otitis media",
  },
  {
    key: "malnutrition",
    label: "Malnutrition",
  },
  {
    key: "encephalitis",
    label: "Encephalitis",
  },
];

export default function FollowUpInformationSection() {
  const { formData, setFormData, updateSectionField } = useMeaslesForm();

  const followUp = formData.followUpInformation;

  /* =========================================================
     UPDATE FOLLOW-UP YES / NO
     ========================================================= */

  const updateFollowedUp = (value: YesNo) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        followedUpThirtyDaysAfterRashOnset: value,
      },
    }));
  };

  /* =========================================================
     UPDATE FOLLOW-UP DATE
     ========================================================= */

  const updateFollowUpDate = (value: string) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        followUpDate: value,
      },
    }));
  };

  /* =========================================================
     UPDATE COMPLICATION YES / NO
     ========================================================= */

  const updateHasComplication = (value: YesNo) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        hasComplicationFromMeasles: value,
      },
    }));
  };

  /* =========================================================
     UPDATE INDIVIDUAL COMPLICATION
     ========================================================= */

  const updateComplication = (key: ComplicationKey, checked: boolean) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        complications: {
          ...previous.followUpInformation.complications,

          [key]: checked,
        },
      },
    }));
  };

  /* =========================================================
     UPDATE OTHER COMPLICATION DETAILS
     ========================================================= */

  const updateOtherComplicationDetails = (value: string) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        otherComplicationDetails: value,
      },
    }));
  };

  /* =========================================================
     UPDATE OUTCOME
     ========================================================= */

  const updateOutcome = (value: Exclude<Outcome, "">) => {
    setFormData((previous) => ({
      ...previous,

      followUpInformation: {
        ...previous.followUpInformation,

        outcome: previous.followUpInformation.outcome === value ? "" : value,
      },
    }));
  };

  return (
    <section className="measles-follow-up-section">
      {/* =====================================================
          ADDITIONAL COMMENTS
         ===================================================== */}

      <div className="measles-additional-comments-block">
        <span className="measles-follow-up-bold-label">
          ADDITIONAL COMMENTS (if any):
        </span>

        <textarea
          value={formData.additionalComments}
          onChange={(event) =>
            setFormData((previous) => ({
              ...previous,
              additionalComments: event.target.value,
            }))
          }
          aria-label="Additional comments"
          className="measles-additional-comments-input"
        />
      </div>

      {/* =====================================================
          FOLLOW UP INFORMATION HEADING
         ===================================================== */}

      <h2 className="measles-section-heading measles-follow-up-heading">
        FOLLOW UP INFORMATION:
      </h2>

      {/* =====================================================
          QUESTION 1
         ===================================================== */}

      <div className="measles-follow-up-row">
        <span className="measles-follow-up-question">
          1. Did the case Followed-up 30 days after rash onset?
        </span>

        <PrintableYesNo
          name="followed-up-thirty-days"
          value={followUp.followedUpThirtyDaysAfterRashOnset}
          onChange={(value) => updateFollowedUp(value as YesNo)}
        />

        <span className="measles-follow-up-if-yes">
          <span
            className="measles-follow-up-if-yes-emphasis"
            style={{ textDecoration: "none" }}
          >
            IF YES,
          </span>

          <span className="measles-follow-up-date-label">
            Date of follow-up:
          </span>
        </span>

        <PrintableDateField
          value={followUp.followUpDate}
          onChange={updateFollowUpDate}
          ariaLabel="Date of follow-up"
          className="measles-follow-up-date-input"
        />
      </div>

      {/* =====================================================
          QUESTION 2
         ===================================================== */}

      <div className="measles-follow-up-row">
        <span className="measles-follow-up-question">
          2. Is or was there any complicacy as a result of Measles infection?
        </span>

        <PrintableYesNo
          name="measles-complication"
          value={followUp.hasComplicationFromMeasles}
          onChange={(value) => updateHasComplication(value as YesNo)}
        />
      </div>

      {/* =====================================================
          QUESTION 3
         ===================================================== */}

      <div className="measles-follow-up-complication-row">
        <span className="measles-follow-up-question">
          3. <span className="measles-follow-up-if-yes-emphasis">If YES,</span>{" "}
          <span className="measles-follow-up-normal-text">
            what (mark all that apply)?
          </span>
        </span>

        <div className="measles-follow-up-complication-options">
          {complicationOptions.map((option) => (
            <label
              key={option.key}
              className="measles-follow-up-checkbox-option"
            >
              <input
                type="checkbox"
                checked={followUp.complications[option.key]}
                onChange={(event) =>
                  updateComplication(option.key, event.target.checked)
                }
                className="measles-follow-up-checkbox-input"
              />

              <span className="measles-follow-up-checkbox-box" />

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* =====================================================
          OTHERS
         ===================================================== */}

      <div className="measles-follow-up-others-row">
        <label className="measles-follow-up-checkbox-option">
          <input
            type="checkbox"
            checked={followUp.complications.others}
            onChange={(event) =>
              updateComplication("others", event.target.checked)
            }
            className="measles-follow-up-checkbox-input"
          />

          <span className="measles-follow-up-checkbox-box" />

          <span>Others (specify):</span>
        </label>

        <PrintableLineField
          value={followUp.otherComplicationDetails}
          onChange={updateOtherComplicationDetails}
          ariaLabel="Other complication details"
          className="measles-follow-up-other-details-input"
        />
      </div>

      {/* =====================================================
          QUESTION 4 — OUTCOME
         ===================================================== */}

      <div className="measles-follow-up-outcome-row">
        <span className="measles-follow-up-question">
          4.{" "}
          <span className="measles-follow-up-outcome-label">
            Outcome of the case:
          </span>
        </span>

        <label className="measles-follow-up-checkbox-option">
          <input
            type="radio"
            name="case-outcome"
            checked={followUp.outcome === "alive"}
            onChange={() => updateOutcome("alive")}
            className="measles-follow-up-checkbox-input"
          />

          <span className="measles-follow-up-checkbox-box" />

          <span>Alive</span>
        </label>

        <label className="measles-follow-up-checkbox-option">
          <input
            type="radio"
            name="case-outcome"
            checked={followUp.outcome === "died"}
            onChange={() => updateOutcome("died")}
            className="measles-follow-up-checkbox-input"
          />

          <span className="measles-follow-up-checkbox-box" />

          <span>Died</span>
        </label>
      </div>
    </section>
  );
}
