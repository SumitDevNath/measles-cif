import type { MeaslesFormData } from "../types/measlesForm.types";

export const createMeaslesMockData = (
  current: MeaslesFormData,
): MeaslesFormData => ({
  ...current,

  /* =========================================================
   BACKGROUND INFORMATION
   ========================================================= */

  backgroundInformation: {
    ...current.backgroundInformation,

    outbreakId: {
      districtCode: "26",
      upazilaMunicipalityCode: "15",
      onsetYear: "2026",
      outbreakNumber: "001",
    },

    isIndexCase: "yes",

    focalPersonNotifiedDate: "12/09/2026",

    personNotifyingName: "Dr. Md. Hasan Ali",

    investigationDate: "13/09/2026",

    designationAddress: "Medical Officer, Dhaka District",

    healthFacilityName: "Dhaka Medical College Hospital",

    healthFacilityType: "gob",

    visitAdmissionDate: "12/09/2026",

    medicalRecordNumber: "MR-2026-00125",
  },

  /* =========================================================
   PATIENT IDENTIFICATION
   ========================================================= */

  patientIdentification: {
    ...current.patientIdentification,

    caseId: {
      districtCode: "26",
      upazilaMunicipalityCode: "15",
      onsetYear: "2026",
      caseNumber: "0001",
    },

    patientName: "Mohammad Rahim Hasan",

    fatherGuardianName: "Md. Karim Hasan",

    contactNumber: "01712345678",

    dateOfBirth: "15/06/2018",

    age: "8",

    sex: "male",

    religion: "Islam",

    houseStreetAddress: "House 12, Road 7, Mirpur",

    rural: {
      village: "",
      union: "",
      upazila: "",
      district: "",
    },

    urban: {
      mahalla: "Mirpur",

      wardNumber: "10",

      zone: "2",

      municipalityCityCorporation: "Dhaka North City Corporation",

      district: "Dhaka",
    },
  },
  /* =========================================================
     CLINICAL INFORMATION
     ========================================================= */

  clinicalInformation: {
    ...current.clinicalInformation,

    fever: "yes",
    feverOnsetDate: "12/09/2026",

    generalizedMaculopapularRash: "yes",
    rashOnsetDate: "14/09/2026",
  },

  /* =========================================================
     ADDITIONAL CLINICAL INFORMATION
     ========================================================= */

  additionalClinicalInformation: {
    ...current.additionalClinicalInformation,

    cough: "yes",
    coryza: "yes",
    conjunctivitis: "no",

    jointPain: "yes",
    jointsAffected: "Knee and ankle",

    lymphNodeSwelling: "yes",

    subOccipital: "yes",
    postAuricular: "no",
    cervical: "yes",

    pregnant: "no",
    pregnancyDurationWeeks: "",
  },

  /* =========================================================
     VACCINATION HISTORY
     ========================================================= */

  vaccinationHistory: current.vaccinationHistory.map((row, index) => {
    if (index === 0) {
      return {
        ...row,

        routineByCard: "1",
        routineByHistory: "0",
        sia: "1",
        lastDoseDate: "10/03/2025",
      };
    }

    if (index === 1) {
      return {
        ...row,

        routineByCard: "1",
        routineByHistory: "1",
        sia: "0",
        lastDoseDate: "15/08/2024",
      };
    }

    return {
      ...row,

      routineByCard: "0",
      routineByHistory: "1",
      sia: "0",
      lastDoseDate: "20/01/2025",
    };
  }),

  /* =========================================================
     TRAVEL HISTORY
     ========================================================= */

  travelHistory: {
    ...current.travelHistory,

    traveledOrReceivedVisitor: "yes",

    travelStartDate: "01/09/2026",
    travelEndDate: "05/09/2026",

    placeToFromTravel: "Chattogram",

    houseStreetAddress: "Road 5, Agrabad Residential Area",

    villageMahalla: "Agrabad",
    unionWard: "Ward 27",

    upazilaMunicipalityCityCorporation: "Chattogram City Corporation",

    district: "Chattogram",
  },

  specimenCollection: {
    ...current.specimenCollection,

    rows: current.specimenCollection.rows.map((row) => {
      switch (row.specimen) {
        case "serum":
          return {
            ...row,
            dateCollected: "16/09/2026",
            dateSentToNpml: "16/09/2026",
            dateReceivedAtNpml: "17/09/2026",
            specimenCode: "SER-001",
          };

        case "dbs":
          return {
            ...row,
            dateCollected: "16/09/2026",
            dateSentToNpml: "16/09/2026",
            dateReceivedAtNpml: "17/09/2026",
            specimenCode: "DBS-001",
          };

        case "urine":
          return {
            ...row,
            dateCollected: "15/09/2026",
            dateSentToNpml: "16/09/2026",
            dateReceivedAtNpml: "17/09/2026",
            specimenCode: "URN-001",
          };

        case "nasopharyngeal-swab":
          return {
            ...row,
            dateCollected: "15/09/2026",
            dateSentToNpml: "16/09/2026",
            dateReceivedAtNpml: "17/09/2026",
            specimenCode: "NPS-001",
          };

        default:
          return row;
      }
    }),

    mtLabSignature: "Rahim",
    mtLabSignatureDate: "16/09/2026",

    caseInvestigatedBy: "Dr. Farhana Islam",
    investigatorDesignation: "Medical Officer",
    investigatorSignature: "Farhana",
    investigatorDate: "16/09/2026",

    reportSentBy: "Md. Kamal Hossain",
    reportSenderDesignation: "Surveillance Officer",
    reportSenderSignature: "Kamal",
    reportSentDate: "17/09/2026",
  },

  /* =========================================================
     SPECIMEN CONDITION
     ========================================================= */

  specimenCondition: {
    ...current.specimenCondition,

    serum: {
      cold: "yes",
      sufficientQuantity: "yes",
      leakage: "no",
      turbid: "no",
      desiccated: "no",
    },

    dbs: {
      ...current.specimenCondition.dbs,

      sufficientQuantity: "yes",
    },

    urine: {
      cold: "yes",
      sufficientQuantity: "yes",
      leakage: "no",
      turbid: "no",
      desiccated: "no",
    },

    nasopharyngealSwab: {
      cold: "yes",
      sufficientQuantity: "yes",
      leakage: "no",
      turbid: "no",
      desiccated: "no",
    },
  },

  /* =========================================================
     LABORATORY RESULT
     ========================================================= */

  laboratoryResult: {
    ...current.laboratoryResult,

    serumIgmMeasles: {
      result: "positive",
      dateOfResult: "18/09/2026",
    },

    serumIgmRubella: {
      result: "negative",
      dateOfResult: "18/09/2026",
    },

    dbsIgmMeasles: {
      result: "negative",
      dateOfResult: "19/09/2026",
    },

    dbsIgmRubella: {
      result: "negative",
      dateOfResult: "19/09/2026",
    },

    measlesVirusIsolation: {
      urine: {
        result: "positive",
        dateOfResult: "20/09/2026",
      },

      nasopharyngealSwab: {
        result: "positive",
        dateOfResult: "20/09/2026",
      },

      oralFluid: {
        result: "negative",
        dateOfResult: "20/09/2026",
      },

      genotype: "B3",
    },

    rubellaVirusIsolation: {
      urine: {
        result: "negative",
        dateOfResult: "20/09/2026",
      },

      nasopharyngealSwab: {
        result: "negative",
        dateOfResult: "20/09/2026",
      },

      oralFluid: {
        result: "negative",
        dateOfResult: "20/09/2026",
      },

      genotype: "",
    },

    deliveringPersonName: "Md. Rahim Uddin",

    deliveringPersonDesignation: "Medical Technologist",

    deliveringPersonSignature: "Rahim",

    deliveringDate: "16/09/2026",

    receivingPersonName: "Dr. Nusrat Jahan",

    receivingPersonDesignation: "Medical Officer",

    receivingPersonSignature: "Nusrat",

    receivingDate: "17/09/2026",
  },

  /* =========================================================
     FINAL CLASSIFICATION
     ========================================================= */

  finalClassification: {
    clinicallyCompatibleMeasles: false,

    laboratoryConfirmedMeasles: true,

    epidemiologicallyLinkedMeasles: false,

    clinicallyCompatibleRubella: false,

    laboratoryConfirmedRubella: false,

    epidemiologicallyLinkedRubella: false,

    discarded: false,
  },

  /* =========================================================
     SOURCE OF INFECTION
     ========================================================= */

  sourceOfInfection: {
    endemic: true,

    imported: false,

    importRelated: false,

    unknown: false,
  },

  /* =========================================================
     ADDITIONAL COMMENTS
     ========================================================= */

  additionalComments: "Patient recovered without any major complication.",

  /* =========================================================
     FOLLOW-UP INFORMATION
     ========================================================= */

  followUpInformation: {
    ...current.followUpInformation,

    followedUpThirtyDaysAfterRashOnset: "yes",

    followUpDate: "14/10/2026",

    hasComplicationFromMeasles: "yes",

    complications: {
      ari: true,
      diarrhoea: false,
      otitisMedia: true,
      malnutrition: false,
      encephalitis: false,
      others: false,
    },

    otherComplicationDetails: "",

    outcome: "alive",
  },

  /* =========================================================
     DIGITAL FOOTER
     ========================================================= */

  digitalFooter: {
    printedBy: "Test User",

    status: "Case investigation completed",
  },
});
