import PrintableDateField from "../fields/PrintableDateField";
import PrintableTextField from "../fields/PrintableTextField";

import { useMeaslesForm } from "../context/MeaslesFormContext";

import "../styles/vaccination-history.css";

export default function VaccinationHistorySection() {
  const { formData, setFormData } = useMeaslesForm();

  const vaccinationHistory = formData.vaccinationHistory;

  const updateVaccinationRow = (
    index: number,
    field: "routineByCard" | "routineByHistory" | "sia" | "lastDoseDate",
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      vaccinationHistory: previous.vaccinationHistory.map((row, rowIndex) =>
        rowIndex === index
          ? {
              ...row,
              [field]: value,
            }
          : row,
      ),
    }));
  };

  return (
    <section className="measles-vaccination-section">
      <h2 className="measles-section-heading measles-vaccination-heading">
        VACCINATION HISTORY
      </h2>

      <table className="measles-vaccination-table">
        <thead>
          <tr>
            <th
              style={{ textAlign: "start" }}
              rowSpan={3}
              className="measles-vaccination-vaccine-header"
            >
              Type of Vaccine
            </th>

            <th colSpan={3} className="measles-vaccination-doses-header">
              Number of doses
            </th>

            <th rowSpan={3} className="measles-vaccination-date-header">
              <span>Date of last dose</span>
              <span className="measles-vaccination-date-format">
                (dd/mm/yyyy)
              </span>
            </th>
          </tr>

          <tr>
            <th colSpan={2} className="measles-vaccination-routine-header">
              Routine
            </th>

            <th rowSpan={2} className="measles-vaccination-sia-header">
              SIA
            </th>
          </tr>

          <tr>
            <th className="measles-vaccination-sub-header">By Card</th>

            <th className="measles-vaccination-sub-header">By History</th>
          </tr>
        </thead>

        <tbody>
          {vaccinationHistory.map((row, index) => (
            <tr key={row.vaccineType}>
              <td className="measles-vaccination-vaccine-cell">
                {row.vaccineType}
              </td>

              <td className="measles-vaccination-input-cell">
                <PrintableTextField
                  value={row.routineByCard}
                  onChange={(value) =>
                    updateVaccinationRow(index, "routineByCard", value)
                  }
                  ariaLabel={`${row.vaccineType} routine doses by card`}
                  className="measles-vaccination-number-input"
                />
              </td>

              <td className="measles-vaccination-input-cell">
                <PrintableTextField
                  value={row.routineByHistory}
                  onChange={(value) =>
                    updateVaccinationRow(index, "routineByHistory", value)
                  }
                  ariaLabel={`${row.vaccineType} routine doses by history`}
                  className="measles-vaccination-number-input"
                />
              </td>

              <td className="measles-vaccination-input-cell">
                <PrintableTextField
                  value={row.sia}
                  onChange={(value) =>
                    updateVaccinationRow(index, "sia", value)
                  }
                  ariaLabel={`${row.vaccineType} SIA doses`}
                  className="measles-vaccination-number-input"
                />
              </td>

              <td className="measles-vaccination-date-cell">
                <PrintableDateField
                  value={row.lastDoseDate}
                  onChange={(value) =>
                    updateVaccinationRow(index, "lastDoseDate", value)
                  }
                  ariaLabel={`${row.vaccineType} date of last dose`}
                  className="measles-vaccination-date-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
