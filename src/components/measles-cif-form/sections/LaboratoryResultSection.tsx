import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type {
  LaboratoryIgMResult,
  LaboratoryResultStatus,
  VirusIsolationResult,
  VirusIsolationTest,
} from "../types/measlesForm.types";

import "../styles/laboratory-result.css";

/* =========================================================
   TYPE HELPERS
   ========================================================= */

type IgMKey =
  | "serumIgmMeasles"
  | "serumIgmRubella"
  | "dbsIgmMeasles"
  | "dbsIgmRubella";

type VirusGroupKey = "measlesVirusIsolation" | "rubellaVirusIsolation";

type VirusTestKey = "urine" | "nasopharyngealSwab" | "oralFluid";

/* =========================================================
   RESULT OPTIONS
   ========================================================= */

const igmOptions: {
  value: Exclude<LaboratoryResultStatus, "">;
  label: string;
}[] = [
  {
    value: "positive",
    label: "Positive",
  },
  {
    value: "negative",
    label: "Negative",
  },
  {
    value: "equivocal",
    label: "Equivocal",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "not-tested",
    label: "Not tested",
  },
];

const virusOptions: {
  value: Exclude<VirusIsolationResult, "">;
  label: string;
}[] = [
  {
    value: "positive",
    label: "Positive",
  },
  {
    value: "negative",
    label: "Negative",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "not-tested",
    label: "Not tested",
  },
];

export default function LaboratoryResultSection() {
  const { formData, setFormData, updateSectionField } = useMeaslesForm();

  const laboratory = formData.laboratoryResult;

  /* =========================================================
     UPDATE IgM RESULT
     ========================================================= */

  const updateIgMResult = (key: IgMKey, value: LaboratoryResultStatus) => {
    setFormData((previous) => ({
      ...previous,

      laboratoryResult: {
        ...previous.laboratoryResult,

        [key]: {
          ...previous.laboratoryResult[key],

          result: value,
        },
      },
    }));
  };

  /* =========================================================
     UPDATE IgM DATE
     ========================================================= */

  const updateIgMDate = (
    key: IgMKey,
    value: LaboratoryIgMResult["dateOfResult"],
  ) => {
    setFormData((previous) => ({
      ...previous,

      laboratoryResult: {
        ...previous.laboratoryResult,

        [key]: {
          ...previous.laboratoryResult[key],

          dateOfResult: value,
        },
      },
    }));
  };

  /* =========================================================
     UPDATE VIRUS ISOLATION RESULT
     ========================================================= */

  const updateVirusResult = (
    group: VirusGroupKey,
    test: VirusTestKey,
    value: VirusIsolationResult,
  ) => {
    setFormData((previous) => ({
      ...previous,

      laboratoryResult: {
        ...previous.laboratoryResult,

        [group]: {
          ...previous.laboratoryResult[group],

          [test]: {
            ...previous.laboratoryResult[group][test],

            result: value,
          },
        },
      },
    }));
  };

  /* =========================================================
     UPDATE VIRUS ISOLATION DATE
     ========================================================= */

  const updateVirusDate = (
    group: VirusGroupKey,
    test: VirusTestKey,
    value: VirusIsolationTest["dateOfResult"],
  ) => {
    setFormData((previous) => ({
      ...previous,

      laboratoryResult: {
        ...previous.laboratoryResult,

        [group]: {
          ...previous.laboratoryResult[group],

          [test]: {
            ...previous.laboratoryResult[group][test],

            dateOfResult: value,
          },
        },
      },
    }));
  };

  /* =========================================================
     UPDATE GENOTYPE
     ========================================================= */

  const updateGenotype = (group: VirusGroupKey, value: string) => {
    setFormData((previous) => ({
      ...previous,

      laboratoryResult: {
        ...previous.laboratoryResult,

        [group]: {
          ...previous.laboratoryResult[group],

          genotype: value,
        },
      },
    }));
  };

  /* =========================================================
     IgM RESULT OPTIONS
     ========================================================= */

  const renderIgMOptions = (
    name: string,
    value: LaboratoryResultStatus,
    onChange: (value: LaboratoryResultStatus) => void,
  ) => {
    return (
      <div className="measles-lab-result-options">
        {igmOptions.map((option) => (
          <label key={option.value} className="measles-lab-result-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="measles-lab-result-radio"
            />

            <span className="measles-lab-result-box" />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    );
  };

  /* =========================================================
     VIRUS ISOLATION RESULT OPTIONS
     ========================================================= */

  const renderVirusOptions = (
    name: string,
    value: VirusIsolationResult,
    onChange: (value: VirusIsolationResult) => void,
  ) => {
    return (
      <div className="measles-lab-result-options measles-lab-virus-options">
        {virusOptions.map((option) => (
          <label key={option.value} className="measles-lab-result-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="measles-lab-result-radio"
            />

            <span className="measles-lab-result-box" />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    );
  };

  /* =========================================================
     IgM TABLE ROW
     ========================================================= */

  const renderIgMRow = (key: IgMKey, label: string) => {
    const item = laboratory[key];

    return (
      <tr key={key}>
        <td className="measles-lab-specimen-cell">{label}</td>

        <td className="measles-lab-result-cell">
          {renderIgMOptions(`laboratory-${key}`, item.result, (value) =>
            updateIgMResult(key, value),
          )}
        </td>

        <td className="measles-lab-date-cell">
          <PrintableDateField
            value={item.dateOfResult}
            onChange={(value) => updateIgMDate(key, value)}
            ariaLabel={`${label} date of result`}
            className="measles-lab-date-input"
          />
        </td>
      </tr>
    );
  };

  /* =========================================================
     VIRUS ISOLATION TABLE ROW
     ========================================================= */

  const renderVirusRow = (
    group: VirusGroupKey,
    test: VirusTestKey,
    label: string,
  ) => {
    const item = laboratory[group][test];

    return (
      <tr key={`${group}-${test}`}>
        <td className="measles-lab-specimen-cell">{label}</td>

        <td className="measles-lab-result-cell">
          {renderVirusOptions(
            `laboratory-${group}-${test}`,
            item.result,
            (value) => updateVirusResult(group, test, value),
          )}
        </td>

        <td className="measles-lab-date-cell">
          <PrintableDateField
            value={item.dateOfResult}
            onChange={(value) => updateVirusDate(group, test, value)}
            ariaLabel={`${label} date of result`}
            className="measles-lab-date-input"
          />
        </td>
      </tr>
    );
  };

  return (
    <section className="measles-laboratory-result-section">
      {/* =====================================================
          SECTION HEADING
         ===================================================== */}

      <h2 className="measles-section-heading measles-laboratory-result-heading">
        LABORATORY RESULT
      </h2>

      {/* =====================================================
          LABORATORY RESULT TABLE
         ===================================================== */}

      <table className="measles-laboratory-result-table">
        <thead>
          <tr>
            <th className="measles-lab-specimen-header">Specimen</th>

            <th className="measles-lab-result-header">Test Result</th>

            <th className="measles-lab-date-header">Date of Result</th>
          </tr>
        </thead>

        <tbody>
          {/* =================================================
              SERUM / DBS IgM
             ================================================= */}

          {renderIgMRow("serumIgmMeasles", "Serum (IgM) for Measles")}

          {renderIgMRow("serumIgmRubella", "Serum (IgM) for Rubella")}

          {renderIgMRow("dbsIgmMeasles", "DBS (IgM) for Measles")}

          {renderIgMRow("dbsIgmRubella", "DBS (IgM) for Rubella")}

          {/* =================================================
              MEASLES VIRUS ISOLATION HEADING
             ================================================= */}

          <tr>
            <th colSpan={3} className="measles-lab-isolation-heading">
              Measles Virus Isolation
            </th>
          </tr>

          {/* =================================================
              MEASLES VIRUS ISOLATION RESULTS
             ================================================= */}

          {renderVirusRow("measlesVirusIsolation", "urine", "Urine")}

          {renderVirusRow(
            "measlesVirusIsolation",
            "nasopharyngealSwab",
            "Nasopharyngeal swab",
          )}

          {renderVirusRow("measlesVirusIsolation", "oralFluid", "Oral Fluid")}

          {/* =================================================
              GENOTYPE OF MEASLES VIRUS
             ================================================= */}

          <tr>
            <td colSpan={2} className="measles-lab-genotype-cell">
              <div className="measles-lab-genotype-group">
                <span>Genotype of Measles Virus:</span>

                <PrintableLineField
                  value={laboratory.measlesVirusIsolation.genotype}
                  onChange={(value) =>
                    updateGenotype("measlesVirusIsolation", value)
                  }
                  ariaLabel="Genotype of Measles Virus"
                  className="measles-lab-genotype-input"
                />
              </div>
            </td>

            <td className="measles-lab-empty-date-cell" />
          </tr>

          {/* =================================================
              RUBELLA VIRUS ISOLATION HEADING
             ================================================= */}

          <tr>
            <th colSpan={3} className="measles-lab-isolation-heading">
              Rubella Virus Isolation
            </th>
          </tr>

          {/* =================================================
              RUBELLA VIRUS ISOLATION RESULTS
             ================================================= */}

          {renderVirusRow("rubellaVirusIsolation", "urine", "Urine")}

          {renderVirusRow(
            "rubellaVirusIsolation",
            "nasopharyngealSwab",
            "Nasopharyngeal swab",
          )}

          {renderVirusRow("rubellaVirusIsolation", "oralFluid", "Oral Fluid")}

          {/* =================================================
              GENOTYPE OF RUBELLA VIRUS
             ================================================= */}

          <tr>
            <td colSpan={2} className="measles-lab-genotype-cell">
              <div className="measles-lab-genotype-group">
                <span>Genotype of Rubella Virus:</span>

                <PrintableLineField
                  value={laboratory.rubellaVirusIsolation.genotype}
                  onChange={(value) =>
                    updateGenotype("rubellaVirusIsolation", value)
                  }
                  ariaLabel="Genotype of Rubella Virus"
                  className="measles-lab-genotype-input"
                />
              </div>
            </td>

            <td className="measles-lab-empty-date-cell" />
          </tr>
        </tbody>
      </table>

      {/* =====================================================
          PERSON DELIVERING SPECIMEN
         ===================================================== */}

      <div className="measles-lab-person-row">
        <div className="measles-lab-person-name">
          <span>Name of person delivering specimen:</span>

          <PrintableLineField
            value={laboratory.deliveringPersonName}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "deliveringPersonName",
                value,
              )
            }
            ariaLabel="Name of person delivering specimen"
          />
        </div>

        <div className="measles-lab-person-field">
          <span>Designation:</span>

          <PrintableLineField
            value={laboratory.deliveringPersonDesignation}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "deliveringPersonDesignation",
                value,
              )
            }
            ariaLabel="Designation of person delivering specimen"
          />
        </div>

        <div className="measles-lab-person-field">
          <span>Signature:</span>

          <PrintableLineField
            value={laboratory.deliveringPersonSignature}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "deliveringPersonSignature",
                value,
              )
            }
            ariaLabel="Signature of person delivering specimen"
          />
        </div>

        <div className="measles-lab-person-date">
          <span>Date:</span>

          <PrintableDateField
            value={laboratory.deliveringDate}
            onChange={(value) =>
              updateSectionField("laboratoryResult", "deliveringDate", value)
            }
            ariaLabel="Date specimen delivered"
          />
        </div>
      </div>

      {/* =====================================================
          PERSON RECEIVING SPECIMEN
         ===================================================== */}

      <div className="measles-lab-person-row">
        <div className="measles-lab-person-name">
          <span>Name of person receiving specimen:</span>

          <PrintableLineField
            value={laboratory.receivingPersonName}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "receivingPersonName",
                value,
              )
            }
            ariaLabel="Name of person receiving specimen"
          />
        </div>

        <div className="measles-lab-person-field">
          <span>Designation:</span>

          <PrintableLineField
            value={laboratory.receivingPersonDesignation}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "receivingPersonDesignation",
                value,
              )
            }
            ariaLabel="Designation of person receiving specimen"
          />
        </div>

        <div className="measles-lab-person-field">
          <span>Signature:</span>

          <PrintableLineField
            value={laboratory.receivingPersonSignature}
            onChange={(value) =>
              updateSectionField(
                "laboratoryResult",
                "receivingPersonSignature",
                value,
              )
            }
            ariaLabel="Signature of person receiving specimen"
          />
        </div>

        <div className="measles-lab-person-date">
          <span>Date:</span>

          <PrintableDateField
            value={laboratory.receivingDate}
            onChange={(value) =>
              updateSectionField("laboratoryResult", "receivingDate", value)
            }
            ariaLabel="Date specimen received"
          />
        </div>
      </div>
    </section>
  );
}
