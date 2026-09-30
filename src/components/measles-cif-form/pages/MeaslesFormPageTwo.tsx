import DigitalFooter from "../sections/DigitalFooter";
import FinalClassificationSection from "../sections/FinalClassificationSection";
import FollowUpInformationSection from "../sections/FollowUpInformationSection";
import LaboratoryResultSection from "../sections/LaboratoryResultSection";
import SpecimenConditionSection from "../sections/SpecimenConditionSection";

export default function MeaslesFormPageTwo() {
  return (
    <section
      className="measles-print-page measles-page-two"
      aria-label="Suspected Measles Case Investigation Form - Page 2"
    >
      <div className="measles-page-content">
        {/* <div className="measles-development-label" aria-hidden="true"> */}
        <SpecimenConditionSection />
        <LaboratoryResultSection />
        <FinalClassificationSection />
        <FollowUpInformationSection />
        {/* </div> */}
      </div>
      <DigitalFooter />
    </section>
  );
}
