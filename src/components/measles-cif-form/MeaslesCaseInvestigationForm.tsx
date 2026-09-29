import { MeaslesFormProvider } from "./context/MeaslesFormContext";

import MeaslesFormPageOne from "./pages/MeaslesFormPageOne";
import MeaslesFormPageTwo from "./pages/MeaslesFormPageTwo";

import "./styles/measles-form.css";
import "./styles/shared-fields.css";
import "./styles/measles-print.css";

export default function MeaslesCaseInvestigationForm() {
  return (
    <MeaslesFormProvider>
      <main
        className="measles-form-preview"
        aria-label="Suspected Measles Case Investigation Form"
      >
        <MeaslesFormPageOne />
        <MeaslesFormPageTwo />
      </main>
    </MeaslesFormProvider>
  );
}
