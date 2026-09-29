type ObjectSectionKey = {
  [K in keyof MeaslesFormData]: MeaslesFormData[K] extends readonly unknown[]
    ? never
    : MeaslesFormData[K] extends object
      ? K
      : never;
}[keyof MeaslesFormData];

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  MeaslesFormData,
  SpecimenCollectionRow,
  VaccinationHistoryRow,
} from "../types/measlesForm.types";

interface MeaslesFormContextValue {
  formData: MeaslesFormData;

  setFormData: React.Dispatch<React.SetStateAction<MeaslesFormData>>;

  updateSection: <K extends keyof MeaslesFormData>(
    section: K,
    value: MeaslesFormData[K],
  ) => void;

  updateSectionField: <
    K extends ObjectSectionKey,
    F extends keyof MeaslesFormData[K],
  >(
    section: K,
    field: F,
    value: MeaslesFormData[K][F],
  ) => void;

  resetForm: () => void;
}

interface MeaslesFormProviderProps {
  children: ReactNode;
  initialData?: Partial<MeaslesFormData>;
}

const vaccinationHistoryInitial: VaccinationHistoryRow[] = [
  {
    vaccineType: "MR",
    routineByCard: "",
    routineByHistory: "",
    sia: "",
    lastDoseDate: "",
  },
  {
    vaccineType: "Measles",
    routineByCard: "",
    routineByHistory: "",
    sia: "",
    lastDoseDate: "",
  },
  {
    vaccineType: "MMR",
    routineByCard: "",
    routineByHistory: "",
    sia: "",
    lastDoseDate: "",
  },
];

const specimenCollectionInitial: SpecimenCollectionRow[] = [
  {
    specimen: "serum",
    dateCollected: "",
    dateSentToNpml: "",
    dateReceivedAtNpml: "",
    specimenCode: "",
  },
  {
    specimen: "dbs",
    dateCollected: "",
    dateSentToNpml: "",
    dateReceivedAtNpml: "",
    specimenCode: "",
  },
  {
    specimen: "urine",
    dateCollected: "",
    dateSentToNpml: "",
    dateReceivedAtNpml: "",
    specimenCode: "",
  },
  {
    specimen: "nasopharyngeal-swab",
    dateCollected: "",
    dateSentToNpml: "",
    dateReceivedAtNpml: "",
    specimenCode: "",
  },
];

const emptyCondition = {
  cold: "" as const,
  sufficientQuantity: "" as const,
  leakage: "" as const,
  turbid: "" as const,
  desiccated: "" as const,
};

const emptyIgmResult = {
  result: "" as const,
  dateOfResult: "",
};

const emptyVirusIsolationTest = {
  result: "" as const,
  dateOfResult: "",
};

const initialFormData: MeaslesFormData = {
  backgroundInformation: {
    outbreakId: {
      districtCode: "",
      upazilaMunicipalityCode: "",
      onsetYear: "",
      outbreakNumber: "",
    },

    isIndexCase: "",

    focalPersonNotifiedDate: "",
    personNotifyingName: "",

    investigationDate: "",
    designationAddress: "",

    healthFacilityName: "",
    healthFacilityType: "",

    visitAdmissionDate: "",
    medicalRecordNumber: "",
  },

  patientIdentification: {
    caseId: {
      districtCode: "",
      upazilaMunicipalityCode: "",
      onsetYear: "",
      caseNumber: "",
    },

    patientName: "",
    fatherGuardianName: "",
    contactNumber: "",

    dateOfBirth: "",
    age: "",
    sex: "",
    religion: "",

    houseStreetAddress: "",

    rural: {
      village: "",
      union: "",
      upazila: "",
      district: "",
    },

    urban: {
      mahalla: "",
      wardNumber: "",
      zone: "",
      municipalityCityCorporation: "",
      district: "",
    },
  },

  clinicalInformation: {
    fever: "",
    feverOnsetDate: "",

    generalizedMaculopapularRash: "",
    rashOnsetDate: "",
  },

  additionalClinicalInformation: {
    cough: "",
    coryza: "",
    conjunctivitis: "",

    jointPain: "",
    jointsAffected: "",

    lymphNodeSwelling: "",

    subOccipital: "",
    postAuricular: "",
    cervical: "",

    pregnant: "",
    pregnancyDurationWeeks: "",
  },

  vaccinationHistory: vaccinationHistoryInitial,

  travelHistory: {
    traveledOrReceivedVisitor: "",

    travelStartDate: "",
    travelEndDate: "",

    placeToFromTravel: "",
    houseStreetAddress: "",

    villageMahalla: "",
    unionWard: "",
    upazilaMunicipalityCityCorporation: "",
    district: "",
  },

  specimenCollection: {
    rows: specimenCollectionInitial,

    mtLabSignature: "",
    mtLabSignatureDate: "",

    caseInvestigatedBy: "",
    investigatorDesignation: "",
    investigatorSignature: "",
    investigatorDate: "",

    reportSentBy: "",
    reportSenderDesignation: "",
    reportSenderSignature: "",
    reportSentDate: "",
  },

  specimenCondition: {
    serum: { ...emptyCondition },
    dbs: { ...emptyCondition },
    urine: { ...emptyCondition },
    nasopharyngealSwab: { ...emptyCondition },
  },

  laboratoryResult: {
    serumIgmMeasles: { ...emptyIgmResult },
    serumIgmRubella: { ...emptyIgmResult },
    dbsIgmMeasles: { ...emptyIgmResult },
    dbsIgmRubella: { ...emptyIgmResult },

    measlesVirusIsolation: {
      urine: { ...emptyVirusIsolationTest },
      nasopharyngealSwab: { ...emptyVirusIsolationTest },
      oralFluid: { ...emptyVirusIsolationTest },
      genotype: "",
    },

    rubellaVirusIsolation: {
      urine: { ...emptyVirusIsolationTest },
      nasopharyngealSwab: { ...emptyVirusIsolationTest },
      oralFluid: { ...emptyVirusIsolationTest },
      genotype: "",
    },

    deliveringPersonName: "",
    deliveringPersonDesignation: "",
    deliveringPersonSignature: "",
    deliveringDate: "",

    receivingPersonName: "",
    receivingPersonDesignation: "",
    receivingPersonSignature: "",
    receivingDate: "",
  },

  finalClassification: {
    clinicallyCompatibleMeasles: false,
    laboratoryConfirmedMeasles: false,
    epidemiologicallyLinkedMeasles: false,

    clinicallyCompatibleRubella: false,
    laboratoryConfirmedRubella: false,
    epidemiologicallyLinkedRubella: false,

    discarded: false,
  },

  sourceOfInfection: {
    endemic: false,
    imported: false,
    importRelated: false,
    unknown: false,
  },

  additionalComments: "",

  followUpInformation: {
    followedUpThirtyDaysAfterRashOnset: "",
    followUpDate: "",

    hasComplicationFromMeasles: "",

    complications: {
      ari: false,
      diarrhoea: false,
      otitisMedia: false,
      malnutrition: false,
      encephalitis: false,
      others: false,
    },

    otherComplicationDetails: "",

    outcome: "",
  },

  digitalFooter: {
    printedBy: "",
    status: "",
  },
};

const MeaslesFormContext = createContext<MeaslesFormContextValue | undefined>(
  undefined,
);

export function MeaslesFormProvider({
  children,
  initialData,
}: MeaslesFormProviderProps) {
  const [formData, setFormData] = useState<MeaslesFormData>(() => ({
    ...initialFormData,
    ...initialData,
  }));

  const updateSection = <K extends keyof MeaslesFormData>(
    section: K,
    value: MeaslesFormData[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: value,
    }));
  };

  const updateSectionField = <
    K extends ObjectSectionKey,
    F extends keyof MeaslesFormData[K],
  >(
    section: K,
    field: F,
    value: MeaslesFormData[K][F],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        [field]: value,
      },
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const contextValue = useMemo<MeaslesFormContextValue>(
    () => ({
      formData,
      setFormData,
      updateSection,
      updateSectionField,
      resetForm,
    }),
    [formData],
  );

  return (
    <MeaslesFormContext.Provider value={contextValue}>
      {children}
    </MeaslesFormContext.Provider>
  );
}

export function useMeaslesForm() {
  const context = useContext(MeaslesFormContext);

  if (!context) {
    throw new Error(
      "useMeaslesForm must be used inside a MeaslesFormProvider.",
    );
  }

  return context;
}
