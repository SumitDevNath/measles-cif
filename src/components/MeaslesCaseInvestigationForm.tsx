import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  type ChangeEvent,
} from "react";
import {
  Box,
  GlobalStyles,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
export type YesNo = "" | "yes" | "no";
export type YesNoUnknown = "" | "yes" | "no" | "unknown";
export type Sex = "" | "male" | "female";
export type HealthFacilityType = "" | "gob" | "non-gob";
export type LaboratoryResultStatus =
  | ""
  | "positive"
  | "negative"
  | "equivocal"
  | "pending"
  | "not-tested";

export type VirusIsolationResult =
  | ""
  | "positive"
  | "negative"
  | "pending"
  | "not-tested";

export interface OutbreakId {
  districtCode: string;
  upazilaMunicipalityCode: string;
  onsetYear: string;
  outbreakNumber: string;
}

export interface CaseId {
  districtCode: string;
  upazilaMunicipalityCode: string;
  onsetYear: string;
  caseNumber: string;
}

export interface BackgroundInformation {
  outbreakId: OutbreakId;
  isIndexCase: YesNo;
  focalPersonNotifiedDate: string;
  personNotifyingName: string;
  investigationDate: string;
  designationAddress: string;
  healthFacilityName: string;
  healthFacilityType: HealthFacilityType;
  visitAdmissionDate: string;
  medicalRecordNumber: string;
}

export interface PatientIdentification {
  caseId: CaseId;
  patientName: string;
  fatherGuardianName: string;
  contactNumber: string;
  dateOfBirth: string;
  age: string;
  sex: Sex;
  religion: string;
  houseStreetAddress: string;
  rural: {
    village: string;
    union: string;
    upazila: string;
    district: string;
  };
  urban: {
    mahalla: string;
    wardNumber: string;
    zone: string;
    municipalityCityCorporation: string;
    district: string;
  };
}

export interface ClinicalInformation {
  fever: YesNo;
  feverOnsetDate: string;
  generalizedMaculopapularRash: YesNo;
  rashOnsetDate: string;
}

export interface AdditionalClinicalInformation {
  cough: YesNo;
  coryza: YesNo;
  conjunctivitis: YesNo;
  jointPain: YesNo;
  jointsAffected: string;
  lymphNodeSwelling: YesNo;
  subOccipital: YesNo;
  postAuricular: YesNo;
  cervical: YesNo;
  pregnant: YesNoUnknown;
  pregnancyDurationWeeks: string;
}

export interface VaccinationHistoryRow {
  vaccineType: "MR" | "Measles" | "MMR";
  routineByCard: string;
  routineByHistory: string;
  sia: string;
  lastDoseDate: string;
}

export interface TravelHistory {
  traveledOrReceivedVisitor: YesNoUnknown;
  travelStartDate: string;
  travelEndDate: string;
  placeToFromTravel: string;
  houseStreetAddress: string;
  villageMahalla: string;
  unionWard: string;
  upazilaMunicipalityCityCorporation: string;
  district: string;
}

export interface SpecimenCollectionRow {
  specimen: "serum" | "dbs" | "urine" | "nasopharyngeal-swab";
  dateCollected: string;
  dateSentToNpml: string;
  dateReceivedAtNpml: string;
  specimenCode: string;
}

export interface SpecimenCollection {
  rows: SpecimenCollectionRow[];
  mtLabSignature: string;
  mtLabSignatureDate: string;
  caseInvestigatedBy: string;
  investigatorDesignation: string;
  investigatorSignature: string;
  investigatorDate: string;
  reportSentBy: string;
  reportSenderDesignation: string;
  reportSenderSignature: string;
  reportSentDate: string;
}

export interface SpecimenConditionItem {
  cold: YesNo;
  sufficientQuantity: YesNo;
  leakage: YesNo;
  turbid: YesNo;
  desiccated: YesNo;
}

export interface SpecimenCondition {
  serum: SpecimenConditionItem;
  dbs: SpecimenConditionItem;
  urine: SpecimenConditionItem;
  nasopharyngealSwab: SpecimenConditionItem;
}

export interface LaboratoryIgMResult {
  result: LaboratoryResultStatus;
  dateOfResult: string;
}

export interface VirusIsolationTest {
  result: VirusIsolationResult;
  dateOfResult: string;
}

export interface VirusIsolationGroup {
  urine: VirusIsolationTest;
  nasopharyngealSwab: VirusIsolationTest;
  oralFluid: VirusIsolationTest;
  genotype: string;
}

export interface LaboratoryResult {
  serumIgmMeasles: LaboratoryIgMResult;
  serumIgmRubella: LaboratoryIgMResult;
  dbsIgmMeasles: LaboratoryIgMResult;
  dbsIgmRubella: LaboratoryIgMResult;
  measlesVirusIsolation: VirusIsolationGroup;
  rubellaVirusIsolation: VirusIsolationGroup;
  deliveringPersonName: string;
  deliveringPersonDesignation: string;
  deliveringPersonSignature: string;
  deliveringDate: string;
  receivingPersonName: string;
  receivingPersonDesignation: string;
  receivingPersonSignature: string;
  receivingDate: string;
}

export interface FinalClassification {
  clinicallyCompatibleMeasles: boolean;
  laboratoryConfirmedMeasles: boolean;
  epidemiologicallyLinkedMeasles: boolean;
  clinicallyCompatibleRubella: boolean;
  laboratoryConfirmedRubella: boolean;
  epidemiologicallyLinkedRubella: boolean;
  discarded: boolean;
}

export interface SourceOfInfection {
  endemic: boolean;
  imported: boolean;
  importRelated: boolean;
  unknown: boolean;
}

export interface FollowUpInformation {
  followedUpThirtyDaysAfterRashOnset: YesNo;
  followUpDate: string;
  hasComplicationFromMeasles: YesNo;
  complications: {
    ari: boolean;
    diarrhoea: boolean;
    otitisMedia: boolean;
    malnutrition: boolean;
    encephalitis: boolean;
    others: boolean;
  };

  otherComplicationDetails: string;
  outcome: "" | "alive" | "died";
}

export interface DigitalFooterData {
  printedBy: string;
  status: string;
}

export interface MeaslesFormData {
  backgroundInformation: BackgroundInformation;
  patientIdentification: PatientIdentification;
  clinicalInformation: ClinicalInformation;
  additionalClinicalInformation: AdditionalClinicalInformation;
  vaccinationHistory: VaccinationHistoryRow[];
  travelHistory: TravelHistory;
  specimenCollection: SpecimenCollection;
  specimenCondition: SpecimenCondition;
  laboratoryResult: LaboratoryResult;
  finalClassification: FinalClassification;
  sourceOfInfection: SourceOfInfection;
  additionalComments: string;
  followUpInformation: FollowUpInformation;
  digitalFooter: DigitalFooterData;
}

type ObjectSectionKey = {
  [K in keyof MeaslesFormData]: MeaslesFormData[K] extends readonly unknown[]
    ? never
    : MeaslesFormData[K] extends object
      ? K
      : never;
}[keyof MeaslesFormData];

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

/** Embed the official EPI logo */
const EPI_LOGO_DATA_URI = "/src/assets/epi-logo.png";

const commonWardInputSx: SxProps<Theme> = {
  minWidth: "0",
  height: "13px",
  padding: "0 1px",
  fontSize: "8px",
  lineHeight: "1",
  width: "45px",
};
const commonMunicipalityInputSx: SxProps<Theme> = {
  minWidth: "0",
  height: "13px",
  padding: "0 1px",
  fontSize: "8px",
  lineHeight: "1",
  width: "100%",
};
const commonAdditionalRowTwoContentSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  minWidth: "0",
};
const commonSpecimenSectionSx: SxProps<Theme> = {
  width: "100%",
  marginTop: "7px",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "8px",
};
const commonSpecimenTableSx: SxProps<Theme> = {
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  border: "var(--measles-border-width) solid var(--measles-border-color)",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "10px",
};
const commonLabResultRadioSx: SxProps<Theme> = {
  position: "absolute",
  width: "1px",
  height: "1px",
  opacity: "0",
  pointerEvents: "none",
};
const commonLabPersonNameSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "baseline",
  minWidth: "0",
  gap: "3px",
  whiteSpace: "nowrap",
};
const printableInputReset = {
  minWidth: "0",
  margin: "0",
  borderRadius: "0",
  outline: "none",
  background: "transparent",
  color: "var(--measles-text-color)",
  fontFamily: "inherit",
  boxShadow: "none",
  appearance: "none",
  WebkitAppearance: "none",
};

const printableTableBase = {
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  border: "var(--measles-border-width) solid var(--measles-border-color)",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const sxStyles: Record<string, SxProps<Theme>> = {
  header: { width: "100%", margin: "0 0 4px" },
  headerTop: {
    display: "grid",
    gridTemplateColumns: "66px 1fr 66px",
    width: "100%",
    alignItems: "start",
  },
  headerLogoColumn: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "1px",
  },
  headerLogo: {
    display: "block",
    width: "54px",
    height: "auto",
    objectFit: "contain",
  },
  headerTitleColumn: { minWidth: "0", textAlign: "center" },
  headerBalanceColumn: { width: "66px" },
  programmeTitle: {
    marginTop: "0",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "8.5px",
    fontWeight: "400",
    lineHeight: "1",
  },
  formTitle: {
    marginTop: "1px !important",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "11.5px",
    fontWeight: "700",
    lineHeight: "1",
  },
  formInstruction: {
    marginTop: "2px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "9.5px",
    fontStyle: "italic",
    lineHeight: "1",
  },
  outbreakRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "3px",
    marginTop: "5px",
    whiteSpace: "nowrap",
  },
  outbreakLabel: { paddingTop: "1px", fontSize: "9px", fontWeight: "700" },
  idDistrict: { width: "55px" },
  idUpazila: { width: "69px" },
  idYear: { width: "50px" },
  idNumber: { width: "49px" },
  backgroundSection: {
    width: "100%",
    marginTop: "4px",
    fontSize: "8.5px",
    '& [role="radiogroup"]': { gap: "7px" },
    "& label": { gap: "3px", fontSize: "8.5px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
  },
  sectionHeadingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "18px",
  },
  indexCase: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingRight: "3px",
  },
  indexLabel: { fontSize: "9px", fontWeight: "700", whiteSpace: "nowrap" },
  backgroundRow: {
    display: "grid",
    width: "100%",
    alignItems: "baseline",
    minHeight: "18px",
    fontSize: "8.5px",
  },
  backgroundRowTwo: {
    gridTemplateColumns: "auto minmax(0, 1fr)",
    columnGap: "8px",
  },
  backgroundDate: { width: "68px", height: "13px", fontSize: "8px" },
  notifierField: { paddingLeft: "0" },
  designationField: { paddingLeft: "0" },
  facilityRow: { gridTemplateColumns: "minmax(0, 1fr) auto", columnGap: "8px" },
  facilityName: { display: "flex", alignItems: "baseline", paddingRight: "0" },
  healthFacilityInput: { width: "200px", flex: "0 0 200px" },
  facilityType: {
    display: "flex",
    paddingRight: "15px",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "5px",
    minWidth: "0",
    whiteSpace: "nowrap",
  },
  finalBackgroundRow: {
    gridTemplateColumns: "auto minmax(0, 1fr)",
    columnGap: "8px",
  },
  recordField: { paddingLeft: "0" },
  patientSection: {
    width: "100%",
    marginTop: "3px",
    fontSize: "8.5px",
    "& label": { gap: "2px", fontSize: "8.5px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
  },
  patientHeadingRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "26px",
    paddingTop: "2px",
    "& > h2": { flex: "0 0 auto", paddingTop: "2px" },
  },
  caseIdRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: "3px",
    minWidth: "0",
    whiteSpace: "nowrap",
  },
  caseIdLabel: { paddingTop: "1px", fontSize: "8.5px", fontWeight: "700" },
  caseIdDistrict: { width: "50px" },
  caseIdUpazila: { width: "66px" },
  caseIdYear: { width: "46px" },
  caseIdNumber: { width: "46px" },
  patientRow: { width: "100%", minHeight: "18px", alignItems: "baseline" },
  patientNameRow: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1fr)\n    minmax(0, 1.2fr)\n    minmax(0, 0.75fr)",
    columnGap: "8px",
  },
  patientNameInput: { minWidth: "105px" },
  guardianNameInput: { minWidth: "120px" },
  contactInput: { minWidth: "85px" },
  demographicRow: {
    display: "grid",
    gridTemplateColumns: "auto\n    auto\n    auto\n    minmax(0, 1fr)",
    columnGap: "8px",
  },
  patientDob: { width: "68px" },
  patientOr: { margin: "0 2px", fontSize: "8px", fontWeight: "700" },
  ageInput: {
    width: "30px",
    height: "13px",
    padding: "0 1px",
    fontSize: "8px",
    lineHeight: "1",
    textAlign: "center",
  },
  sexGroup: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    whiteSpace: "nowrap",
  },
  religionGroup: { whiteSpace: "nowrap" },
  religionInput: { width: "65px", height: "13px", padding: "0 1px" },
  addressGroup: { minWidth: "0" },
  houseAddressInput: { minWidth: "110px" },
  locationRow: {
    display: "grid",
    gridTemplateColumns:
      "auto\n    minmax(0, 1.15fr)\n    minmax(0, 1fr)\n    minmax(0, 1fr)\n    minmax(0, 1fr)",
    columnGap: "7px",
    alignItems: "baseline",
  },
  locationPrefix: { whiteSpace: "nowrap", fontSize: "8.5px", lineHeight: "1" },
  locationInput: {
    minWidth: "0",
    height: "13px",
    padding: "0 1px",
    fontSize: "8px",
    lineHeight: "1",
  },
  wardInput: commonWardInputSx,
  zoneInput: commonWardInputSx,
  municipalityInput: commonMunicipalityInputSx,
  urbanDistrictInput: commonMunicipalityInputSx,
  villageInput: { width: "100%" },
  unionInput: { width: "100%" },
  upazilaInput: { width: "100%" },
  ruralDistrictInput: { width: "100%" },
  urbanRow: {
    gridTemplateColumns:
      "auto\n    minmax(0, 1.05fr)\n    minmax(0, 0.65fr)\n    minmax(0, 0.65fr)\n    minmax(0, 1.35fr)\n    minmax(0, 1fr)",
  },
  mahallaInput: { width: "100%" },
  clinicalSection: { width: "100%", marginTop: "4px", fontSize: "8.5px" },
  clinicalHeading: { marginBottom: "2px" },
  clinicalTable: {
    ...printableTableBase,
    marginTop: "2px",
    fontSize: "8.5px",
    "& td": {
      height: "19px",
      padding: "2px 4px",
      verticalAlign: "middle",
      border: "var(--measles-border-width) solid var(--measles-border-color)",
    },
  },
  clinicalMainCell: { width: "40%" },
  clinicalQuestionGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    whiteSpace: "nowrap",
    '& [role="radiogroup"]': {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      flex: "0 0 auto",
    },
    "& label": { gap: "3px", fontSize: "8.5px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
  },
  clinicalQuestion: { flex: "0 0 auto" },
  clinicalDateCell: {
    width: "60%",
    verticalAlign: "middle",
    textAlign: "center",
  },
  clinicalDateGroup: {
    display: "inline-flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "4px",
    fontWeight: "600",
    width: "auto",
    whiteSpace: "nowrap",
  },
  clinicalDateLabel: { flex: "0 0 auto" },
  clinicalDateInput: {
    width: "68px",
    height: "13px",
    flex: "1 1 auto",
    maxWidth: "none",
    fontSize: "8px",
  },
  additionalClinicalSection: {
    width: "100%",
    marginTop: "8px",
    fontSize: "8.5px",
  },
  additionalClinicalHeading: { marginBottom: "2px" },
  additionalClinicalGrid: {
    width: "100%",
    borderTop: "var(--measles-border-width) solid var(--measles-border-color)",
    borderLeft: "var(--measles-border-width) solid var(--measles-border-color)",
  },
  additionalRow: { display: "grid", width: "100%", minHeight: "21px" },
  additionalRowThree: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  additionalRowOne: { gridTemplateColumns: "minmax(0, 1fr)" },
  additionalRowTwo: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  additionalCell: {
    display: "flex",
    alignItems: "center",
    minWidth: "0",
    minHeight: "21px",
    padding: "2px 5px",
    borderRight:
      "var(--measles-border-width) solid var(--measles-border-color)",
    borderBottom:
      "var(--measles-border-width) solid var(--measles-border-color)",
  },
  additionalQuestionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minWidth: "0",
    whiteSpace: "nowrap",
    '& [role="radiogroup"]': {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      flex: "0 0 auto",
      marginRight: "15px",
    },
    "& label": { gap: "3px", fontSize: "8.5px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
  },
  additionalQuestionText: { flex: "0 0 auto" },
  additionalRowTwoContent: commonAdditionalRowTwoContentSx,
  additionalJointQuestion: {
    width: "43%",
    flex: "0 0 43%",
    paddingRight: "7px",
  },
  additionalJointDetails: { width: "57%", flex: "1 1 auto" },
  additionalRowThreeContent: commonAdditionalRowTwoContentSx,
  additionalLymphQuestion: {
    width: "52%",
    flex: "0 0 52%",
    paddingRight: "8px",
  },
  additionalLymphInstruction: { flex: "1 1 auto", whiteSpace: "nowrap" },
  additionalInlineField: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
    width: "100%",
    minWidth: "0",
    whiteSpace: "nowrap",
  },
  additionalJointsInput: { width: "100%", minWidth: "0", flex: "1 1 auto" },
  additionalPregnancyWeeksInput: {
    width: "70px",
    minWidth: "70px",
    flex: "1 1 auto",
  },
  vaccinationSection: { width: "100%", marginTop: "8px", fontSize: "8.5px" },
  vaccinationHeading: { marginBottom: "2px" },
  vaccinationTable: {
    ...printableTableBase,
    width: "80%",
    fontSize: "8px",
    "& th": {
      padding: "1px 4px",
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
      fontWeight: "400",
      textAlign: "center",
    },
    "& td": {
      padding: "1px 4px",
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
    },
    "& tbody td": { height: "18px" },
  },
  vaccinationVaccineHeader: { width: "23%" },
  vaccinationVaccineCell: {
    width: "23%",
    paddingLeft: "5px",
    textAlign: "left",
  },
  vaccinationDosesHeader: { width: "62%" },
  vaccinationDateHeader: { width: "15%", lineHeight: "1.05" },
  vaccinationDateCell: {
    width: "15%",
    padding: "0 3px !important",
    textAlign: "center",
  },
  vaccinationDateFormat: { display: "block" },
  vaccinationRoutineHeader: { textAlign: "center" },
  vaccinationSiaHeader: { textAlign: "center" },
  vaccinationSubHeader: { textAlign: "center" },
  vaccinationInputCell: { padding: "0 !important", textAlign: "center" },
  vaccinationNumberInput: {
    width: "100%",
    height: "100%",
    padding: "1px 2px",
    border: "none !important",
    outline: "none !important",
    boxShadow: "none !important",
    background: "transparent",
    textAlign: "center",
  },
  vaccinationDateInput: {
    width: "100%",
    maxWidth: "none",
    height: "13px",
    fontSize: "8px",
    border: "none !important",
  },
  travelSection: {
    width: "100%",
    marginTop: "7px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "10px",
  },
  travelHeading: { marginBottom: "3px" },
  travelFlow: {
    display: "block",
    width: "100%",
    fontSize: "10px",
    lineHeight: "1.8",
    '& [role="radiogroup"]': {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginLeft: "5px",
      marginRight: "5px",
      verticalAlign: "baseline",
      whiteSpace: "nowrap",
    },
    "& label": { gap: "3px", fontSize: "10px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
    "& > span": {
      display: "inline",
      fontSize: "10px",
      whiteSpace: "normal",
    },
    '& input:not([inputmode="numeric"])': {
      position: "relative",
      top: "-2px",
      height: "13px",
      padding: "0 1px",
      fontSize: "10px",
      lineHeight: "1",
      verticalAlign: "baseline",
      marginRight: "3px",
    },
    '& input[inputmode="numeric"]': {
      position: "relative",
      top: "-2px",
      height: "13px",
      padding: "0 1px",
      fontSize: "10px",
      lineHeight: "1",
      textAlign: "center",
      verticalAlign: "baseline",
      marginRight: "3px",
    },
  },
  travelBoldLabel: {
    fontSize: "10px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  travelDateInput: {
    width: "55px",
    height: "13px",
    flex: "0 0 55px",
    fontSize: "10px",
  },
  travelPlaceInput: { width: "75px", flex: "0 0 75px", fontSize: "10px" },
  travelStreetInput: { width: "175px", flex: "0 0 175px", fontSize: "10px" },
  travelVillageInput: { width: "70px", flex: "0 0 70px", fontSize: "10px" },
  travelUnionInput: { width: "65px", flex: "0 0 65px", fontSize: "10px" },
  travelUpazilaInput: { width: "75px", flex: "0 0 75px", fontSize: "10px" },
  travelDistrictInput: { width: "65px", flex: "0 0 65px", fontSize: "10px" },
  specimenSection: commonSpecimenSectionSx,
  specimenHeadingRow: {
    display: "grid",
    gridTemplateColumns: "62.37% 37.63%",
    alignItems: "end",
    width: "100%",
  },
  specimenHeading: { margin: "0", paddingBottom: "2px" },
  specimenNpmlBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "18px",
    padding: "2px 4px",
    border: "var(--measles-border-width) solid var(--measles-border-color)",
    borderBottom: "none",
    fontSize: "8px",
    fontWeight: "700",
    textAlign: "center",
  },
  specimenTable: mergeSx(commonSpecimenTableSx, {
    "& th": {
      padding: "2px 4px",
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
      height: "19px",
      fontWeight: "bold",
      textAlign: "center",
    },
    "& td": {
      padding: "2px 4px",
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
    },
    "& tbody tr": { height: "21px" },
    '& input[inputmode="numeric"]': {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
      background: "transparent",
    },
    '& input:not([inputmode="numeric"])': {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
      background: "transparent",
    },
  }),
  specimenTypeColumn: { width: "22.5%" },
  specimenDateColumn: { width: "17%" },
  specimenCodeColumn: { width: "17%" },
  specimenNameCell: {
    paddingLeft: "5px !important",
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: "1.1",
  },
  specimenNote: {
    fontSize: "10px",
    fontWeight: "lighter",
    whiteSpace: "normal",
  },
  specimenDateCell: { padding: "0 3px !important", textAlign: "center" },
  specimenDateInput: {
    width: "100%",
    height: "13px",
    maxWidth: "none",
    padding: "0 1px",
    fontSize: "8px",
    borderBottom: "none !important",
  },
  specimenCodeCell: { padding: "0 3px !important", textAlign: "center" },
  specimenCodeInput: {
    width: "100%",
    height: "13px",
    padding: "0 1px",
    borderBottom: "none !important",
    fontSize: "8px",
    textAlign: "center",
  },
  specimenOfficerRow: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1.45fr)\n    minmax(0, 1.25fr)\n    minmax(0, 0.6fr)\n    minmax(0, 0.75fr)",
    alignItems: "baseline",
    columnGap: "8px",
    width: "100%",
    minHeight: "18px",
    fontSize: "8px",
  },
  specimenOfficerField: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
    minWidth: "0",
    whiteSpace: "nowrap",
    "& > span": {
      flex: "0 0 auto",
      fontSize: "10px",
    },
    '& input:not([inputmode="numeric"])': {
      width: "100%",
      minWidth: "0",
      flex: "1 1 auto",
    },
  },
  specimenConditionSection: {
    width: "100%",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "8px",
  },
  laboratoryUseHeading: {
    width: "100%",
    marginTop: "37px",
    marginBottom: "13px",
    fontSize: "10px",
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "center",
    textDecoration: "underline",
  },
  specimenConditionHeading: {
    margin: "0 0 4px 0",
    textDecoration: "underline",
  },
  specimenConditionTable: {
    ...printableTableBase,
    marginTop: "10px",
    fontSize: "8px",
    "& th": {
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
      height: "25px",
      padding: "2px 3px",
      fontSize: "9px",
      fontWeight: "700",
      lineHeight: "1.05",
      textAlign: "center",
    },
    "& td": {
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
    },
    "& th:not(:first-child)": { width: "15.6%" },
    "& tbody tr": {
      height: "25px",
    },
  },
  specimenConditionNameColumn: { width: "22%", textAlign: "left !important" },
  specimenConditionTwoLineHeader: {
    display: "inline-block",
    lineHeight: "1.05",
  },
  specimenConditionNameCell: {
    padding: "2px 5px",
    fontSize: "10px",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  specimenConditionAnswerCell: {
    padding: "0 3px",
    textAlign: "center",
    '& [role="radiogroup"]': {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      whiteSpace: "nowrap",
    },
    "& label": { gap: "2px", fontSize: "10px" },
    '& label > span[aria-hidden="true"]': {
      width: "8px",
      height: "8px",
      flex: "0 0 8px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
    },
  },
  specimenConditionNaCell: {
    background: "#e8e8e8",
    "@media print": {
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
  laboratoryResultSection: commonSpecimenSectionSx,
  laboratoryResultHeading: { margin: "0 0 2px 0", fontWeight: "700" },
  laboratoryResultTable: mergeSx(commonSpecimenTableSx, {
    "& th": {
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
    },
    "& td": {
      border: "var(--measles-border-width) solid var(--measles-border-color)",
      verticalAlign: "middle",
    },
    "& thead th": {
      height: "20px",
      padding: "2px 4px",
      fontSize: "10px",
      fontWeight: "700",
      textAlign: "center",
    },
    "& tbody td": {
      height: "20px",
    },
    '& input[inputmode="numeric"]': {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
      background: "transparent",
    },
  }),
  labSpecimenHeader: { width: "22%" },
  labSpecimenCell: {
    width: "22%",
    padding: "2px 5px",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  labResultHeader: { width: "60%" },
  labResultCell: { width: "60%", padding: "1px 5px" },
  labDateHeader: { width: "18%" },
  labDateCell: { width: "18%", padding: "0 4px", textAlign: "center" },
  labEmptyDateCell: { width: "18%", background: "transparent" },
  labResultOptions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    width: "100%",
    gap: "8px",
    whiteSpace: "nowrap",
  },
  labResultOption: {
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    m: 0,
    minWidth: 0,
    fontSize: "10px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "& .MuiFormControlLabel-label": {
      fontFamily: "inherit",
      fontSize: "10px",
      lineHeight: "inherit",
      whiteSpace: "nowrap",
    },
  },
  labResultRadio: {
    p: 0,
    m: 0,
    width: "8px",
    height: "8px",
    minWidth: "8px",
    flex: "0 0 8px",
    borderRadius: 0,
    "&:hover": { backgroundColor: "transparent" },
    "&.Mui-focusVisible": {
      outline: "2px solid #2563eb",
      outlineOffset: "2px",
    },
    "@media print": {
      "&.Mui-focusVisible": { outline: "none" },
    },
  },
  labResultBox: {
    position: "relative",
    display: "inline-block",
    width: "8px",
    height: "8px",
    flex: "0 0 8px",
    border: "0.8px solid #000000",
    background: "#ffffff",
    "@media print": {
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
  labResultCheckedBox: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: "1px",
      left: "1px",
      width: "4px",
      height: "4px",
      background: "#000000",
    },
  },
  labDateInput: {
    width: "74px",
    height: "13px",
    fontSize: "8px",
    border: "none !important",
  },
  labIsolationHeading: {
    height: "18px",
    padding: "1px 4px",
    fontSize: "10px",
    fontWeight: "700",
    textAlign: "center",
    background: "transparent",
  },
  labVirusOptions: { justifyContent: "center", gap: "36px" },
  labGenotypeCell: { height: "20px", padding: "1px 5px" },
  labGenotypeGroup: {
    display: "flex",
    alignItems: "baseline",
    width: "100%",
    gap: "4px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  labGenotypeInput: { width: "100%", minWidth: "0", flex: "1 1 auto" },
  labPersonRow: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1.35fr)\n    minmax(0, 0.75fr)\n    minmax(0, 0.4fr)\n    auto",
    alignItems: "baseline",
    columnGap: "5px",
    width: "100%",
    minHeight: "19px",
    marginTop: "3px",
    fontSize: "8px",
  },
  labPersonName: mergeSx(commonLabPersonNameSx, {
    "& > span": {
      flex: "0 0 auto",
      fontSize: "10px",
    },
    '& input:not([inputmode="numeric"])': {
      width: "100%",
      minWidth: "0",
      flex: "1 1 auto",
    },
  }),
  labPersonField: mergeSx(commonLabPersonNameSx, {
    "& > span": {
      flex: "0 0 auto",
      fontSize: "10px",
    },
    '& input:not([inputmode="numeric"])': {
      width: "100%",
      minWidth: "0",
      flex: "1 1 auto",
    },
  }),
  labPersonDate: {
    display: "flex",
    alignItems: "baseline",
    minWidth: "0",
    gap: "3px",
    whiteSpace: "nowrap",
    justifyContent: "flex-end",
    "& > span": {
      flex: "0 0 auto",
      fontSize: "10px",
    },
    '& input[inputmode="numeric"]': { width: "48px", flex: "0 0 48px" },
  },
  finalClassificationSection: {
    width: "100%",
    marginTop: "8px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "8px",
  },
  finalClassificationBlock: { width: "100%" },
  finalClassificationHeading: {
    margin: "0 0 4px 0",
    textDecoration: "underline",
  },
  finalClassificationOptions: {
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content",
    columnGap: "14px",
    rowGap: "10px",
    width: "100%",
    paddingLeft: "12px",
    marginTop: "8px",
    "& > label:last-child": { gridColumn: "1" },
  },
  classificationOption: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    minWidth: "0",
    fontSize: "8px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  classificationCheckboxInput: mergeSx(commonLabResultRadioSx, {
    "&:checked + span::after": {
      content: '""',
      position: "absolute",
      top: "1.5px",
      left: "1.5px",
      width: "7px",
      height: "7px",
      background: "#000000",
    },
  }),
  classificationBox: {
    position: "relative",
    display: "inline-block",
    width: "12px",
    height: "12px",
    flex: "0 0 12px",
    border: "1.5px solid #000000",
    background: "#ffffff",
    "@media print": {
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
  classificationLabel: {
    fontSize: "10px",
    lineHeight: "1",
    whiteSpace: "nowrap",
  },
  sourceInfectionBlock: { width: "100%", marginTop: "10px" },
  sourceInfectionHeading: { margin: "0 0 4px 0", textDecoration: "underline" },
  sourceInfectionOptions: {
    margin: "6px 0 4px 0",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    width: "100%",
    paddingLeft: "12px",
  },
  followUpSection: {
    width: "100%",
    marginTop: "10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "8px",
  },
  additionalCommentsBlock: { width: "100%", minHeight: "28px" },
  additionalCommentsInput: {
    display: "block",
    width: "100%",
    height: "4rem",
    marginTop: "2px",
    padding: "0",
    border: "none",
    outline: "none",
    boxShadow: "none",
    resize: "none",
    overflow: "hidden",
    background: "transparent",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "10px",
    lineHeight: "1.15",
  },
  followUpBoldLabel: {
    flex: "0 0 auto",
    fontSize: "8px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  followUpHeading: { margin: "7px 0 5px 0", textDecoration: "underline" },
  followUpRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "22px",
    gap: "7px",
    fontSize: "8px",
    '& [role="radiogroup"]': {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      flex: "0 0 auto",
      whiteSpace: "nowrap",
    },
    "& label": { gap: "3px", fontSize: "10px" },
    '& label > span[aria-hidden="true"]': {
      width: "9px",
      height: "9px",
      flex: "0 0 9px",
    },
    '& label > input:checked + span[aria-hidden="true"]::after': {
      top: "1px",
      left: "1px",
      width: "5px",
      height: "5px",
    },
  },
  followUpQuestion: {
    flex: "0 0 auto",
    fontSize: "10px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  followUpIfYes: {
    flex: "0 0 auto",
    marginLeft: "6px",
    fontSize: "10px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  followUpDateInput: { width: "68px", flex: "0 0 68px" },
  followUpComplicationRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "22px",
    gap: "8px",
  },
  followUpComplicationOptions: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flex: "0 0 auto",
    whiteSpace: "nowrap",
  },
  followUpCheckboxOption: {
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    fontSize: "10px",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  followUpCheckboxInput: mergeSx(commonLabResultRadioSx, {
    "&:checked + span::after": {
      content: '""',
      position: "absolute",
      top: "1px",
      left: "1px",
      width: "5px",
      height: "5px",
      background: "#000000",
    },
  }),
  followUpCheckboxBox: {
    position: "relative",
    display: "inline-block",
    width: "9px",
    height: "9px",
    flex: "0 0 9px",
    border: "0.8px solid #000000",
    background: "#ffffff",
    "@media print": {
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
  followUpOthersRow: {
    display: "flex",
    alignItems: "baseline",
    width: "100%",
    minHeight: "21px",
    paddingLeft: "275px",
    gap: "4px",
  },
  followUpOtherDetailsInput: { width: "180px", flex: "0 0 180px" },
  followUpOutcomeRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "22px",
    gap: "15px",
  },
  followUpIfYesEmphasis: { fontWeight: "700", textDecoration: "underline" },
  followUpDateLabel: { fontWeight: "400", textDecoration: "none" },
  followUpNormalText: { fontWeight: "400", textDecoration: "none" },
  followUpOutcomeLabel: { fontWeight: "700", textDecoration: "underline" },
  digitalFooter: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "3mm",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    padding:
      "0 var(--measles-page-padding-right) 0\n    var(--measles-page-padding-left)",
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "7px",
  },
  digitalFooterLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2px",
  },
  digitalCopyNote: {
    fontSize: "7px",
    fontStyle: "italic",
    lineHeight: "1.1",
    whiteSpace: "nowrap",
  },
  digitalFooterField: {
    display: "flex",
    alignItems: "baseline",
    gap: "3px",
    minWidth: "0",
  },
  digitalFooterLabel: {
    flex: "0 0 auto",
    fontSize: "7px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  digitalFooterValue: { fontSize: "7px", whiteSpace: "nowrap" },
  digitalFooterStatusInput: {
    width: "180px",
    padding: "0",
    border: "none",
    outline: "none",
    boxShadow: "none",
    background: "transparent",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "7px",
    lineHeight: "1",
    textAlign: "left",
  },
  digitalFooterRight: {
    flex: "0 0 auto",
    paddingBottom: "1px",
    fontSize: "7px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    textAlign: "right",
  },
  formPreview: {
    width: "100%",
    minHeight: "100vh",
    margin: "0",
    padding: "24px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    background: "#ececec",
    boxSizing: "border-box",
    "@media print": {
      display: "block",
      width: "auto",
      minHeight: "0",
      margin: "0 !important",
      padding: "0 !important",
      gap: "0",
      background: "#ffffff !important",
    },
    "--measles-page-width": "190mm",
    "--measles-page-height": "245mm",
    "--measles-page-padding-top": "8mm",
    "--measles-page-padding-right": "13mm",
    "--measles-page-padding-bottom": "7mm",
    "--measles-page-padding-left": "25mm",
    "--measles-font-family": "Arial, Helvetica, sans-serif",
    "--measles-text-color": "#111111",
    "--measles-paper-color": "#ffffff",
    "--measles-border-width": "0.6px",
    "--measles-border-color": "#000000",
  },
  printPage: {
    position: "relative",
    width: "var(--measles-page-width)",
    height: "var(--measles-page-height)",
    flex: "0 0 auto",
    boxSizing: "border-box",
    background: "var(--measles-paper-color)",
    color: "var(--measles-text-color)",
    fontFamily: "var(--measles-font-family)",
    fontSize: "9px",
    fontWeight: "400",
    lineHeight: "1.15",
    boxShadow: "0 1px 3px rgb(0 0 0 / 12%),\n    0 6px 20px rgb(0 0 0 / 8%)",
    "@media print": {
      margin: "0 !important",
      boxShadow: "none !important",
      overflow: "hidden",
      breakInside: "avoid",
      pageBreakInside: "avoid",
    },
  },
  pageTwo: {
    width: "190mm",
    height: "265mm",
    "@media print": {
      width: "195mm !important",
      height: "260mm !important",
      breakAfter: "auto",
      pageBreakAfter: "auto",
    },
  },
  pageContent: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding:
      "var(--measles-page-padding-top) var(--measles-page-padding-right)\n    var(--measles-page-padding-bottom) var(--measles-page-padding-left)",
    boxSizing: "border-box",
  },
  sectionHeading: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "9.5px",
    fontWeight: "700",
    lineHeight: "1",
  },
  printableTextField: {
    ...printableInputReset,
    border: "1px solid #7c7c7c",
    fontSize: "inherit",
    height: "18px",
    padding: "1px 2px",
    lineHeight: "1.1",
    "&:focus": {
      outline: "1px solid #6d8aa0",
      outlineOffset: "1px",
    },
    "&::placeholder": {
      color: "#9a9a9a",
      opacity: "1",
    },
  },
  printableLineField: {
    ...printableInputReset,
    border: "0",
    fontSize: "inherit",
    position: "relative",
    top: "-3px",
    height: "13px",
    padding: "0 1px",
    borderBottom:
      "var(--measles-border-width) solid var(--measles-border-color)",
    lineHeight: "1",
    verticalAlign: "baseline",
    "&:focus": {
      outline: "1px solid #6d8aa0",
      outlineOffset: "1px",
    },
    "&::placeholder": {
      color: "#9a9a9a",
      opacity: "1",
    },
  },
  printableDateField: {
    ...printableInputReset,
    border: "0",
    fontSize: "8px",
    position: "relative",
    top: "-3px",
    width: "68px",
    height: "13px",
    padding: "0 1px",
    borderBottom:
      "var(--measles-border-width) solid var(--measles-border-color)",
    lineHeight: "1",
    textAlign: "center",
    verticalAlign: "baseline",
    "&:focus": {
      outline: "1px solid #6d8aa0",
      outlineOffset: "1px",
    },
    "&::placeholder": {
      color: "#9a9a9a",
      opacity: "1",
    },
  },
  checkboxWrapper: {
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    margin: "0",
    color: "var(--measles-text-color)",
    font: "inherit",
    lineHeight: "1",
    cursor: "pointer",
    userSelect: "none",
  },
  printableCheckboxInput: {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    border: "0",
    '&:checked + span[aria-hidden="true"]::after': {
      content: '""',
      position: "absolute",
      top: "1px",
      left: "1px",
      width: "5px",
      height: "5px",
      background: "#111111",
    },
    '&:focus-visible + span[aria-hidden="true"]': {
      outline: "1px solid #6d8aa0",
      outlineOffset: "1px",
    },
    '&:disabled + span[aria-hidden="true"]': { opacity: "0.55" },
    "&:disabled ~ span:not([aria-hidden])": { opacity: "0.55" },
  },
  printableCheckbox: {
    position: "relative",
    display: "inline-block",
    width: "9px",
    height: "9px",
    flex: "0 0 9px",
    border: "0.8px solid var(--measles-border-color)",
    background: "#ffffff",
    "@media print": {
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
  checkboxLabel: { whiteSpace: "nowrap" },
  yesNoGroup: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    minWidth: "0",
  },
  inlineFieldGroup: {
    display: "flex",
    alignItems: "baseline",
    minWidth: "0",
    gap: "4px",
  },
  inlineLabel: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    fontSize: "8.5px",
    lineHeight: "1",
  },
  flexLineField: {
    width: "100%",
    height: "13px",
    flex: "1 1 auto",
    padding: "0 1px",
    fontSize: "8.5px",
    lineHeight: "1",
    verticalAlign: "baseline",
  },
  idSegment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    minWidth: "0",
  },
  idInput: {
    position: "relative",
    top: "-1px",
    height: "13px",
    padding: "0 1px",
    fontSize: "8px",
    lineHeight: "1",
    textAlign: "center",
  },
  idCaption: {
    display: "block",
    marginTop: "0",
    fontSize: "5.5px",
    fontWeight: "400",
    lineHeight: "1",
    textAlign: "center",
  },
  idSeparator: { paddingTop: "1px", fontSize: "10px", fontWeight: "700" },
  pageOne: {
    "@media print": {
      width: "190mm !important",
      height: "245mm !important",
      breakAfter: "page",
      pageBreakAfter: "always",
    },
  },
  specimenOfficerDate: {
    '& input[inputmode="numeric"]': { width: "68px", flex: "0 0 68px" },
  },
  firstLabPersonRow: {
    marginTop: "15px",
  },
  printPageReset: {
    "& *": { boxSizing: "border-box" },
    "& *::before": { boxSizing: "border-box" },
    "& *::after": { boxSizing: "border-box" },
    "& h1": { margin: "0" },
    "& h2": { margin: "0" },
    "& h3": { margin: "0" },
    "& h4": { margin: "0" },
    "& p": { margin: "0" },
    "& table": {
      borderCollapse: "collapse",
      borderSpacing: "0",
    },
    "& input": { font: "inherit" },
    "& textarea": { font: "inherit" },
    "& button": { font: "inherit" },
    "& select": { font: "inherit" },
    "@media print": {
      "& input": {
        color: "#111111 !important",
        background: "transparent !important",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      },
      "& textarea": {
        color: "#111111 !important",
        background: "transparent !important",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      },
    },
  },
  pageOneContent: {
    "@media print": { padding: "8mm 13mm 7mm 25mm !important" },
  },
  pageTwoContent: {
    padding: "8mm 20mm 7mm 22mm",
    "@media print": { padding: "8mm 20mm 7mm 22mm !important" },
  },
};

function mergeSx(...items: Array<SxProps<Theme> | undefined>): SxProps<Theme> {
  return items.flatMap((item) =>
    item == null ? [] : Array.isArray(item) ? item : [item],
  ) as SxProps<Theme>;
}

const DOCUMENT_PRINT_STYLES = {
  "@media print": {
    html: {
      margin: "0 !important",
      padding: "0 !important",
      background: "#ffffff !important",
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
    body: {
      margin: "0 !important",
      padding: "0 !important",
      background: "#ffffff !important",
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    },
  },
};

interface PrintableCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

function PrintableChoice({
  checked,
  onChange,
  label,
  name,
  disabled = false,
  sx,
  inputType = "checkbox",
  value,
}: PrintableCheckboxProps & {
  inputType?: "checkbox" | "radio";
  value?: string;
}) {
  return (
    <Box component="label" sx={mergeSx(sxStyles.checkboxWrapper, sx)}>
      <Box
        component="input"
        type={inputType}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        sx={sxStyles.printableCheckboxInput}
      />
      <Box
        component="span"
        aria-hidden="true"
        sx={sxStyles.printableCheckbox}
      />
      {label && (
        <Box component="span" sx={sxStyles.checkboxLabel}>
          {label}
        </Box>
      )}
    </Box>
  );
}

export function PrintableCheckbox(props: PrintableCheckboxProps) {
  return <PrintableChoice {...props} />;
}

interface PrintableStringFieldProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  ariaLabel?: string;
  sx?: SxProps<Theme>;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}
type PrintableLineFieldProps = PrintableStringFieldProps;
type PrintableTextFieldProps = PrintableStringFieldProps;
type PrintableDateFieldProps = Pick<
  PrintableStringFieldProps,
  "value" | "onChange" | "name" | "ariaLabel" | "sx" | "disabled"
>;

function formatDateInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function PrintableStringField({
  variant,
  value,
  onChange,
  name,
  ariaLabel,
  sx,
  placeholder,
  disabled = false,
  maxLength,
}: PrintableStringFieldProps & { variant: "date" | "line" | "text" }) {
  const baseSx =
    variant === "date"
      ? sxStyles.printableDateField
      : variant === "line"
        ? sxStyles.printableLineField
        : sxStyles.printableTextField;
  return (
    <Box
      component="input"
      type="text"
      inputMode={variant === "date" ? "numeric" : undefined}
      name={name}
      value={value}
      aria-label={ariaLabel}
      disabled={disabled}
      maxLength={variant === "date" ? 10 : maxLength}
      autoComplete="off"
      placeholder={variant === "date" ? "" : placeholder}
      sx={mergeSx(baseSx, sx)}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(
          variant === "date"
            ? formatDateInput(event.target.value)
            : event.target.value,
        )
      }
    />
  );
}
function PrintableDateField(props: PrintableDateFieldProps) {
  return <PrintableStringField {...props} variant="date" />;
}
function PrintableLineField(props: PrintableLineFieldProps) {
  return <PrintableStringField {...props} variant="line" />;
}
function PrintableTextField(props: PrintableTextFieldProps) {
  return <PrintableStringField {...props} variant="text" />;
}

interface PrintableYesNoProps {
  value: YesNo | YesNoUnknown;
  onChange: (value: YesNo | YesNoUnknown) => void;
  name: string;
  includeUnknown?: boolean;
  sx?: SxProps<Theme>;
  yesLabel?: string;
  noLabel?: string;
  unknownLabel?: string;
}
function PrintableYesNo({
  value,
  onChange,
  name,
  includeUnknown = false,
  sx,
  yesLabel = "Yes",
  noLabel = "No",
  unknownLabel = "Unknown",
}: PrintableYesNoProps) {
  const options: Array<{ value: "yes" | "no" | "unknown"; label: string }> = [
    { value: "yes", label: yesLabel },
    { value: "no", label: noLabel },
    ...(includeUnknown
      ? [{ value: "unknown" as const, label: unknownLabel }]
      : []),
  ];
  return (
    <Box
      component="div"
      role="radiogroup"
      sx={mergeSx(sxStyles.yesNoGroup, sx)}
    >
      {options.map((option) => (
        <PrintableChoice
          key={option.value}
          inputType="radio"
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
      ))}
    </Box>
  );
}

function InlinePrintableField({
  label,
  sx,
  children,
}: {
  label: ReactNode;
  sx: SxProps<Theme>;
  children: ReactNode;
}) {
  return (
    <Box component="div" sx={sx}>
      <Box component="span" sx={sxStyles.inlineLabel}>
        {label}
      </Box>
      {children}
    </Box>
  );
}

function PrintableIdSegment({
  value,
  onChange,
  ariaLabel,
  caption,
  widthSx,
}: {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  caption: string;
  widthSx: SxProps<Theme>;
}) {
  return (
    <Box component="div" sx={sxStyles.idSegment}>
      <PrintableLineField
        value={value}
        onChange={onChange}
        ariaLabel={ariaLabel}
        sx={mergeSx(widthSx, sxStyles.idInput)}
      />
      <Box component="span" sx={sxStyles.idCaption}>
        {caption}
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   HEADER SECTION
   --------------------------------------------------------- */

const outbreakIdSegments: ReadonlyArray<{
  field: keyof OutbreakId;
  caption: string;
  ariaLabel: string;
  sx: SxProps<Theme>;
}> = [
  {
    field: "districtCode",
    caption: "District Code",
    ariaLabel: "Outbreak district code",
    sx: sxStyles.idDistrict,
  },
  {
    field: "upazilaMunicipalityCode",
    caption: "Upz/CC/Mun Code",
    ariaLabel: "Outbreak Upazila, City Corporation or Municipality code",
    sx: sxStyles.idUpazila,
  },
  {
    field: "onsetYear",
    caption: "Onset Year",
    ariaLabel: "Outbreak onset year",
    sx: sxStyles.idYear,
  },
  {
    field: "outbreakNumber",
    caption: "Outbreak #",
    ariaLabel: "Outbreak number",
    sx: sxStyles.idNumber,
  },
];

function HeaderSection() {
  const { formData, setFormData } = useMeaslesForm();

  const { outbreakId } = formData.backgroundInformation;

  const updateOutbreakId = (field: keyof typeof outbreakId, value: string) => {
    setFormData((previous) => ({
      ...previous,
      backgroundInformation: {
        ...previous.backgroundInformation,
        outbreakId: {
          ...previous.backgroundInformation.outbreakId,
          [field]: value,
        },
      },
    }));
  };

  return (
    <Box component="header" sx={sxStyles.header}>
      <Box component="div" sx={sxStyles.headerTop}>
        <Stack direction="row" sx={sxStyles.headerLogoColumn}>
          {EPI_LOGO_DATA_URI && (
            <Box
              component="img"
              src={EPI_LOGO_DATA_URI}
              alt="Expanded Programme on Immunization"
              sx={sxStyles.headerLogo}
            />
          )}
        </Stack>

        <Box component="div" sx={sxStyles.headerTitleColumn}>
          <Box component="div" sx={sxStyles.programmeTitle}>
            EXPANDED PROGRAMME ON IMMUNIZATION
          </Box>

          <Typography component="h1" variant="inherit" sx={sxStyles.formTitle}>
            SUSPECTED MEASLES CASE INVESTIGATION FORM
          </Typography>

          <Box component="div" sx={sxStyles.formInstruction}>
            (Please complete every item and use dates according to the English
            system)
          </Box>

          <Stack direction="row" sx={sxStyles.outbreakRow}>
            <Box component="span" sx={sxStyles.outbreakLabel}>
              OUTBREAK ID: MSL BAN-
            </Box>

            {outbreakIdSegments.map(
              ({ field, caption, ariaLabel, sx }, index) => [
                index > 0 && (
                  <Box
                    key={`${field}-separator`}
                    component="span"
                    sx={sxStyles.idSeparator}
                  >
                    -
                  </Box>
                ),
                <PrintableIdSegment
                  key={field}
                  value={outbreakId[field]}
                  onChange={(value) => updateOutbreakId(field, value)}
                  ariaLabel={ariaLabel}
                  widthSx={sx}
                  caption={caption}
                />,
              ],
            )}
          </Stack>
        </Box>
        <Box
          component="div"
          aria-hidden="true"
          sx={sxStyles.headerBalanceColumn}
        />
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   BACKGROUND INFORMATION SECTION
   --------------------------------------------------------- */

const backgroundNotificationRows = [
  {
    date: "focalPersonNotifiedDate",
    dateLabel: "DATE FOCAL PERSON WAS NOTIFIED:",
    dateAria: "Date focal person was notified",
    name: "personNotifyingName",
    nameLabel: "NAME OF PERSON NOTIFYING:",
    nameAria: "Name of person notifying",
    nameSx: sxStyles.notifierField,
  },
  {
    date: "investigationDate",
    dateLabel: "DATE OF INVESTIGATION:",
    dateAria: "Date of investigation",
    name: "designationAddress",
    nameLabel: "Designation/Address:",
    nameAria: "Designation and address",
    nameSx: sxStyles.designationField,
  },
] as const;

function BackgroundInformationSection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const background = formData.backgroundInformation;

  const updateFacilityType = (value: HealthFacilityType) => {
    updateSectionField("backgroundInformation", "healthFacilityType", value);
  };

  const updateIndexCase = (value: YesNo) => {
    updateSectionField("backgroundInformation", "isIndexCase", value);
  };

  return (
    <Box component="section" sx={sxStyles.backgroundSection}>
      <Stack direction="row" sx={sxStyles.sectionHeadingRow}>
        <Typography
          component="h2"
          variant="inherit"
          sx={sxStyles.sectionHeading}
        >
          BACKGROUND INFORMATION
        </Typography>

        <Stack direction="row" sx={sxStyles.indexCase}>
          <Box component="span" sx={sxStyles.indexLabel}>
            Is this INDEX case?
          </Box>

          <PrintableYesNo
            name="is-index-case"
            value={background.isIndexCase}
            onChange={(value) => updateIndexCase(value as YesNo)}
          />
        </Stack>
      </Stack>

      {backgroundNotificationRows.map(
        ({ date, dateLabel, dateAria, name, nameLabel, nameAria, nameSx }) => (
          <Box
            key={date}
            component="div"
            sx={mergeSx(sxStyles.backgroundRow, sxStyles.backgroundRowTwo)}
          >
            <InlinePrintableField
              label={dateLabel}
              sx={sxStyles.inlineFieldGroup}
            >
              <PrintableDateField
                value={background[date]}
                onChange={(value) =>
                  updateSectionField("backgroundInformation", date, value)
                }
                ariaLabel={dateAria}
                sx={sxStyles.backgroundDate}
              />
            </InlinePrintableField>
            <InlinePrintableField
              label={nameLabel}
              sx={mergeSx(nameSx, sxStyles.inlineFieldGroup)}
            >
              <PrintableLineField
                value={background[name]}
                onChange={(value) =>
                  updateSectionField("backgroundInformation", name, value)
                }
                ariaLabel={nameAria}
                sx={sxStyles.flexLineField}
              />
            </InlinePrintableField>
          </Box>
        ),
      )}

      <Box
        component="div"
        sx={mergeSx(sxStyles.backgroundRow, sxStyles.facilityRow)}
      >
        <InlinePrintableField
          label="Name of health facility:"
          sx={mergeSx(sxStyles.facilityName, sxStyles.inlineFieldGroup)}
        >
          <PrintableLineField
            value={background.healthFacilityName}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "healthFacilityName",
                value,
              )
            }
            ariaLabel="Name of health facility"
            sx={mergeSx(sxStyles.healthFacilityInput, sxStyles.flexLineField)}
          />
        </InlinePrintableField>

        <Stack direction="row" sx={sxStyles.facilityType}>
          <Box component="span" sx={sxStyles.inlineLabel}>
            Type of health facility:
          </Box>

          {(
            [
              { value: "gob", label: "GOB" },
              { value: "non-gob", label: "Non GOB" },
            ] as const
          ).map(({ value, label }) => (
            <Box key={value} component="label" sx={sxStyles.checkboxWrapper}>
              <Box
                component="input"
                type="radio"
                name="health-facility-type"
                checked={background.healthFacilityType === value}
                onChange={() => updateFacilityType(value)}
                sx={sxStyles.printableCheckboxInput}
              />
              <Box
                component="span"
                aria-hidden="true"
                sx={sxStyles.printableCheckbox}
              />
              <Box component="span" sx={sxStyles.checkboxLabel}>
                {label}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box
        component="div"
        sx={mergeSx(sxStyles.backgroundRow, sxStyles.finalBackgroundRow)}
      >
        <InlinePrintableField
          label="Date of Visit / Admission:"
          sx={sxStyles.inlineFieldGroup}
        >
          <PrintableDateField
            value={background.visitAdmissionDate}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "visitAdmissionDate",
                value,
              )
            }
            ariaLabel="Date of visit or admission"
            sx={sxStyles.backgroundDate}
          />
        </InlinePrintableField>

        <InlinePrintableField
          label="Medical Record #:"
          sx={mergeSx(sxStyles.recordField, sxStyles.inlineFieldGroup)}
        >
          <PrintableLineField
            value={background.medicalRecordNumber}
            onChange={(value) =>
              updateSectionField(
                "backgroundInformation",
                "medicalRecordNumber",
                value,
              )
            }
            ariaLabel="Medical record number"
            sx={sxStyles.flexLineField}
          />
        </InlinePrintableField>
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   PATIENT IDENTIFICATION SECTION
   --------------------------------------------------------- */

const ruralPatientFields = [
  {
    field: "village",
    label: "Village:",
    aria: "Rural village",
    sx: mergeSx(sxStyles.locationInput, sxStyles.villageInput),
  },
  {
    field: "union",
    label: "Union:",
    aria: "Rural union",
    sx: mergeSx(sxStyles.locationInput, sxStyles.unionInput),
  },
  {
    field: "upazila",
    label: "Upazila:",
    aria: "Rural upazila",
    sx: mergeSx(sxStyles.locationInput, sxStyles.upazilaInput),
  },
  {
    field: "district",
    label: "District:",
    aria: "Rural district",
    sx: mergeSx(sxStyles.locationInput, sxStyles.ruralDistrictInput),
  },
] as const;

const urbanPatientFields = [
  {
    field: "mahalla",
    label: "Mahalla:",
    aria: "Urban mahalla",
    sx: mergeSx(sxStyles.locationInput, sxStyles.mahallaInput),
  },
  {
    field: "wardNumber",
    label: "Ward #:",
    aria: "Urban ward number",
    sx: sxStyles.wardInput,
  },
  { field: "zone", label: "Zone:", aria: "Urban zone", sx: sxStyles.zoneInput },
  {
    field: "municipalityCityCorporation",
    label: "Municipality/CC:",
    aria: "Municipality or City Corporation",
    sx: sxStyles.municipalityInput,
  },
  {
    field: "district",
    label: "District:",
    aria: "Urban district",
    sx: sxStyles.urbanDistrictInput,
  },
] as const;

const caseIdSegments: ReadonlyArray<{
  field: keyof CaseId;
  caption: string;
  ariaLabel: string;
  sx: SxProps<Theme>;
}> = [
  {
    field: "districtCode",
    caption: "District Code",
    ariaLabel: "Case district code",
    sx: sxStyles.caseIdDistrict,
  },
  {
    field: "upazilaMunicipalityCode",
    caption: "Upz/CC/Mun Code",
    ariaLabel: "Case Upazila, City Corporation or Municipality code",
    sx: sxStyles.caseIdUpazila,
  },
  {
    field: "onsetYear",
    caption: "Onset Year",
    ariaLabel: "Case onset year",
    sx: sxStyles.caseIdYear,
  },
  {
    field: "caseNumber",
    caption: "Case #",
    ariaLabel: "Case number",
    sx: sxStyles.caseIdNumber,
  },
];

function PatientIdentificationSection() {
  const { formData, updateSectionField, setFormData } = useMeaslesForm();

  const patient = formData.patientIdentification;

  const updateCaseId = (field: keyof typeof patient.caseId, value: string) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        caseId: {
          ...previous.patientIdentification.caseId,
          [field]: value,
        },
      },
    }));
  };

  const updateRuralField = (
    field: keyof typeof patient.rural,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        rural: {
          ...previous.patientIdentification.rural,
          [field]: value,
        },
      },
    }));
  };

  const updateUrbanField = (
    field: keyof typeof patient.urban,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      patientIdentification: {
        ...previous.patientIdentification,
        urban: {
          ...previous.patientIdentification.urban,
          [field]: value,
        },
      },
    }));
  };

  const updateSex = (value: Sex) => {
    updateSectionField("patientIdentification", "sex", value);
  };

  return (
    <Box component="section" sx={sxStyles.patientSection}>
      <Stack direction="row" sx={sxStyles.patientHeadingRow}>
        <Typography
          component="h2"
          variant="inherit"
          sx={sxStyles.sectionHeading}
        >
          PATIENT IDENTIFICATION
        </Typography>

        <Stack direction="row" sx={sxStyles.caseIdRow}>
          <Box component="span" sx={sxStyles.caseIdLabel}>
            CASE ID NUMBER: MSL BAN-
          </Box>

          {caseIdSegments.map(({ field, caption, ariaLabel, sx }, index) => [
            index > 0 && (
              <Box
                key={`${field}-separator`}
                component="span"
                sx={sxStyles.idSeparator}
              >
                -
              </Box>
            ),
            <PrintableIdSegment
              key={field}
              value={patient.caseId[field]}
              onChange={(value) => updateCaseId(field, value)}
              ariaLabel={ariaLabel}
              widthSx={sx}
              caption={caption}
            />,
          ])}
        </Stack>
      </Stack>

      <Box
        component="div"
        sx={mergeSx(sxStyles.patientRow, sxStyles.patientNameRow)}
      >
        <InlinePrintableField
          label="Patient's Name:"
          sx={sxStyles.inlineFieldGroup}
        >
          <PrintableLineField
            value={patient.patientName}
            onChange={(value) =>
              updateSectionField("patientIdentification", "patientName", value)
            }
            ariaLabel="Patient name"
            sx={mergeSx(sxStyles.patientNameInput, sxStyles.flexLineField)}
          />
        </InlinePrintableField>

        <InlinePrintableField
          label="Father's/Guardian's Name:"
          sx={sxStyles.inlineFieldGroup}
        >
          <PrintableLineField
            value={patient.fatherGuardianName}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "fatherGuardianName",
                value,
              )
            }
            ariaLabel="Father or guardian name"
            sx={mergeSx(sxStyles.guardianNameInput, sxStyles.flexLineField)}
          />
        </InlinePrintableField>

        <InlinePrintableField
          label="Contact Number:"
          sx={sxStyles.inlineFieldGroup}
        >
          <PrintableLineField
            value={patient.contactNumber}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "contactNumber",
                value,
              )
            }
            ariaLabel="Contact number"
            sx={mergeSx(sxStyles.contactInput, sxStyles.flexLineField)}
          />
        </InlinePrintableField>
      </Box>

      <Box
        component="div"
        sx={mergeSx(sxStyles.patientRow, sxStyles.demographicRow)}
      >
        <Stack direction="row" sx={sxStyles.inlineFieldGroup}>
          <Box component="span" sx={sxStyles.inlineLabel}>
            Date of Birth:
          </Box>

          <PrintableDateField
            value={patient.dateOfBirth}
            onChange={(value) =>
              updateSectionField("patientIdentification", "dateOfBirth", value)
            }
            ariaLabel="Date of birth"
            sx={sxStyles.patientDob}
          />

          <Box component="span" sx={sxStyles.patientOr}>
            OR
          </Box>

          <Box component="span" sx={sxStyles.inlineLabel}>
            Age:
          </Box>

          <PrintableLineField
            value={patient.age}
            onChange={(value) =>
              updateSectionField("patientIdentification", "age", value)
            }
            ariaLabel="Age"
            sx={sxStyles.ageInput}
          />
        </Stack>

        <Stack direction="row" sx={sxStyles.sexGroup}>
          <Box component="span" sx={sxStyles.inlineLabel}>
            Sex:
          </Box>

          {(["male", "female"] as const).map((sex) => (
            <Box component="label" sx={sxStyles.checkboxWrapper} key={sex}>
              <Box component="span" sx={sxStyles.checkboxLabel}>
                {sex === "male" ? "M" : "F"}
              </Box>
              <Box
                component="input"
                type="radio"
                name="patient-sex"
                checked={patient.sex === sex}
                onChange={() => updateSex(sex)}
                sx={sxStyles.printableCheckboxInput}
              />
              <Box
                component="span"
                aria-hidden="true"
                sx={sxStyles.printableCheckbox}
              />
            </Box>
          ))}
        </Stack>

        <InlinePrintableField
          label="Religion:"
          sx={mergeSx(sxStyles.religionGroup, sxStyles.inlineFieldGroup)}
        >
          <PrintableLineField
            value={patient.religion}
            onChange={(value) =>
              updateSectionField("patientIdentification", "religion", value)
            }
            ariaLabel="Religion"
            sx={sxStyles.religionInput}
          />
        </InlinePrintableField>

        <InlinePrintableField
          label="House &amp; Street Address:"
          sx={mergeSx(sxStyles.addressGroup, sxStyles.inlineFieldGroup)}
        >
          <PrintableLineField
            value={patient.houseStreetAddress}
            onChange={(value) =>
              updateSectionField(
                "patientIdentification",
                "houseStreetAddress",
                value,
              )
            }
            ariaLabel="House and street address"
            sx={mergeSx(sxStyles.houseAddressInput, sxStyles.flexLineField)}
          />
        </InlinePrintableField>
      </Box>

      <Box
        component="div"
        sx={mergeSx(sxStyles.patientRow, sxStyles.locationRow)}
      >
        <Box component="span" sx={sxStyles.locationPrefix}>
          If Rural;
        </Box>

        {ruralPatientFields.map(({ field, label, aria, sx }) => (
          <InlinePrintableField
            key={field}
            label={label}
            sx={sxStyles.inlineFieldGroup}
          >
            <PrintableLineField
              value={patient.rural[field]}
              onChange={(value) => updateRuralField(field, value)}
              ariaLabel={aria}
              sx={sx}
            />
          </InlinePrintableField>
        ))}
      </Box>

      <Box
        component="div"
        sx={mergeSx(
          sxStyles.patientRow,
          sxStyles.locationRow,
          sxStyles.urbanRow,
        )}
      >
        <Box component="span" sx={sxStyles.locationPrefix}>
          If Urban;
        </Box>

        {urbanPatientFields.map(({ field, label, aria, sx }) => (
          <InlinePrintableField
            key={field}
            label={label}
            sx={sxStyles.inlineFieldGroup}
          >
            <PrintableLineField
              value={patient.urban[field]}
              onChange={(value) => updateUrbanField(field, value)}
              ariaLabel={aria}
              sx={sx}
            />
          </InlinePrintableField>
        ))}
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   CLINICAL INFORMATION SECTION
   --------------------------------------------------------- */

const clinicalQuestionRows = [
  {
    field: "fever",
    dateField: "feverOnsetDate",
    question: "1. Fever?",
    dateLabel: "Date of onset of fever:",
    ariaLabel: "Date of onset of fever",
    name: "clinical-fever",
  },
  {
    field: "generalizedMaculopapularRash",
    dateField: "rashOnsetDate",
    question: "2. Generalized maculopapular rash?",
    dateLabel: "Date of onset of rash:",
    ariaLabel: "Date of onset of rash",
    name: "clinical-generalized-rash",
  },
] as const;

function ClinicalInformationSection() {
  const { formData, updateSectionField } = useMeaslesForm();
  const clinical = formData.clinicalInformation;

  return (
    <Box component="section" sx={sxStyles.clinicalSection}>
      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.clinicalHeading, sxStyles.sectionHeading)}
      >
        CLINICAL INFORMATION
      </Typography>
      <Table sx={sxStyles.clinicalTable}>
        <TableBody>
          {clinicalQuestionRows.map((row) => (
            <TableRow key={row.field}>
              <Box component="td" sx={sxStyles.clinicalMainCell}>
                <Stack direction="row" sx={sxStyles.clinicalQuestionGroup}>
                  <Box component="span" sx={sxStyles.clinicalQuestion}>
                    {row.question}
                  </Box>
                  <PrintableYesNo
                    name={row.name}
                    value={clinical[row.field]}
                    onChange={(value) =>
                      updateSectionField(
                        "clinicalInformation",
                        row.field,
                        value as YesNo,
                      )
                    }
                  />
                </Stack>
              </Box>
              <Box component="td" sx={sxStyles.clinicalDateCell}>
                <Box component="div" sx={sxStyles.clinicalDateGroup}>
                  <Box component="span" sx={sxStyles.clinicalDateLabel}>
                    {row.dateLabel}
                  </Box>
                  <PrintableDateField
                    value={clinical[row.dateField]}
                    onChange={(value) =>
                      updateSectionField(
                        "clinicalInformation",
                        row.dateField,
                        value,
                      )
                    }
                    ariaLabel={row.ariaLabel}
                    sx={sxStyles.clinicalDateInput}
                  />
                </Box>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

/* ---------------------------------------------------------
   ADDITIONAL CLINICAL INFORMATION SECTION
   --------------------------------------------------------- */

const additionalSymptomRows = [
  [
    { field: "cough", label: "1. Cough?", name: "additional-cough" },
    { field: "coryza", label: "2. Coryza?", name: "additional-coryza" },
    {
      field: "conjunctivitis",
      label: "3. Conjunctivitis?",
      name: "additional-conjunctivitis",
    },
  ],
  [
    {
      field: "subOccipital",
      label: "5a. Sub-occipital?",
      name: "additional-sub-occipital",
    },
    {
      field: "postAuricular",
      label: "5b. Post auricular?",
      name: "additional-post-auricular",
    },
    { field: "cervical", label: "5c. Cervical?", name: "additional-cervical" },
  ],
] as const;

function AdditionalClinicalInformationSection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const additional = formData.additionalClinicalInformation;

  return (
    <Box component="section" sx={sxStyles.additionalClinicalSection}>
      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(
          sxStyles.additionalClinicalHeading,
          sxStyles.sectionHeading,
        )}
      >
        ADDITIONAL CLINICAL INFORMATION
      </Typography>

      <Box component="div" sx={sxStyles.additionalClinicalGrid}>
        <Box
          component="div"
          sx={mergeSx(sxStyles.additionalRow, sxStyles.additionalRowThree)}
        >
          {additionalSymptomRows[0].map(({ field, label, name }) => (
            <Stack direction="row" key={field} sx={sxStyles.additionalCell}>
              <Stack direction="row" sx={sxStyles.additionalQuestionRow}>
                <Box component="span" sx={sxStyles.additionalQuestionText}>
                  {label}
                </Box>
                <PrintableYesNo
                  name={name}
                  value={additional[field]}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      field,
                      value as YesNo,
                    )
                  }
                />
              </Stack>
            </Stack>
          ))}
        </Box>

        <Box
          component="div"
          sx={mergeSx(sxStyles.additionalRow, sxStyles.additionalRowOne)}
        >
          <Stack direction="row" sx={sxStyles.additionalCell}>
            <Box component="div" sx={sxStyles.additionalRowTwoContent}>
              <Box
                component="div"
                sx={mergeSx(
                  sxStyles.additionalQuestionRow,
                  sxStyles.additionalJointQuestion,
                )}
              >
                <Box component="span" sx={sxStyles.additionalQuestionText}>
                  4. Joint pain (arthralgia or arthritis)?
                </Box>

                <PrintableYesNo
                  name="additional-joint-pain"
                  value={additional.jointPain}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "jointPain",
                      value as YesNo,
                    )
                  }
                />
              </Box>

              <Box
                component="div"
                sx={mergeSx(
                  sxStyles.additionalJointDetails,
                  sxStyles.additionalInlineField,
                )}
              >
                <Box component="span">
                  4a. If <Box component="strong">YES</Box>, which joint/s (note
                  all):
                </Box>

                <PrintableLineField
                  value={additional.jointsAffected}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "jointsAffected",
                      value,
                    )
                  }
                  ariaLabel="Joints affected"
                  sx={sxStyles.additionalJointsInput}
                />
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box
          component="div"
          sx={mergeSx(sxStyles.additionalRow, sxStyles.additionalRowOne)}
        >
          <Stack direction="row" sx={sxStyles.additionalCell}>
            <Box component="div" sx={sxStyles.additionalRowThreeContent}>
              <Box
                component="div"
                sx={mergeSx(
                  sxStyles.additionalQuestionRow,
                  sxStyles.additionalLymphQuestion,
                )}
              >
                <Box component="span" sx={sxStyles.additionalQuestionText}>
                  5. Lymph node swelling (lymphadenopathe)?
                </Box>

                <PrintableYesNo
                  name="additional-lymph-node-swelling"
                  value={additional.lymphNodeSwelling}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      "lymphNodeSwelling",
                      value as YesNo,
                    )
                  }
                />
              </Box>

              <Box component="div" sx={sxStyles.additionalLymphInstruction}>
                If <Box component="strong">YES</Box>, where{" "}
                <Box component="strong">
                  <Box component="em">(mark all that apply)?</Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box
          component="div"
          sx={mergeSx(sxStyles.additionalRow, sxStyles.additionalRowThree)}
        >
          {additionalSymptomRows[1].map(({ field, label, name }) => (
            <Stack direction="row" key={field} sx={sxStyles.additionalCell}>
              <Stack direction="row" sx={sxStyles.additionalQuestionRow}>
                <Box component="span" sx={sxStyles.additionalQuestionText}>
                  {label}
                </Box>
                <PrintableYesNo
                  name={name}
                  value={additional[field]}
                  onChange={(value) =>
                    updateSectionField(
                      "additionalClinicalInformation",
                      field,
                      value as YesNo,
                    )
                  }
                />
              </Stack>
            </Stack>
          ))}
        </Box>

        <Box
          component="div"
          sx={mergeSx(sxStyles.additionalRow, sxStyles.additionalRowTwo)}
        >
          <Stack direction="row" sx={sxStyles.additionalCell}>
            <Stack direction="row" sx={sxStyles.additionalQuestionRow}>
              <Box component="span" sx={sxStyles.additionalQuestionText}>
                6. Pregnant (when applicable)?
              </Box>

              <PrintableYesNo
                name="additional-pregnant"
                value={additional.pregnant}
                includeUnknown
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "pregnant",
                    value as YesNoUnknown,
                  )
                }
              />
            </Stack>
          </Stack>

          <Stack direction="row" sx={sxStyles.additionalCell}>
            <Stack direction="row" sx={sxStyles.additionalInlineField}>
              <Box component="span">
                6a. If <Box component="strong">YES</Box>, duration in weeks
              </Box>

              <PrintableLineField
                value={additional.pregnancyDurationWeeks}
                onChange={(value) =>
                  updateSectionField(
                    "additionalClinicalInformation",
                    "pregnancyDurationWeeks",
                    value,
                  )
                }
                ariaLabel="Pregnancy duration in weeks"
                sx={sxStyles.additionalPregnancyWeeksInput}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   VACCINATION HISTORY SECTION
   --------------------------------------------------------- */

const vaccinationDoseColumns = [
  { field: "routineByCard", aria: "routine doses by card" },
  { field: "routineByHistory", aria: "routine doses by history" },
  { field: "sia", aria: "SIA doses" },
] as const;

function VaccinationHistorySection() {
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
    <Box component="section" sx={sxStyles.vaccinationSection}>
      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.vaccinationHeading, sxStyles.sectionHeading)}
      >
        VACCINATION HISTORY
      </Typography>

      <Table sx={sxStyles.vaccinationTable}>
        <TableHead>
          <TableRow>
            <Box
              component="th"
              rowSpan={3}
              sx={mergeSx(sxStyles.vaccinationVaccineHeader, {
                textAlign: "start !important",
              })}
            >
              Type of Vaccine
            </Box>

            <Box
              component="th"
              colSpan={3}
              sx={sxStyles.vaccinationDosesHeader}
            >
              Number of doses
            </Box>

            <Box component="th" rowSpan={3} sx={sxStyles.vaccinationDateHeader}>
              <Box component="span">Date of last dose</Box>
              <Box component="span" sx={sxStyles.vaccinationDateFormat}>
                (dd/mm/yyyy)
              </Box>
            </Box>
          </TableRow>

          <TableRow>
            <Box
              component="th"
              colSpan={2}
              sx={sxStyles.vaccinationRoutineHeader}
            >
              Routine
            </Box>

            <Box component="th" rowSpan={2} sx={sxStyles.vaccinationSiaHeader}>
              SIA
            </Box>
          </TableRow>

          <TableRow>
            <Box component="th" sx={sxStyles.vaccinationSubHeader}>
              By Card
            </Box>

            <Box component="th" sx={sxStyles.vaccinationSubHeader}>
              By History
            </Box>
          </TableRow>
        </TableHead>

        <TableBody>
          {vaccinationHistory.map((row, index) => (
            <TableRow key={row.vaccineType}>
              <Box component="td" sx={sxStyles.vaccinationVaccineCell}>
                {row.vaccineType}
              </Box>

              {vaccinationDoseColumns.map(({ field, aria }) => (
                <Box
                  component="td"
                  key={field}
                  sx={sxStyles.vaccinationInputCell}
                >
                  <PrintableTextField
                    value={row[field]}
                    onChange={(value) =>
                      updateVaccinationRow(index, field, value)
                    }
                    ariaLabel={`${row.vaccineType} ${aria}`}
                    sx={sxStyles.vaccinationNumberInput}
                  />
                </Box>
              ))}

              <Box component="td" sx={sxStyles.vaccinationDateCell}>
                <PrintableDateField
                  value={row.lastDoseDate}
                  onChange={(value) =>
                    updateVaccinationRow(index, "lastDoseDate", value)
                  }
                  ariaLabel={`${row.vaccineType} date of last dose`}
                  sx={sxStyles.vaccinationDateInput}
                />
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

/* ---------------------------------------------------------
   TRAVEL HISTORY SECTION
   --------------------------------------------------------- */

function TravelHistorySection() {
  const { formData, updateSectionField } = useMeaslesForm();

  const travel = formData.travelHistory;

  return (
    <Box component="section" sx={sxStyles.travelSection}>
      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.travelHeading, sxStyles.sectionHeading)}
      >
        TRAVEL HISTORY
      </Typography>

      <Box component="div" sx={sxStyles.travelFlow}>
        <Box component="span">
          Did the case travel outside his/her village/ mahalla during the 30
          days before or within 7 days after rash onset OR any person visited
          the house/village/community of the case under investigation from an
          area/community of recent measles/rubella transmission during 30 days
          prior to rash onset?
        </Box>

        <PrintableYesNo
          name="travel-history-response"
          value={travel.traveledOrReceivedVisitor}
          includeUnknown
          yesLabel="YES"
          noLabel="NO"
          unknownLabel="Unknown"
          onChange={(value) =>
            updateSectionField(
              "travelHistory",
              "traveledOrReceivedVisitor",
              value as YesNoUnknown,
            )
          }
        />

        <Box component="span" sx={sxStyles.travelBoldLabel}>
          If YES, period of travel:
        </Box>

        <PrintableDateField
          value={travel.travelStartDate}
          onChange={(value) =>
            updateSectionField("travelHistory", "travelStartDate", value)
          }
          ariaLabel="Travel start date"
          sx={sxStyles.travelDateInput}
        />

        <Box component="span">to</Box>

        <PrintableDateField
          value={travel.travelEndDate}
          onChange={(value) =>
            updateSectionField("travelHistory", "travelEndDate", value)
          }
          ariaLabel="Travel end date"
          sx={sxStyles.travelDateInput}
        />

        <Box component="span">Place to/from travel:</Box>

        <PrintableLineField
          value={travel.placeToFromTravel}
          onChange={(value) =>
            updateSectionField("travelHistory", "placeToFromTravel", value)
          }
          ariaLabel="Place to or from travel"
          sx={sxStyles.travelPlaceInput}
        />

        <Box component="span">House and Street Address:</Box>

        <PrintableLineField
          value={travel.houseStreetAddress}
          onChange={(value) =>
            updateSectionField("travelHistory", "houseStreetAddress", value)
          }
          ariaLabel="Travel house and street address"
          sx={sxStyles.travelStreetInput}
        />

        <Box component="span">Village/Mahalla:</Box>

        <PrintableLineField
          value={travel.villageMahalla}
          onChange={(value) =>
            updateSectionField("travelHistory", "villageMahalla", value)
          }
          ariaLabel="Travel village or mahalla"
          sx={sxStyles.travelVillageInput}
        />

        <Box component="span">Union/Ward:</Box>

        <PrintableLineField
          value={travel.unionWard}
          onChange={(value) =>
            updateSectionField("travelHistory", "unionWard", value)
          }
          ariaLabel="Travel union or ward"
          sx={sxStyles.travelUnionInput}
        />

        <Box component="span">Upazila/Muni/CC:</Box>

        <PrintableLineField
          value={travel.upazilaMunicipalityCityCorporation}
          onChange={(value) =>
            updateSectionField(
              "travelHistory",
              "upazilaMunicipalityCityCorporation",
              value,
            )
          }
          ariaLabel="Travel Upazila Municipality or City Corporation"
          sx={sxStyles.travelUpazilaInput}
        />

        <Box component="span">District:</Box>

        <PrintableLineField
          value={travel.district}
          onChange={(value) =>
            updateSectionField("travelHistory", "district", value)
          }
          ariaLabel="Travel district"
          sx={sxStyles.travelDistrictInput}
        />
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------
   SPECIMEN COLLECTION SECTION
   --------------------------------------------------------- */

const specimenOfficerRows: ReadonlyArray<{
  kind: string;
  fields: ReadonlyArray<{
    key: keyof Pick<
      SpecimenCollection,
      | "caseInvestigatedBy"
      | "investigatorDesignation"
      | "investigatorSignature"
      | "investigatorDate"
      | "reportSentBy"
      | "reportSenderDesignation"
      | "reportSenderSignature"
      | "reportSentDate"
    >;
    label: string;
    ariaLabel: string;
    date?: boolean;
  }>;
}> = [
  {
    kind: "investigator",
    fields: [
      {
        key: "caseInvestigatedBy",
        label: "Case Investigated by:",
        ariaLabel: "Case investigated by",
      },
      {
        key: "investigatorDesignation",
        label: "Designation:",
        ariaLabel: "Investigator designation",
      },
      {
        key: "investigatorSignature",
        label: "Signature:",
        ariaLabel: "Investigator signature",
      },
      {
        key: "investigatorDate",
        label: "Date:",
        ariaLabel: "Investigation date",
        date: true,
      },
    ],
  },
  {
    kind: "report",
    fields: [
      {
        key: "reportSentBy",
        label: "Report sent by:",
        ariaLabel: "Report sent by",
      },
      {
        key: "reportSenderDesignation",
        label: "Designation:",
        ariaLabel: "Report sender designation",
      },
      {
        key: "reportSenderSignature",
        label: "Signature:",
        ariaLabel: "Report sender signature",
      },
      {
        key: "reportSentDate",
        label: "Date:",
        ariaLabel: "Report sent date",
        date: true,
      },
    ],
  },
];

const specimenLabels: Record<
  SpecimenCollectionRow["specimen"],
  { label: string; note: string }
> = {
  serum: { label: "Serum", note: "(between 3-28 days of rash onset)" },
  dbs: { label: "DBS", note: "(between 3-28 days of rash onset)" },
  urine: { label: "Urine", note: "(within 5 days of rash onset)" },
  "nasopharyngeal-swab": {
    label: "Nasopharyngeal swab",
    note: "(within 7 days of rash onset)",
  },
};

const specimenDateColumns = [
  { field: "dateCollected", aria: "date collected" },
  { field: "dateSentToNpml", aria: "date sent to NPML" },
  { field: "dateReceivedAtNpml", aria: "date received at NPML" },
] as const;

function SpecimenCollectionSection() {
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
    const { label, note } = specimenLabels[specimen];
    return (
      <>
        {label}{" "}
        <Box component="span" sx={sxStyles.specimenNote}>
          {note}
        </Box>
      </>
    );
  };

  return (
    <Box component="section" sx={sxStyles.specimenSection}>
      <Box component="div" sx={sxStyles.specimenHeadingRow}>
        <Typography
          component="h2"
          variant="inherit"
          sx={mergeSx(sxStyles.specimenHeading, sxStyles.sectionHeading)}
        >
          SPECIMEN COLLECTION
        </Typography>

        <Stack direction="row" sx={sxStyles.specimenNpmlBox}>
          To be completed at NPML, IPH, Dhaka
        </Stack>
      </Box>

      <Table sx={sxStyles.specimenTable}>
        <TableHead>
          <TableRow>
            <Box component="th" sx={sxStyles.specimenTypeColumn}>
              Specimen
            </Box>

            <Box component="th" sx={sxStyles.specimenDateColumn}>
              Date collected
            </Box>

            <Box component="th" sx={sxStyles.specimenDateColumn}>
              Date sent to NPML
            </Box>

            <Box component="th" sx={sxStyles.specimenDateColumn}>
              Date Received at NPML
            </Box>

            <Box component="th" sx={sxStyles.specimenCodeColumn}>
              Specimen Code
            </Box>
          </TableRow>
        </TableHead>

        <TableBody>
          {specimenCollection.rows.map((row, index) => (
            <TableRow key={row.specimen}>
              <Box component="td" sx={sxStyles.specimenNameCell}>
                {getSpecimenLabel(row.specimen)}
              </Box>

              {specimenDateColumns.map(({ field, aria }) => (
                <Box component="td" key={field} sx={sxStyles.specimenDateCell}>
                  <PrintableDateField
                    value={row[field]}
                    onChange={(value) => updateSpecimenRow(index, field, value)}
                    ariaLabel={`${row.specimen} ${aria}`}
                    sx={sxStyles.specimenDateInput}
                  />
                </Box>
              ))}
              <Box component="td" sx={sxStyles.specimenCodeCell}>
                <PrintableLineField
                  value={row.specimenCode}
                  onChange={(value) =>
                    updateSpecimenRow(index, "specimenCode", value)
                  }
                  ariaLabel={`${row.specimen} specimen code`}
                  sx={sxStyles.specimenCodeInput}
                />
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {specimenOfficerRows.map((row) => (
        <Box component="div" key={row.kind} sx={sxStyles.specimenOfficerRow}>
          {row.fields.map((field) => (
            <Stack
              direction="row"
              key={field.key}
              sx={mergeSx(
                sxStyles.specimenOfficerField,
                field.date ? sxStyles.specimenOfficerDate : undefined,
              )}
            >
              <Box component="span">{field.label}</Box>
              {field.date ? (
                <PrintableDateField
                  value={specimenCollection[field.key]}
                  onChange={(value) =>
                    updateSectionField("specimenCollection", field.key, value)
                  }
                  ariaLabel={field.ariaLabel}
                />
              ) : (
                <PrintableLineField
                  value={specimenCollection[field.key]}
                  onChange={(value) =>
                    updateSectionField("specimenCollection", field.key, value)
                  }
                  ariaLabel={field.ariaLabel}
                />
              )}
            </Stack>
          ))}
        </Box>
      ))}
    </Box>
  );
}

/* ---------------------------------------------------------
   SPECIMEN CONDITION SECTION
   --------------------------------------------------------- */

type SpecimenKey = keyof SpecimenCondition;
type ConditionField = keyof SpecimenConditionItem;
const specimenConditionRows: ReadonlyArray<{
  key: keyof SpecimenCondition;
  label: string;
}> = [
  { key: "serum", label: "Serum" },
  { key: "dbs", label: "DBS" },
  { key: "urine", label: "Urine" },
  { key: "nasopharyngealSwab", label: "Nasopharyngeal swab" },
];
const specimenConditionFields: readonly (keyof SpecimenConditionItem)[] = [
  "cold",
  "sufficientQuantity",
  "leakage",
  "turbid",
  "desiccated",
];

function SpecimenConditionSection() {
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
    <Box component="section" sx={sxStyles.specimenConditionSection}>
      <Box component="div" sx={sxStyles.laboratoryUseHeading}>
        FOR LABORATORY USE ONLY
      </Box>

      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.specimenConditionHeading, sxStyles.sectionHeading)}
      >
        SPECIMEN CONDITION
      </Typography>

      <Table sx={sxStyles.specimenConditionTable}>
        <TableHead>
          <TableRow>
            <Box component="th" sx={sxStyles.specimenConditionNameColumn}>
              Specimen
            </Box>

            <Box component="th">Cold?</Box>

            <Box component="th">
              <Box
                component="span"
                sx={sxStyles.specimenConditionTwoLineHeader}
              >
                Sufficient
                <Box component="br" />
                Quantity?
              </Box>
            </Box>

            <Box component="th">Leakage?</Box>

            <Box component="th">Turbid?</Box>

            <Box component="th">Desiccated?</Box>
          </TableRow>
        </TableHead>

        <TableBody>
          {specimenConditionRows.map(({ key, label }) => (
            <TableRow key={key}>
              <Box component="td" sx={sxStyles.specimenConditionNameCell}>
                {label}
              </Box>
              {specimenConditionFields.map((field) =>
                key === "dbs" && field !== "sufficientQuantity" ? (
                  <Box
                    component="td"
                    key={field}
                    aria-label="Not applicable"
                    sx={sxStyles.specimenConditionNaCell}
                  />
                ) : (
                  <Box
                    component="td"
                    key={field}
                    sx={sxStyles.specimenConditionAnswerCell}
                  >
                    {renderYesNo(key, field)}
                  </Box>
                ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

type IgMKey =
  | "serumIgmMeasles"
  | "serumIgmRubella"
  | "dbsIgmMeasles"
  | "dbsIgmRubella";

type VirusGroupKey = "measlesVirusIsolation" | "rubellaVirusIsolation";

type VirusTestKey = "urine" | "nasopharyngealSwab" | "oralFluid";

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

const laboratoryPeople = [
  {
    kind: "delivering",
    nameKey: "deliveringPersonName",
    designationKey: "deliveringPersonDesignation",
    signatureKey: "deliveringPersonSignature",
    dateKey: "deliveringDate",
    dateAria: "Date specimen delivered",
  },
  {
    kind: "receiving",
    nameKey: "receivingPersonName",
    designationKey: "receivingPersonDesignation",
    signatureKey: "receivingPersonSignature",
    dateKey: "receivingDate",
    dateAria: "Date specimen received",
  },
] as const;

const labRadioIcon = <Box component="span" sx={sxStyles.labResultBox} />;
const labRadioCheckedIcon = (
  <Box
    component="span"
    sx={mergeSx(sxStyles.labResultBox, sxStyles.labResultCheckedBox)}
  />
);

function LaboratoryResultSection() {
  const { formData, setFormData, updateSectionField } = useMeaslesForm();

  const laboratory = formData.laboratoryResult;

  const updateIgM = <K extends keyof LaboratoryIgMResult>(
    key: IgMKey,
    field: K,
    value: LaboratoryIgMResult[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      laboratoryResult: {
        ...previous.laboratoryResult,
        [key]: { ...previous.laboratoryResult[key], [field]: value },
      },
    }));
  };

  const updateVirusTest = <K extends keyof VirusIsolationTest>(
    group: VirusGroupKey,
    test: VirusTestKey,
    field: K,
    value: VirusIsolationTest[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      laboratoryResult: {
        ...previous.laboratoryResult,
        [group]: {
          ...previous.laboratoryResult[group],
          [test]: { ...previous.laboratoryResult[group][test], [field]: value },
        },
      },
    }));
  };

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

  const renderLabOptions = <
    T extends LaboratoryResultStatus | VirusIsolationResult,
  >(
    name: string,
    value: T,
    onChange: (value: T) => void,
    options: ReadonlyArray<{ value: Exclude<T, "">; label: string }>,
    virus = false,
  ) => (
    <RadioGroup
      row
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value as T)}
      sx={
        virus
          ? mergeSx(sxStyles.labResultOptions, sxStyles.labVirusOptions)
          : sxStyles.labResultOptions
      }
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          label={option.label}
          sx={sxStyles.labResultOption}
          control={
            <Radio
              disableRipple
              icon={labRadioIcon}
              checkedIcon={labRadioCheckedIcon}
              sx={sxStyles.labResultRadio}
            />
          }
        />
      ))}
    </RadioGroup>
  );

  const renderIgMRow = (key: IgMKey, label: string) => {
    const item = laboratory[key];

    return (
      <TableRow key={key}>
        <Box component="td" sx={sxStyles.labSpecimenCell}>
          {label}
        </Box>

        <Box component="td" sx={sxStyles.labResultCell}>
          {renderLabOptions(
            `laboratory-${key}`,
            item.result,
            (value) => updateIgM(key, "result", value),
            igmOptions,
          )}
        </Box>

        <Box component="td" sx={sxStyles.labDateCell}>
          <PrintableDateField
            value={item.dateOfResult}
            onChange={(value) => updateIgM(key, "dateOfResult", value)}
            ariaLabel={`${label} date of result`}
            sx={sxStyles.labDateInput}
          />
        </Box>
      </TableRow>
    );
  };

  const renderVirusRow = (
    group: VirusGroupKey,
    test: VirusTestKey,
    label: string,
  ) => {
    const item = laboratory[group][test];

    return (
      <TableRow key={`${group}-${test}`}>
        <Box component="td" sx={sxStyles.labSpecimenCell}>
          {label}
        </Box>

        <Box component="td" sx={sxStyles.labResultCell}>
          {renderLabOptions(
            `laboratory-${group}-${test}`,
            item.result,
            (value) => updateVirusTest(group, test, "result", value),
            virusOptions,
            true,
          )}
        </Box>

        <Box component="td" sx={sxStyles.labDateCell}>
          <PrintableDateField
            value={item.dateOfResult}
            onChange={(value) =>
              updateVirusTest(group, test, "dateOfResult", value)
            }
            ariaLabel={`${label} date of result`}
            sx={sxStyles.labDateInput}
          />
        </Box>
      </TableRow>
    );
  };

  const renderVirusGroup = (
    group: VirusGroupKey,
    heading: string,
    genotypeLabel: string,
  ) => (
    <>
      <TableRow>
        <Box component="th" colSpan={3} sx={sxStyles.labIsolationHeading}>
          {heading}
        </Box>
      </TableRow>
      {renderVirusRow(group, "urine", "Urine")}
      {renderVirusRow(group, "nasopharyngealSwab", "Nasopharyngeal swab")}
      {renderVirusRow(group, "oralFluid", "Oral Fluid")}
      <TableRow>
        <Box component="td" colSpan={2} sx={sxStyles.labGenotypeCell}>
          <Stack direction="row" sx={sxStyles.labGenotypeGroup}>
            <Box component="span">{genotypeLabel}</Box>
            <PrintableLineField
              value={laboratory[group].genotype}
              onChange={(value) => updateGenotype(group, value)}
              ariaLabel={genotypeLabel.slice(0, -1)}
              sx={sxStyles.labGenotypeInput}
            />
          </Stack>
        </Box>
        <Box component="td" sx={sxStyles.labEmptyDateCell} />
      </TableRow>
    </>
  );

  return (
    <Box component="section" sx={sxStyles.laboratoryResultSection}>
      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.laboratoryResultHeading, sxStyles.sectionHeading)}
      >
        LABORATORY RESULT
      </Typography>

      <Table sx={sxStyles.laboratoryResultTable}>
        <TableHead>
          <TableRow>
            <Box component="th" sx={sxStyles.labSpecimenHeader}>
              Specimen
            </Box>

            <Box component="th" sx={sxStyles.labResultHeader}>
              Test Result
            </Box>

            <Box component="th" sx={sxStyles.labDateHeader}>
              Date of Result
            </Box>
          </TableRow>
        </TableHead>

        <TableBody>
          {renderIgMRow("serumIgmMeasles", "Serum (IgM) for Measles")}

          {renderIgMRow("serumIgmRubella", "Serum (IgM) for Rubella")}

          {renderIgMRow("dbsIgmMeasles", "DBS (IgM) for Measles")}

          {renderIgMRow("dbsIgmRubella", "DBS (IgM) for Rubella")}

          {renderVirusGroup(
            "measlesVirusIsolation",
            "Measles Virus Isolation",
            "Genotype of Measles Virus:",
          )}
          {renderVirusGroup(
            "rubellaVirusIsolation",
            "Rubella Virus Isolation",
            "Genotype of Rubella Virus:",
          )}
        </TableBody>
      </Table>

      {laboratoryPeople.map((person) => (
        <Box
          component="div"
          key={person.kind}
          sx={mergeSx(
            sxStyles.labPersonRow,
            person.kind === "delivering"
              ? sxStyles.firstLabPersonRow
              : undefined,
          )}
        >
          {(
            [
              {
                key: person.nameKey,
                label: `Name of person ${person.kind} specimen:`,
                aria: `Name of person ${person.kind} specimen`,
                sx: sxStyles.labPersonName,
              },
              {
                key: person.designationKey,
                label: "Designation:",
                aria: `Designation of person ${person.kind} specimen`,
                sx: sxStyles.labPersonField,
              },
              {
                key: person.signatureKey,
                label: "Signature:",
                aria: `Signature of person ${person.kind} specimen`,
                sx: sxStyles.labPersonField,
              },
            ] as const
          ).map((field) => (
            <Box key={field.key} component="div" sx={field.sx}>
              <Box component="span">
                {field.key === person.nameKey ? (
                  <>Name of person {person.kind} specimen:</>
                ) : (
                  field.label
                )}
              </Box>
              <PrintableLineField
                value={laboratory[field.key]}
                onChange={(value) =>
                  updateSectionField("laboratoryResult", field.key, value)
                }
                ariaLabel={field.aria}
              />
            </Box>
          ))}
          <Stack direction="row" sx={sxStyles.labPersonDate}>
            <Box component="span">Date:</Box>
            <PrintableDateField
              value={laboratory[person.dateKey]}
              onChange={(value) =>
                updateSectionField("laboratoryResult", person.dateKey, value)
              }
              ariaLabel={person.dateAria}
            />
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

interface FinalClassificationOption {
  key: keyof FinalClassification;
  label: string;
}

const finalClassificationOptions: FinalClassificationOption[] = [
  {
    key: "clinicallyCompatibleMeasles",
    label: "Clinically compatible Measles",
  },
  {
    key: "laboratoryConfirmedMeasles",
    label: "Laboratory confirmed Measles",
  },
  {
    key: "epidemiologicallyLinkedMeasles",
    label: "Epidemiologically linked Measles",
  },
  {
    key: "clinicallyCompatibleRubella",
    label: "Clinically compatible Rubella",
  },
  {
    key: "laboratoryConfirmedRubella",
    label: "Laboratory confirmed Rubella",
  },
  {
    key: "epidemiologicallyLinkedRubella",
    label: "Epidemiologically linked Rubella",
  },
  {
    key: "discarded",
    label: "Discarded",
  },
];

interface SourceOfInfectionOption {
  key: keyof SourceOfInfection;
  label: string;
}

const sourceOfInfectionOptions: SourceOfInfectionOption[] = [
  {
    key: "endemic",
    label: "Endemic",
  },
  {
    key: "imported",
    label: "Imported",
  },
  {
    key: "importRelated",
    label: "Import related",
  },
  {
    key: "unknown",
    label: "Unknown",
  },
];

function ClassificationOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <Box component="label" sx={sxStyles.classificationOption}>
      <Box
        component="input"
        type="checkbox"
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.checked)
        }
        sx={sxStyles.classificationCheckboxInput}
      />
      <Box component="span" sx={sxStyles.classificationBox} />
      <Box component="span" sx={sxStyles.classificationLabel}>
        {label}
      </Box>
    </Box>
  );
}

function FinalClassificationSection() {
  const { formData, updateSectionField } = useMeaslesForm();

  return (
    <Box component="section" sx={sxStyles.finalClassificationSection}>
      <Box component="div" sx={sxStyles.finalClassificationBlock}>
        <Typography
          component="h2"
          variant="inherit"
          sx={mergeSx(
            sxStyles.finalClassificationHeading,
            sxStyles.sectionHeading,
          )}
        >
          FINAL CLASSIFICATION
        </Typography>

        <Box component="div" sx={sxStyles.finalClassificationOptions}>
          {finalClassificationOptions.map((option) => (
            <ClassificationOption
              key={option.key}
              label={option.label}
              checked={formData.finalClassification[option.key]}
              onChange={(checked) =>
                updateSectionField("finalClassification", option.key, checked)
              }
            />
          ))}
        </Box>
      </Box>

      <Box component="div" sx={sxStyles.sourceInfectionBlock}>
        <Typography
          component="h2"
          variant="inherit"
          sx={mergeSx(sxStyles.sourceInfectionHeading, sxStyles.sectionHeading)}
        >
          SOURCE OF INFECTION
        </Typography>

        <Stack direction="row" sx={sxStyles.sourceInfectionOptions}>
          {sourceOfInfectionOptions.map((option) => (
            <ClassificationOption
              key={option.key}
              label={option.label}
              checked={formData.sourceOfInfection[option.key]}
              onChange={(checked) =>
                updateSectionField("sourceOfInfection", option.key, checked)
              }
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

type ComplicationKey = keyof FollowUpInformation["complications"];

type Outcome = FollowUpInformation["outcome"];

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

function FollowUpInformationSection() {
  const { formData, setFormData, updateSectionField } = useMeaslesForm();

  const followUp = formData.followUpInformation;

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
    <Box component="section" sx={sxStyles.followUpSection}>
      <Box component="div" sx={sxStyles.additionalCommentsBlock}>
        <Box component="span" sx={sxStyles.followUpBoldLabel}>
          ADDITIONAL COMMENTS (if any):
        </Box>

        <Box
          component="textarea"
          value={formData.additionalComments}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setFormData((previous) => ({
              ...previous,
              additionalComments: event.target.value,
            }))
          }
          aria-label="Additional comments"
          sx={sxStyles.additionalCommentsInput}
        />
      </Box>

      <Typography
        component="h2"
        variant="inherit"
        sx={mergeSx(sxStyles.followUpHeading, sxStyles.sectionHeading)}
      >
        FOLLOW UP INFORMATION:
      </Typography>

      <Stack direction="row" sx={sxStyles.followUpRow}>
        <Box component="span" sx={sxStyles.followUpQuestion}>
          1. Did the case Followed-up 30 days after rash onset?
        </Box>

        <PrintableYesNo
          name="followed-up-thirty-days"
          value={followUp.followedUpThirtyDaysAfterRashOnset}
          onChange={(value) =>
            updateSectionField(
              "followUpInformation",
              "followedUpThirtyDaysAfterRashOnset",
              value as YesNo,
            )
          }
        />

        <Box component="span" sx={sxStyles.followUpIfYes}>
          <Box
            component="span"
            sx={mergeSx(sxStyles.followUpIfYesEmphasis, {
              textDecoration: "none",
            })}
          >
            IF YES,
          </Box>

          <Box component="span" sx={sxStyles.followUpDateLabel}>
            Date of follow-up:
          </Box>
        </Box>

        <PrintableDateField
          value={followUp.followUpDate}
          onChange={(value) =>
            updateSectionField("followUpInformation", "followUpDate", value)
          }
          ariaLabel="Date of follow-up"
          sx={sxStyles.followUpDateInput}
        />
      </Stack>

      <Stack direction="row" sx={sxStyles.followUpRow}>
        <Box component="span" sx={sxStyles.followUpQuestion}>
          2. Is or was there any complicacy as a result of Measles infection?
        </Box>

        <PrintableYesNo
          name="measles-complication"
          value={followUp.hasComplicationFromMeasles}
          onChange={(value) =>
            updateSectionField(
              "followUpInformation",
              "hasComplicationFromMeasles",
              value as YesNo,
            )
          }
        />
      </Stack>

      <Stack direction="row" sx={sxStyles.followUpComplicationRow}>
        <Box component="span" sx={sxStyles.followUpQuestion}>
          3.{" "}
          <Box component="span" sx={sxStyles.followUpIfYesEmphasis}>
            If YES,
          </Box>{" "}
          <Box component="span" sx={sxStyles.followUpNormalText}>
            what (mark all that apply)?
          </Box>
        </Box>

        <Stack direction="row" sx={sxStyles.followUpComplicationOptions}>
          {complicationOptions.map((option) => (
            <Box
              component="label"
              key={option.key}
              sx={sxStyles.followUpCheckboxOption}
            >
              <Box
                component="input"
                type="checkbox"
                checked={followUp.complications[option.key]}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateComplication(option.key, event.target.checked)
                }
                sx={sxStyles.followUpCheckboxInput}
              />

              <Box component="span" sx={sxStyles.followUpCheckboxBox} />

              <Box component="span">{option.label}</Box>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack direction="row" sx={sxStyles.followUpOthersRow}>
        <Box component="label" sx={sxStyles.followUpCheckboxOption}>
          <Box
            component="input"
            type="checkbox"
            checked={followUp.complications.others}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateComplication("others", event.target.checked)
            }
            sx={sxStyles.followUpCheckboxInput}
          />

          <Box component="span" sx={sxStyles.followUpCheckboxBox} />

          <Box component="span">Others (specify):</Box>
        </Box>

        <PrintableLineField
          value={followUp.otherComplicationDetails}
          onChange={(value) =>
            updateSectionField(
              "followUpInformation",
              "otherComplicationDetails",
              value,
            )
          }
          ariaLabel="Other complication details"
          sx={sxStyles.followUpOtherDetailsInput}
        />
      </Stack>

      <Stack direction="row" sx={sxStyles.followUpOutcomeRow}>
        <Box component="span" sx={sxStyles.followUpQuestion}>
          4.{" "}
          <Box component="span" sx={sxStyles.followUpOutcomeLabel}>
            Outcome of the case:
          </Box>
        </Box>

        {(["alive", "died"] as const).map((outcome) => (
          <Box
            key={outcome}
            component="label"
            sx={sxStyles.followUpCheckboxOption}
          >
            <Box
              component="input"
              type="radio"
              name="case-outcome"
              checked={followUp.outcome === outcome}
              onChange={() => updateOutcome(outcome)}
              sx={sxStyles.followUpCheckboxInput}
            />
            <Box component="span" sx={sxStyles.followUpCheckboxBox} />
            <Box component="span">{outcome === "alive" ? "Alive" : "Died"}</Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

/* ---------------------------------------------------------
   DIGITAL FOOTER
   --------------------------------------------------------- */

function DigitalFooter() {
  const { formData, setFormData } = useMeaslesForm();

  const digitalFooter = formData.digitalFooter;

  return (
    <Box component="footer" sx={sxStyles.digitalFooter}>
      <Box component="div" sx={sxStyles.digitalFooterLeft}>
        <Box component="div" sx={sxStyles.digitalCopyNote}>
          This is a digital copy, no signature required
        </Box>

        <Stack direction="row" sx={sxStyles.digitalFooterField}>
          <Box component="span" sx={sxStyles.digitalFooterLabel}>
            Printed by:
          </Box>

          <Box component="span" sx={sxStyles.digitalFooterValue}>
            {digitalFooter.printedBy}
          </Box>
        </Stack>

        <Stack direction="row" sx={sxStyles.digitalFooterField}>
          <Box component="span" sx={sxStyles.digitalFooterLabel}>
            Status:
          </Box>

          <Box
            component="input"
            type="text"
            value={digitalFooter.status}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData((previous) => ({
                ...previous,

                digitalFooter: {
                  ...previous.digitalFooter,
                  status: event.target.value,
                },
              }))
            }
            aria-label="Form completion status"
            sx={sxStyles.digitalFooterStatusInput}
          />
        </Stack>
      </Box>

      <Box component="div" sx={sxStyles.digitalFooterRight}>
        Supported by WHO
      </Box>
    </Box>
  );
}

/* =========================================================
   PAGE COMPONENTS
   ========================================================= */

function MeaslesFormPageOne() {
  return (
    <Box
      component="section"
      aria-label="Suspected Measles Case Investigation Form - Page 1"
      sx={mergeSx(
        sxStyles.printPage,
        sxStyles.pageOne,
        sxStyles.printPageReset,
      )}
    >
      <Box component="div" sx={sxStyles.pageContent}>
        <HeaderSection />
        <BackgroundInformationSection />
        <PatientIdentificationSection />
        <ClinicalInformationSection />
        <AdditionalClinicalInformationSection />
        <VaccinationHistorySection />
        <TravelHistorySection />
        <SpecimenCollectionSection />
      </Box>
    </Box>
  );
}

function MeaslesFormPageTwo() {
  return (
    <Box
      component="section"
      aria-label="Suspected Measles Case Investigation Form - Page 2"
      sx={mergeSx(
        sxStyles.printPage,
        sxStyles.pageTwo,
        sxStyles.printPageReset,
      )}
    >
      <Box component="div" sx={sxStyles.pageContent}>
        <SpecimenConditionSection />
        <LaboratoryResultSection />
        <FinalClassificationSection />
        <FollowUpInformationSection />
      </Box>
      <DigitalFooter />
    </Box>
  );
}

/* =========================================================
   ENTRY COMPONENT
   ========================================================= */

export default function MeaslesCaseInvestigationForm() {
  return (
    <MeaslesFormProvider>
      <GlobalStyles styles={DOCUMENT_PRINT_STYLES} />
      <Box
        component="main"
        aria-label="Suspected Measles Case Investigation Form"
        sx={sxStyles.formPreview}
      >
        <MeaslesFormPageOne />
        <MeaslesFormPageTwo />
      </Box>
    </MeaslesFormProvider>
  );
}
