import PrintableYesNo from "../fields/PrintableYesNo";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type {
  SpecimenCondition,
  SpecimenConditionItem,
  YesNo,
} from "../types/measlesForm.types";

import "../styles/specimen-condition.css";

type SpecimenKey = keyof SpecimenCondition;

type ConditionField = keyof SpecimenConditionItem;

export default function SpecimenConditionSection() {
  const { formData, setFormData } = useMeaslesForm();

  const specimenCondition = formData.specimenCondition;

  const updateCondition = (
    specimen: SpecimenKey,
    field: ConditionField,
    value: YesNo,
  ) => {
    setFormData((previous) => ({
      ...previous,

      specimenCondition: {
        ...previous.specimenCondition,

        [specimen]: {
          ...previous.specimenCondition[specimen],

          [field]: value,
        },
      },
    }));
  };

  const renderYesNo = (specimen: SpecimenKey, field: ConditionField) => {
    const item = specimenCondition[specimen];

    return (
      <PrintableYesNo
        name={`specimen-condition-${specimen}-${field}`}
        value={item[field]}
        onChange={(value) => updateCondition(specimen, field, value as YesNo)}
      />
    );
  };

  return (
    <section className="measles-specimen-condition-section">
      {/* =====================================================
          FOR LABORATORY USE ONLY
         ===================================================== */}

      <div className="measles-laboratory-use-heading">
        FOR LABORATORY USE ONLY
      </div>

      {/* =====================================================
          SECTION HEADING
         ===================================================== */}

      <h2 className="measles-section-heading measles-specimen-condition-heading">
        SPECIMEN CONDITION
      </h2>

      {/* =====================================================
          TABLE
         ===================================================== */}

      <table className="measles-specimen-condition-table">
        <thead>
          <tr>
            <th className="measles-specimen-condition-name-column">Specimen</th>

            <th>Cold?</th>

            <th>
              <span className="measles-specimen-condition-two-line-header">
                Sufficient
                <br />
                Quantity?
              </span>
            </th>

            <th>Leakage?</th>

            <th>Turbid?</th>

            <th>Desiccated?</th>
          </tr>
        </thead>

        <tbody>
          {/* =================================================
              SERUM
             ================================================= */}

          <tr>
            <td className="measles-specimen-condition-name-cell">Serum</td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("serum", "cold")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("serum", "sufficientQuantity")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("serum", "leakage")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("serum", "turbid")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("serum", "desiccated")}
            </td>
          </tr>

          {/* =================================================
              DBS

              PDF shows only Sufficient Quantity as active.
              Other cells remain unavailable / shaded.
             ================================================= */}

          <tr>
            <td className="measles-specimen-condition-name-cell">DBS</td>

            <td
              className="measles-specimen-condition-na-cell"
              aria-label="Not applicable"
            />

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("dbs", "sufficientQuantity")}
            </td>

            <td
              className="measles-specimen-condition-na-cell"
              aria-label="Not applicable"
            />

            <td
              className="measles-specimen-condition-na-cell"
              aria-label="Not applicable"
            />

            <td
              className="measles-specimen-condition-na-cell"
              aria-label="Not applicable"
            />
          </tr>

          {/* =================================================
              URINE
             ================================================= */}

          <tr>
            <td className="measles-specimen-condition-name-cell">Urine</td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("urine", "cold")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("urine", "sufficientQuantity")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("urine", "leakage")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("urine", "turbid")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("urine", "desiccated")}
            </td>
          </tr>

          {/* =================================================
              NASOPHARYNGEAL SWAB
             ================================================= */}

          <tr>
            <td className="measles-specimen-condition-name-cell">
              Nasopharyngeal swab
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("nasopharyngealSwab", "cold")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("nasopharyngealSwab", "sufficientQuantity")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("nasopharyngealSwab", "leakage")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("nasopharyngealSwab", "turbid")}
            </td>

            <td className="measles-specimen-condition-answer-cell">
              {renderYesNo("nasopharyngealSwab", "desiccated")}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
