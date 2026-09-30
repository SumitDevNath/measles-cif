import { MeaslesFormProvider } from "./context/MeaslesFormContext";
import { createMeaslesMockData } from "./mock/measlesForm.mock";
import { useMeaslesForm } from "./context/MeaslesFormContext";

import MeaslesFormPageOne from "./pages/MeaslesFormPageOne";
import MeaslesFormPageTwo from "./pages/MeaslesFormPageTwo";

import "./styles/measles-form.css";
import "./styles/shared-fields.css";
import "./styles/measles-print.css";

// import "./styles/fidelity-overrides.css";

function MockDataButton() {
  const { setFormData } = useMeaslesForm();

  const handlePopulateMockData = () => {
    setFormData((current) => createMeaslesMockData(current));
  };

  return (
    <button
      type="button"
      onClick={handlePopulateMockData}
      className="measles-mock-data-button"
    >
      Populate Mock Data
    </button>
  );
}

export default function MeaslesCaseInvestigationForm() {
  return (
    <MeaslesFormProvider>
      <main
        className="measles-form-preview"
        aria-label="Suspected Measles Case Investigation Form"
      >
        <MockDataButton />
        <MeaslesFormPageOne />
        <MeaslesFormPageTwo />
      </main>
    </MeaslesFormProvider>
  );
}
