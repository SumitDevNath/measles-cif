import HeaderSection from "../sections/HeaderSection";
import BackgroundInformationSection from "../sections/BackgroundInformationSection";
import PatientInformationSection from "../sections/PatientIdentificationSection";
import ClinicalInformationSection from "../sections/ClinicalInformationSection";
import AdditionalClinicalInformationSection from "../sections/AdditionalClinicalInformationSection";
import VaccinationHistorySection from "../sections/VaccinationHistorySection";
import TravelHistorySection from "../sections/TravelHistorySection";
import SpecimenCollectionSection from "../sections/SpecimenCollectionSection";

export default function MeaslesFormPageOne() {
  return (
    <section
      className="measles-print-page measles-page-one"
      aria-label="Suspected Measles Case Investigation Form - Page 1"
    >
      <div className="measles-page-content">
        <HeaderSection />
        <BackgroundInformationSection />
        <PatientInformationSection />
        <ClinicalInformationSection />
        <AdditionalClinicalInformationSection />
        <VaccinationHistorySection />
        <TravelHistorySection />
        <SpecimenCollectionSection />
      </div>
    </section>
  );
}
