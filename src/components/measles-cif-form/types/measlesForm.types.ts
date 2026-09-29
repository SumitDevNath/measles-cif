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

  /*
   * The PDF shows DBS differently from the other rows.
   * We keep the full frontend shape for future API mapping,
   * while the rendered component will decide which controls
   * are visually shown.
   */
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
