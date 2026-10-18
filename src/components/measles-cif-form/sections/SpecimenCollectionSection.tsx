import PrintableDateField from "../fields/PrintableDateField";
import PrintableLineField from "../fields/PrintableLineField";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import type { SpecimenCollectionRow } from "../types/measlesForm.types";

import "../styles/specimen-collection.css";

export default function SpecimenCollectionSection() {
  const { formData, setFormData, updateSectionField } = useMeaslesForm();

  const specimenCollection = formData.specimenCollection;

  const updateSpecimenRow = (
    index: number,
    field: keyof Omit<SpecimenCollectionRow, "specimen">,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,

      specimenCollection: {
        ...previous.specimenCollection,

        rows: previous.specimenCollection.rows.map((row, rowIndex) =>
          rowIndex === index
            ? {
                ...row,
                [field]: value,
              }
            : row,
        ),
      },
    }));
  };

  const getSpecimenLabel = (specimen: SpecimenCollectionRow["specimen"]) => {
    switch (specimen) {
      case "serum":
        return (
          <>
            Serum{" "}
            <span className="measles-specimen-note">
              (between 3-28 days of rash onset)
            </span>
          </>
        );

      case "dbs":
        return (
          <>
            DBS{" "}
            <span className="measles-specimen-note">
              (between 3-28 days of rash onset)
            </span>
          </>
        );

      case "urine":
        return (
          <>
            Urine{" "}
            <span className="measles-specimen-note">
              (within 5 days of rash onset)
            </span>
          </>
        );

      case "nasopharyngeal-swab":
        return (
          <>
            Nasopharyngeal swab{" "}
            <span className="measles-specimen-note">
              (within 7 days of rash onset)
            </span>
          </>
        );
    }
  };

  return (
    <section className="measles-specimen-section">
      {/* =====================================================
          HEADING ROW
         ===================================================== */}

      <div className="measles-specimen-heading-row">
        <h2 className="measles-section-heading measles-specimen-heading">
          SPECIMEN COLLECTION
        </h2>

        <div className="measles-specimen-npml-box">
          To be completed at NPML, IPH, Dhaka
        </div>
      </div>

      {/* =====================================================
          SPECIMEN TABLE
         ===================================================== */}

      <table className="measles-specimen-table">
        <thead>
          <tr>
            <th className="measles-specimen-type-column">Specimen</th>

            <th className="measles-specimen-date-column">Date collected</th>

            <th className="measles-specimen-date-column">Date sent to NPML</th>

            <th className="measles-specimen-date-column">
              Date Received at NPML
            </th>

            <th className="measles-specimen-code-column">Specimen Code</th>
          </tr>
        </thead>

        <tbody>
          {specimenCollection.rows.map((row, index) => (
            <tr key={row.specimen}>
              {/* SPECIMEN TYPE */}

              <td className="measles-specimen-name-cell">
                {getSpecimenLabel(row.specimen)}
              </td>

              {/* DATE COLLECTED */}

              <td className="measles-specimen-date-cell">
                <PrintableDateField
                  value={row.dateCollected}
                  onChange={(value) =>
                    updateSpecimenRow(index, "dateCollected", value)
                  }
                  ariaLabel={`${row.specimen} date collected`}
                  className="measles-specimen-date-input"
                />
              </td>

              {/* DATE SENT */}

              <td className="measles-specimen-date-cell">
                <PrintableDateField
                  value={row.dateSentToNpml}
                  onChange={(value) =>
                    updateSpecimenRow(index, "dateSentToNpml", value)
                  }
                  ariaLabel={`${row.specimen} date sent to NPML`}
                  className="measles-specimen-date-input"
                />
              </td>

              {/* DATE RECEIVED */}

              <td className="measles-specimen-date-cell">
                <PrintableDateField
                  value={row.dateReceivedAtNpml}
                  onChange={(value) =>
                    updateSpecimenRow(index, "dateReceivedAtNpml", value)
                  }
                  ariaLabel={`${row.specimen} date received at NPML`}
                  className="measles-specimen-date-input"
                />
              </td>

              {/* SPECIMEN CODE */}

              <td className="measles-specimen-code-cell">
                <PrintableLineField
                  value={row.specimenCode}
                  onChange={(value) =>
                    updateSpecimenRow(index, "specimenCode", value)
                  }
                  ariaLabel={`${row.specimen} specimen code`}
                  className="measles-specimen-code-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* =====================================================
          MT-LAB ROW
         ===================================================== */}
      {/*
      <div className="measles-specimen-lab-row">
        {/* <span className="measles-specimen-send-note">
          (after collecting specimen(s), send this form and specimen(s) to HSO)
        </span>

        <div className="measles-specimen-lab-signature">
          <span>Signature of MT-Lab:</span>

          <PrintableLineField
            value={specimenCollection.mtLabSignature}
            onChange={(value) =>
              updateSectionField("specimenCollection", "mtLabSignature", value)
            }
            ariaLabel="Signature of MT-Lab"
            className="measles-specimen-signature-input"
          />

          <span>Date:</span>

          <PrintableDateField
            value={specimenCollection.mtLabSignatureDate}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "mtLabSignatureDate",
                value,
              )
            }
            ariaLabel="MT-Lab signature date"
            className="measles-specimen-small-date-input"
          />
        </div>
      </div>*/}
      {/* =====================================================
          CASE INVESTIGATED BY
         ===================================================== */}

      <div className="measles-specimen-officer-row mt-3">
        <div className="measles-specimen-officer-field measles-specimen-officer-name">
          <span>Case Investigated by:</span>

          <PrintableLineField
            value={specimenCollection.caseInvestigatedBy}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "caseInvestigatedBy",
                value,
              )
            }
            ariaLabel="Case investigated by"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-designation">
          <span>Designation:</span>

          <PrintableLineField
            value={specimenCollection.investigatorDesignation}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "investigatorDesignation",
                value,
              )
            }
            ariaLabel="Investigator designation"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-signature">
          <span>Signature:</span>

          <PrintableLineField
            value={specimenCollection.investigatorSignature}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "investigatorSignature",
                value,
              )
            }
            ariaLabel="Investigator signature"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-date">
          <span>Date:</span>

          <PrintableDateField
            value={specimenCollection.investigatorDate}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "investigatorDate",
                value,
              )
            }
            ariaLabel="Investigation date"
          />
        </div>
      </div>

      {/* =====================================================
          REPORT SENT BY
         ===================================================== */}

      <div className="measles-specimen-officer-row">
        <div className="measles-specimen-officer-field measles-specimen-officer-name">
          <span>Report sent by:</span>

          <PrintableLineField
            value={specimenCollection.reportSentBy}
            onChange={(value) =>
              updateSectionField("specimenCollection", "reportSentBy", value)
            }
            ariaLabel="Report sent by"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-designation">
          <span>Designation:</span>

          <PrintableLineField
            value={specimenCollection.reportSenderDesignation}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "reportSenderDesignation",
                value,
              )
            }
            ariaLabel="Report sender designation"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-signature">
          <span>Signature:</span>

          <PrintableLineField
            value={specimenCollection.reportSenderSignature}
            onChange={(value) =>
              updateSectionField(
                "specimenCollection",
                "reportSenderSignature",
                value,
              )
            }
            ariaLabel="Report sender signature"
          />
        </div>

        <div className="measles-specimen-officer-field measles-specimen-officer-date">
          <span>Date:</span>

          <PrintableDateField
            value={specimenCollection.reportSentDate}
            onChange={(value) =>
              updateSectionField("specimenCollection", "reportSentDate", value)
            }
            ariaLabel="Report sent date"
          />
        </div>
      </div>
    </section>
  );
}
